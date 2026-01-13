<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import Badge from '../../components/ui/Badge.vue'
import Button from '../../components/ui/Button.vue'
import Table from '../../components/ui/Table.vue'
import Input from '../../components/ui/Input.vue'
import Select from '../../components/ui/Select.vue'
import Pagination from '../../components/ui/Pagination.vue'

interface Asset {
  id: string
  name: string
  type: 'Physical' | 'Soft'
  status: 'Active' | 'Assigned' | 'Maintenance' | 'Retired'
  department: string
  assignedTo: string
  purchaseDate: string
}

const assets: Asset[] = [
  {
    id: 'A001',
    name: 'Laptop Dell XPS',
    type: 'Physical',
    status: 'Active',
    department: 'IT',
    assignedTo: 'John Doe',
    purchaseDate: '2025-12-01',
  },
  {
    id: 'A002',
    name: 'Adobe CC License',
    type: 'Soft',
    status: 'Assigned',
    department: 'Design',
    assignedTo: 'Jane Smith',
    purchaseDate: '2025-11-10',
  },
  {
    id: 'A003',
    name: 'Projector Epson',
    type: 'Physical',
    status: 'Maintenance',
    department: 'HR',
    assignedTo: 'N/A',
    purchaseDate: '2024-09-15',
  },
]

const router = useRouter()

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

// ✅ single source of truth for navigation
const goToAssetProfile = (id: string) => {
  router.push({ name: 'asset-profile', params: { id } })
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
      <Input
        v-model="search"
        placeholder="Search by name, department, or type..."
      />
      <Select
        v-model="filterStatus"
        :options="statusOptions"
      />
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
          v-for="asset in assets"
          :key="asset.id"
          class="border-b border-app-border-pill hover:bg-white/[0.02] transition-colors cursor-pointer"
          @click="goToAssetProfile(asset.id)"
        >
          <td class="px-4 py-3 text-sm font-medium text-text-main">
            {{ asset.id }}
          </td>

          <td class="px-4 py-3 text-sm text-text-main">
            {{ asset.name }}
          </td>

          <td class="px-4 py-3 text-sm text-text-main">
            {{ asset.type }}
          </td>

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

          <td class="px-4 py-3 text-sm text-text-main">
            {{ asset.department }}
          </td>

          <td class="px-4 py-3 text-sm text-text-main">
            {{ asset.assignedTo }}
          </td>

          <td class="px-4 py-3 text-sm text-text-main">
            {{ asset.purchaseDate }}
          </td>

          <!-- Actions -->
          <td class="px-4 py-3 text-sm flex gap-2">
            <Button
              label="Edit"
              type="secondary"
              small
              @click.stop="router.push({ name: 'asset-edit', params: { id: asset.id } })"
            />
            <Button
              label="Delete"
              type="danger"
              small
              @click.stop="alert('Delete mock!')"
            />
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
