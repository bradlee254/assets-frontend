<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Input from '../../components/ui/Input.vue'
import Select from '../../components/ui/Select.vue'
import Button from '../../components/ui/Button.vue'
import api from '../../services/api'

// Router
const router = useRouter()
const route = useRoute()

// Form model
const asset = ref({
  name: '',
  type: 'Physical',
  status: 'Active',
  department: '',
  assignedTo: '',
  purchaseDate: '',
  cost: 0,
  category: '',
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
const assetId = route.params.id as string
const loading = ref(false)

onMounted(async () => {
  if (assetId) {
    try {
      loading.value = true
      const { data } = await api.get(`/assets/${assetId}`)
      asset.value = {
        ...data,
        purchaseDate: data.purchaseDate.split('T')[0], // format for input[type=date]
      }
      isEdit.value = true
    } catch (error) {
      console.error('Failed to fetch asset:', error)
      alert('Failed to load asset data')
    } finally {
      loading.value = false
    }
  }
})

// Form submission
const submit = async () => {
  // Basic validation
  if (!asset.value.name || !asset.value.department || !asset.value.purchaseDate || !asset.value.category) {
    alert('Please fill all required fields')
    return
  }

  try {
    loading.value = true
    if (isEdit.value) {
      await api.put(`/assets/${assetId}`, asset.value)
      alert('Asset updated successfully!')
    } else {
      await api.post('/assets', asset.value)
      alert('Asset added successfully!')
    }
    router.push({ name: 'assets' }) // go back to asset list
  } catch (error) {
    console.error('Failed to save asset:', error)
    alert('Failed to save asset')
  } finally {
    loading.value = false
  }
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
      <Input v-model="asset.category" placeholder="Category" />
      <Input v-model="asset.department" placeholder="Department" />
      <Input v-model="asset.assignedTo" placeholder="Assigned To" />
      <Input v-model="asset.purchaseDate" type="date" placeholder="Purchase Date" />
      <Input v-model="asset.cost" type="number" placeholder="Cost" />
    </div>

    <div class="flex gap-4 mt-4">
      <Button :disabled="loading" label="Save" type="primary" @click="submit" />
      <Button label="Cancel" type="secondary" @click="router.back()" />
    </div>
  </div>
</template>
