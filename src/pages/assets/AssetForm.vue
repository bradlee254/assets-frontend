<script setup lang="ts">
import { ref } from 'vue';
import Input from '../../components/ui/Input.vue';
import Select from '../../components/ui/Select.vue';
import Button from '../../components/ui/Button.vue';
import FileUpload from '../../components/ui/FileUpload.vue';
import Card from '../../components/ui/Card.vue';
import { defineProps } from 'vue';

// Props: optional asset for edit mode
defineProps<{ id?: string }>();

// Mock: fetch asset by id if editing
const assets = [
  { id: 'A001', name: 'Laptop Dell XPS', type: 'Physical', category: 'Laptop', serial: 'DX123456', model: 'XPS 15', supplier: 'Dell', purchaseDate: '2025-12-01', cost: 2500, department: 'IT', assignedTo: 'John Doe', status: 'Active' },
  { id: 'A002', name: 'Adobe CC License', type: 'Soft', category: 'Software', serial: 'AD123', model: 'CC2025', supplier: 'Adobe', purchaseDate: '2025-11-10', cost: 500, department: 'Design', assignedTo: 'Jane Smith', status: 'Assigned' },
];

const asset = props.id ? assets.find(a => a.id === props.id) : null;

const form = ref({
  name: asset?.name || '',
  type: asset?.type || 'Physical',
  category: asset?.category || '',
  serial: asset?.serial || '',
  model: asset?.model || '',
  supplier: asset?.supplier || '',
  purchaseDate: asset?.purchaseDate || '',
  cost: asset?.cost || '',
  department: asset?.department || '',
  assignedTo: asset?.assignedTo || '',
  status: asset?.status || 'Active',
  documents: [] as File[],
});

const typeOptions = [
  { label: 'Physical', value: 'Physical' },
  { label: 'Soft', value: 'Soft' },
];

const statusOptions = [
  { label: 'Active', value: 'Active' },
  { label: 'Assigned', value: 'Assigned' },
  { label: 'Maintenance', value: 'Maintenance' },
  { label: 'Retired', value: 'Retired' },
];

const categoryOptions = [
  { label: 'Laptop', value: 'Laptop' },
  { label: 'Software', value: 'Software' },
  { label: 'Accessory', value: 'Accessory' },
  { label: 'Other', value: 'Other' },
];

const departmentOptions = [
  { label: 'IT', value: 'IT' },
  { label: 'HR', value: 'HR' },
  { label: 'Design', value: 'Design' },
  { label: 'Finance', value: 'Finance' },
];

const handleSubmit = () => {
  console.log('Form submitted:', form.value);
  alert('Form submitted (mock)!');
};

const handleFileUpload = (files: FileList | null) => {
  if (files) form.value.documents = Array.from(files);
};
</script>

<template>
  <div class="h-full flex flex-col gap-6">
    <h1 class="text-2xl font-bold text-text-main">{{ asset ? 'Edit Asset' : 'Add New Asset' }}</h1>

    <Card title="Asset Details" :value="form.value.name || 'New Asset'">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <Input v-model="form.value.name" placeholder="Asset Name" />
        <Select v-model="form.value.type" :options="typeOptions" />
        <Select v-model="form.value.category" :options="categoryOptions" />
        <Input v-model="form.value.serial" placeholder="Serial Number" />
        <Input v-model="form.value.model" placeholder="Model" />
        <Input v-model="form.value.supplier" placeholder="Supplier" />
        <Input v-model="form.value.purchaseDate" type="date" placeholder="Purchase Date" />
        <Input v-model="form.value.cost" type="number" placeholder="Cost ($)" />
        <Select v-model="form.value.department" :options="departmentOptions" />
        <Input v-model="form.value.assignedTo" placeholder="Assigned To" />
        <Select v-model="form.value.status" :options="statusOptions" />
        <FileUpload @change="handleFileUpload" :multiple="true" />
      </div>

      <div class="flex justify-end gap-4 mt-6">
        <Button label="Cancel" type="secondary" />
        <Button label="Save Asset" type="primary" @click="handleSubmit" />
      </div>
    </Card>
  </div>
</template>
