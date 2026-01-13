<script setup>
import { ref } from 'vue'
import AssetAssign from './AssetAssign.vue'
import AssetMaintenance from './AssetMaintanance.vue'
import AssetDocuments from './AssetDocuments.vue'

const activeTab = ref('assign')

const tabs = [
  { key: 'assign', label: 'Assign' },
  { key: 'maintenance', label: 'Maintenance' },
  { key: 'documents', label: 'Documents' }
]
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-xl font-bold">Asset Profile</h1>

    <!-- Tabs -->
    <div class="flex gap-4 border-b">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        @click="activeTab = tab.key"
        class="pb-2"
        :class="activeTab === tab.key
          ? 'border-b-2 border-blue-600 font-semibold'
          : 'text-gray-500'"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Content -->
    <div class="bg-white p-6 rounded shadow">
      <AssetAssign v-if="activeTab === 'assign'" />
      <AssetMaintenance v-if="activeTab === 'maintenance'" />
      <AssetDocuments v-if="activeTab === 'documents'" />
    </div>
  </div>
</template>
