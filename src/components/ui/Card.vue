<script setup lang="ts">
// Mock data for now; later we’ll fetch from API
interface Asset {
  id: string;
  name: string;
  type: 'Physical' | 'Soft';
  status: 'Active' | 'Assigned' | 'Maintenance' | 'Retired';
  department: string;
  assignedTo: string;
  purchaseDate: string;
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
];
</script>

<template>
  <div class="h-full flex flex-col">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-text-main">Assets</h1>
      <button class="px-4 py-2 bg-brand text-white font-bold rounded hover:bg-brand/90 transition">
        Add New Asset
      </button>
    </div>

    <!-- Search & Filter -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
      <input
        type="text"
        placeholder="Search by name, department, or type..."
        class="w-full md:w-1/3 px-4 py-2 rounded border border-app-border-pill bg-app-surface text-text-main focus:outline-none focus:ring-2 focus:ring-brand"
      />

      <select
        class="w-full md:w-1/5 px-3 py-2 rounded border border-app-border-pill bg-app-surface text-text-main focus:outline-none focus:ring-2 focus:ring-brand"
      >
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="Assigned">Assigned</option>
        <option value="Maintenance">Maintenance</option>
        <option value="Retired">Retired</option>
      </select>
    </div>

    <!-- Table -->
    <div class="flex-1 overflow-auto bg-app-surface rounded-lg border border-app-border-pill">
      <table class="w-full text-left table-auto">
        <thead class="bg-app-bg border-b border-app-border-pill">
          <tr>
            <th class="px-4 py-3 text-xs font-bold text-text-dim uppercase tracking-wider">ID</th>
            <th class="px-4 py-3 text-xs font-bold text-text-dim uppercase tracking-wider">Name</th>
            <th class="px-4 py-3 text-xs font-bold text-text-dim uppercase tracking-wider">Type</th>
            <th class="px-4 py-3 text-xs font-bold text-text-dim uppercase tracking-wider">Status</th>
            <th class="px-4 py-3 text-xs font-bold text-text-dim uppercase tracking-wider">Department</th>
            <th class="px-4 py-3 text-xs font-bold text-text-dim uppercase tracking-wider">Assigned To</th>
            <th class="px-4 py-3 text-xs font-bold text-text-dim uppercase tracking-wider">Purchase Date</th>
            <th class="px-4 py-3 text-xs font-bold text-text-dim uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="asset in assets"
            :key="asset.id"
            class="border-b border-app-border-pill hover:bg-white/[0.02] transition-colors"
          >
            <td class="px-4 py-3 text-sm font-medium text-text-main">{{ asset.id }}</td>
            <td class="px-4 py-3 text-sm text-text-main">{{ asset.name }}</td>
            <td class="px-4 py-3 text-sm text-text-main">{{ asset.type }}</td>
            <td class="px-4 py-3 text-sm font-bold">
              <span
                :class="{
                  'text-success': asset.status === 'Active',
                  'text-brand': asset.status === 'Assigned',
                  'text-warning': asset.status === 'Maintenance',
                  'text-text-dim italic': asset.status === 'Retired',
                }"
              >
                {{ asset.status }}
              </span>
            </td>
            <td class="px-4 py-3 text-sm text-text-main">{{ asset.department }}</td>
            <td class="px-4 py-3 text-sm text-text-main">{{ asset.assignedTo }}</td>
            <td class="px-4 py-3 text-sm text-text-main">{{ asset.purchaseDate }}</td>
            <td class="px-4 py-3 text-sm flex gap-2">
              <button class="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition">
                Edit
              </button>
              <button class="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="mt-4 flex justify-end items-center gap-2 text-sm text-text-dim">
      <button class="px-3 py-1 rounded border border-app-border-pill hover:bg-white/5 transition">Prev</button>
      <span>Page 1 of 10</span>
      <button class="px-3 py-1 rounded border border-app-border-pill hover:bg-white/5 transition">Next</button>
    </div>
  </div>
</template>
