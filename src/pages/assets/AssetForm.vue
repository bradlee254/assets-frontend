<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Input from '../../components/ui/Input.vue'
import Select from '../../components/ui/Select.vue'
import Button from '../../components/ui/Button.vue'
import { useAssets, Asset } from '../../composable/useAssets'

// Router
const router = useRouter()
const route = useRoute()

// Assets store
const { addAsset, updateAsset, getAssetById } = useAssets()

// Form model
const asset = ref<Asset>({
  id: '',
  name: '',
  type: 'Physical',
  status: 'Active',
  department: '',
  assignedTo: '',
  purchaseDate: '',
})

// Options
const typeOptions = [
  { label: 'Physical', value: 'Physical' },
  { label: 'Soft', value: 'Soft' },
]

const statusOptions = [
  { label: 'Active', value: 'Active' },
  { label: 'Assigned', value: 'Assigned' },
  { label: 'Maintenance', value: 'Maintenance' },
  { label: 'Retired', value: 'Retired' },
]

// Detect if editing
const isEdit = ref(false)
onMounted(() => {
  const id = route.params.id as string
  if (id) {
    const existing = getAssetById(id)
    if (existing) {
      asset.value = { ...existing }
      isEdit.value = true
    }
  }
})

// Form submission
const submit = () => {
  if (isEdit.value) {
    updateAsset(asset.value)
    alert('Asset updated successfully!')
  } else {
    // Auto-generate ID
    asset.value.id = `A${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`
    addAsset(asset.value)
    alert('Asset added successfully!')
  }
  router.push({ name: 'dashboard' })
}
</script>

<template>
  <div class="h-full flex flex-col gap-6">
    <h1 class="text-2xl font-bold text-text-main">
      {{ isEdit ? 'Edit Asset' : 'Add New Asset' }}
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input v-model="asset.name" placeholder="Asset Name" />
      <Select v-model="asset.type" :options="typeOptions" />
      <Select v-model="asset.status" :options="statusOptions" />
      <Input v-model="asset.department" placeholder="Department" />
      <Input v-model="asset.assignedTo" placeholder="Assigned To" />
      <Input v-model="asset.purchaseDate" type="date" placeholder="Purchase Date" />
    </div>

    <div class="flex gap-4 mt-4">
      <Button label="Save" type="primary" @click="submit" />
      <Button label="Cancel" type="secondary" @click="router.back()" />
    </div>
  </div>
</template>
