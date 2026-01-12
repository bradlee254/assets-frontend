<script setup lang="ts">
import { defineProps, ref } from 'vue';
import Card from '../../components/ui/Card.vue';
import Tabs from '../../components/ui/Tabs.vue';
import Button from '../../components/ui/Button.vue';
import Badge from '../../components/ui/Badge.vue';
import FileUpload from '../../components/ui/FileUpload.vue';
// Props
const props = defineProps<{ id: string }>();
const assetId = props.id;

// Mock assets
const assets = [
  { id: 'A001', name: 'Laptop Dell XPS', type: 'Physical', category: 'Laptop', serial: 'DX123456', model: 'XPS 15', supplier: 'Dell', purchaseDate: '2025-12-01', cost: 2500, department: 'IT', assignedTo: 'John Doe', status: 'Active' },
  { id: 'A002', name: 'Adobe CC License', type: 'Soft', category: 'Software', serial: 'AD123', model: 'CC2025', supplier: 'Adobe', purchaseDate: '2025-11-10', cost: 500, department: 'Design', assignedTo: 'Jane Smith', status: 'Assigned' },
];


const asset = assets.find(a => a.id === assetId) || assets[0];

const maintenanceHistory = [
  { date: '2025-12-10', work: 'OS Update', technician: 'Tech Team', cost: 0 },
  { date: '2026-01-05', work: 'Battery Replacement', technician: 'Dell Service', cost: 200 },
];

const dependents = [
  { name: 'Laptop Bag', type: 'Accessory', assignedTo: 'John Doe' },
  { name: 'Adobe License', type: 'Software', assignedTo: 'John Doe' },
];

const documents = [
  { name: 'Receipt.pdf', type: 'PDF' },
  { name: 'Warranty.pdf', type: 'PDF' },
];
</script>

<template>
  <div class="h-full flex flex-col gap-6">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold text-text-main">{{ asset.name }}</h1>
      <div class="flex gap-2">
        <Button label="Edit Asset" type="primary" @click="$router.push({ name: 'asset-edit', params: { id: asset.id } })" />
        <Button label="Delete Asset" type="danger" @click="alert('Delete mock!')" />
      </div>
    </div>

    <Card title="Asset Summary" :value="asset.id" :subtitle="`Type: ${asset.type} | Status: ${asset.status}`" :badge="{ text: asset.status, color: asset.status === 'Active' ? 'success' : 'dim' }" />

    <Tabs :tabs="['Details', 'Maintenance', 'Dependents', 'Documents']">
      <!-- Details -->
      <template #tab-0>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-app-surface rounded-lg border border-app-border-pill">
          <div>
            <p class="text-xs text-text-dim uppercase">Category</p>
            <p class="text-text-main font-medium">{{ asset.category }}</p>
          </div>
          <div>
            <p class="text-xs text-text-dim uppercase">Model</p>
            <p class="text-text-main font-medium">{{ asset.model }}</p>
          </div>
          <div>
            <p class="text-xs text-text-dim uppercase">Serial Number</p>
            <p class="text-text-main font-medium">{{ asset.serial }}</p>
          </div>
          <div>
            <p class="text-xs text-text-dim uppercase">Supplier</p>
            <p class="text-text-main font-medium">{{ asset.supplier }}</p>
          </div>
          <div>
            <p class="text-xs text-text-dim uppercase">Department</p>
            <p class="text-text-main font-medium">{{ asset.department }}</p>
          </div>
          <div>
            <p class="text-xs text-text-dim uppercase">Assigned To</p>
            <p class="text-text-main font-medium">{{ asset.assignedTo }}</p>
          </div>
          <div>
            <p class="text-xs text-text-dim uppercase">Purchase Date</p>
            <p class="text-text-main font-medium">{{ asset.purchaseDate }}</p>
          </div>
          <div>
            <p class="text-xs text-text-dim uppercase">Cost</p>
            <p class="text-text-main font-medium">${{ asset.cost }}</p>
          </div>
        </div>
      </template>

      <!-- Maintenance -->
      <template #tab-1>
        <div class="flex flex-col gap-4 p-4 bg-app-surface rounded-lg border border-app-border-pill">
          <div v-for="(m, i) in maintenanceHistory" :key="i" class="flex justify-between">
            <span>{{ m.date }} - {{ m.work }}</span>
            <span class="text-text-dim font-mono">{{ m.technician }} | ${{ m.cost }}</span>
          </div>
        </div>
      </template>

      <!-- Dependents -->
      <template #tab-2>
        <div class="flex flex-col gap-4 p-4 bg-app-surface rounded-lg border border-app-border-pill">
          <div v-for="(d, i) in dependents" :key="i" class="flex justify-between">
            <span>{{ d.name }}</span>
            <span class="text-text-dim">{{ d.type }} | Assigned To: {{ d.assignedTo }}</span>
          </div>
        </div>
      </template>

      <!-- Documents -->
      <template #tab-3>
        <div class="flex flex-col gap-4 p-4 bg-app-surface rounded-lg border border-app-border-pill">
          <div v-for="(doc, i) in documents" :key="i" class="flex justify-between items-center">
            <span>{{ doc.name }}</span>
            <FileUpload :multiple="false" />
          </div>
        </div>
      </template>
    </Tabs>
  </div>
</template>
