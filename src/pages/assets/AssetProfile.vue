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
  <div class="space-y-6 text-var(--color-text-main)">
    <h1 class="text-xl font-bold">Asset Profile</h1>

    <!-- Tabs -->
    <div class="flex gap-6 border-b border-var(--color-app-border-pill)">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        @click="activeTab = tab.key"
        class="pb-3 text-sm"
        :class="activeTab === tab.key
          ? 'border-b-2 border-var(--color-brand) text-white'
          : 'text-var(--color-text-muted)'"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Content Surface -->
    <div
      class="rounded p-6 border border-(--color-app-border) bg-(--color-app-surface)"
    >
      <AssetAssign v-if="activeTab === 'assign'" />
      <AssetMaintenance v-if="activeTab === 'maintenance'" />
      <AssetDocuments v-if="activeTab === 'documents'" />
    </div>
  </div>
</template>
