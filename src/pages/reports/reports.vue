<script setup lang="ts">
import { ref, computed } from 'vue'
import Table from '../../components/ui/Table.vue'
import Input from '../../components/ui/Input.vue'
import Select from '../../components/ui/Select.vue'
import Button from '../../components/ui/Button.vue'
import Pagination from '../../components/ui/Pagination.vue'

// Asset interface
interface Asset {
  id: string
  name: string
  type: 'Physical' | 'Soft'
  category: string
  status: 'Active' | 'Assigned' | 'Maintenance' | 'Retired'
  department: string
  assignedTo: string
  purchaseDate: string
}

// Mock report data
const assets = ref<Asset[]>([
  { id: 'A001', name: 'Laptop Dell XPS', type: 'Physical', category: 'Laptop', status: 'Active', department: 'IT', assignedTo: 'John Doe', purchaseDate: '2025-12-01' },
  { id: 'A002', name: 'Adobe CC License', type: 'Soft', category: 'Software', status: 'Assigned', department: 'Design', assignedTo: 'Jane Smith', purchaseDate: '2025-11-10' },
  { id: 'A003', name: 'Projector Epson', type: 'Physical', category: 'Projector', status: 'Maintenance', department: 'HR', assignedTo: 'N/A', purchaseDate: '2024-09-15' },
])

// Filters
const search = ref('')
const filterType = ref('')
const filterCategory = ref('')
const filterStatus = ref('')

// Options
const typeOptions = [
  { label: 'All Types', value: '' },
  { label: 'Physical', value: 'Physical' },
  { label: 'Soft', value: 'Soft' },
]

const categoryOptions = [
  { label: 'All Categories', value: '' },
  { label: 'Laptop', value: 'Laptop' },
  { label: 'Software', value: 'Software' },
  { label: 'Projector', value: 'Projector' },
]

const statusOptions = [
  { label: 'All Status', value: '' },
  { label: 'Active', value: 'Active' },
  { label: 'Assigned', value: 'Assigned' },
  { label: 'Maintenance', value: 'Maintenance' },
  { label: 'Retired', value: 'Retired' },
]

// Pagination
const currentPage = ref(1)
const perPage = 5
const totalPages = computed(() => Math.ceil(filteredAssets.value.length / perPage))

// Filtered assets
const filteredAssets = computed(() => {
  return assets.value
    .filter(a =>
      (!search.value || a.name.toLowerCase().includes(search.value.toLowerCase()) || a.department.toLowerCase().includes(search.value.toLowerCase()))
      && (!filterType.value || a.type === filterType.value)
      && (!filterCategory.value || a.category === filterCategory.value)
      && (!filterStatus.value || a.status === filterStatus.value)
    )
    .slice((currentPage.value - 1) * perPage, currentPage.value * perPage)
})

// Export functions (mock)
const exportCSV = () => alert('Export CSV - Mock')
const exportPDF = () => alert('Export PDF - Mock')
const printReport = () => alert('Print Report - Mock')
</script>

<template>
  <div class="h-full flex flex-col gap-6">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold text-text-main">Reports</h1>
      <div class="flex gap-2">
        <Button label="Export CSV" type="primary" @click="exportCSV" />
        <Button label="Export PDF" type="secondary" @click="exportPDF" />
        <Button label="Print" type="secondary" @click="printReport" />
      </div>
    </div>

    <!-- Filters -->
    <div class="flex flex-col md:flex-row gap-4 md:items-end">
      <Input v-model="search" placeholder="Search by name or department..." />
      <Select v-model="filterType" :options="typeOptions" />
      <Select v-model="filterCategory" :options="categoryOptions" />
      <Select v-model="filterStatus" :options="statusOptions" />
      <Button label="Generate Report" type="brand" />
    </div>

    <!-- Table -->
    <div class="flex-1 overflow-auto bg-app-surface rounded-lg border border-app-border-pill">
      <Table :headers="['ID', 'Name', 'Type', 'Category', 'Status', 'Department', 'Assigned To', 'Purchase Date']">
        <tr v-for="asset in filteredAssets" :key="asset.id" class="border-b border-app-border-pill hover:bg-white/[0.02] transition-colors">
          <td class="px-4 py-3 text-sm text-text-main">{{ asset.id }}</td>
          <td class="px-4 py-3 text-sm text-text-main">{{ asset.name }}</td>
          <td class="px-4 py-3 text-sm text-text-main">{{ asset.type }}</td>
          <td class="px-4 py-3 text-sm text-text-main">{{ asset.category }}</td>
          <td class="px-4 py-3 text-sm text-text-main">{{ asset.status }}</td>
          <td class="px-4 py-3 text-sm text-text-main">{{ asset.department }}</td>
          <td class="px-4 py-3 text-sm text-text-main">{{ asset.assignedTo }}</td>
          <td class="px-4 py-3 text-sm text-text-main">{{ asset.purchaseDate }}</td>
        </tr>
        <tr v-if="filteredAssets.length === 0">
          <td colspan="8" class="px-4 py-8 text-center text-text-muted">No assets found</td>
        </tr>
      </Table>
    </div>

    <!-- Pagination -->
    <Pagination :page="currentPage" :totalPages="totalPages" @prev="currentPage--" @next="currentPage++" />
  </div>
</template>
