<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

import Badge from '../../components/ui/Badge.vue'
import Button from '../../components/ui/Button.vue'
import Table from '../../components/ui/Table.vue'
import Input from '../../components/ui/Input.vue'
import Select from '../../components/ui/Select.vue'
import Pagination from '../../components/ui/Pagination.vue'
import { useAssets } from '../../composable/useAssets'

const router = useRouter()

// Store
const { assets, deleteAsset } = useAssets()

// Search & Filter
const search = ref('')
const filterStatus = ref('')
const currentPage = ref(1)
const totalPages = 1

const statusOptions = [
  { label: 'All Status', value: '' },
  { label: 'Active', value: 'Active' },
  { label: 'Assigned', value: 'Assigned' },
  { label: 'Maintenance', value: 'Maintenance' },
  { label: 'Retired', value: 'Retired' },
]

// Filtered assets
const filteredAssets = computed(() => {
  return assets.value.filter(a => {
    const matchesSearch =
      a.name.toLowerCase().includes(search.value.toLowerCase()) ||
      a.department.toLowerCase().includes(search.value.toLowerCase()) ||
      a.type.toLowerCase().includes(search.value.toLowerCase())

    const matchesStatus = filterStatus.value ? a.status === filterStatus.value : true

    return matchesSearch && matchesStatus
  })
})

// Navigation
const goToAssetProfile = (id: string) => {
  router.push({ name: 'asset-profile', params: { id } })
}

const goToEdit = (id: string) => {
  router.push({ name: 'asset-edit', params: { id } })
}
</script>

<template>
  <div class="h-full flex flex-col gap-6">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold text-text-main">Assets</h1>
      <Button
        label="Add New Asset"
        type="primary"
        @click="router.push({ name: 'asset-new' })"
      />
    </div>

    <!-- Search & Filter -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <Input v-model="search" placeholder="Search by name, department, or type..." />
      <Select v-model="filterStatus" :options="statusOptions" />
    </div>

    <!-- Table -->
    <div class="flex-1 overflow-auto bg-app-surface rounded-lg border border-app-border-pill">
      <Table
        :headers="[
          'ID',
          'Name',
          'Type',
          'Status',
          'Department',
          'Assigned To',
          'Purchase Date',
          'Actions'
        ]"
      >
        <tr
          v-for="asset in filteredAssets"
          :key="asset.id"
          class="border-b border-app-border-pill hover:bg-white/[0.02] transition-colors cursor-pointer"
          @click="goToAssetProfile(asset.id)"
        >
          <td class="px-4 py-3 text-sm font-medium text-text-main">{{ asset.id }}</td>
          <td class="px-4 py-3 text-sm text-text-main">{{ asset.name }}</td>
          <td class="px-4 py-3 text-sm text-text-main">{{ asset.type }}</td>
          <td class="px-4 py-3 text-sm font-bold">
            <Badge
              :text="asset.status"
              :color="
                asset.status === 'Active'
                  ? 'success'
                  : asset.status === 'Assigned'
                  ? 'brand'
                  : asset.status === 'Maintenance'
                  ? 'warning'
                  : 'dim'
              "
            />
          </td>
          <td class="px-4 py-3 text-sm text-text-main">{{ asset.department }}</td>
          <td class="px-4 py-3 text-sm text-text-main">{{ asset.assignedTo }}</td>
          <td class="px-4 py-3 text-sm text-text-main">{{ asset.purchaseDate }}</td>

          <!-- Actions -->
          <td class="px-4 py-3 text-sm flex gap-2" @click.stop>
            <Button label="Edit" type="secondary" small @click="goToEdit(asset.id)" />
            <Button label="Delete" type="danger" small @click="deleteAsset(asset.id)" />
          </td>
        </tr>

        <tr v-if="filteredAssets.length === 0">
          <td colspan="8" class="px-4 py-8 text-center text-text-muted">
            No assets found
          </td>
        </tr>
      </Table>
    </div>

    <!-- Pagination -->
    <Pagination
      :page="currentPage"
      :totalPages="totalPages"
      @prev="currentPage--"
      @next="currentPage++"
    />
  </div>
</template>
