<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Input from '../../components/ui/Input.vue'
import Select from '../../components/ui/Select.vue'
import Button from '../../components/ui/Button.vue'

import {
  getAssetById,
  createAsset,
  updateAsset
} from '../../services/asset'

const router = useRouter()
const route = useRoute()

const asset = ref({
  name: '',
  type: 'physical',
  status: 'Active',
  department: '',
  assignedTo: '',
  purchaseDate: '',
  cost: 0,
  category: '',
})

const typeOptions = [
  { label: 'Physical', value: 'physical' },
  { label: 'Soft', value: 'soft' },
]

const statusOptions = [
  { label: 'Active', value: 'Active' },
  { label: 'Assigned', value: 'Assigned' },
  { label: 'Maintenance', value: 'Maintenance' },
  { label: 'Retired', value: 'Retired' },
]

const isEdit = ref(false)
const loading = ref(false)

const assetId = route.params.id as string | undefined
console.log('assetId', assetId)


// Load Asset (Edit Mode)

onMounted(async () => {
  if (!assetId) return

  try {
    loading.value = true

    const response = await getAssetById(assetId)
    console.log('response', response)
    const data = response

    asset.value = {
      name: data.name ?? '',
      type: data.type ?? 'physical',
      status: data.status ?? 'Active',
      department: data.department ?? '',
      assignedTo: data.assignedTo ?? '',
      category: data.category ?? '',
      cost: data.cost ?? 0,
      purchaseDate: data.created_at
        ? data.created_at.split('T')[0]
        : '',
    }

    isEdit.value = true
  } catch (error) {
    console.error('Failed to load asset:', error)
    alert('Failed to load asset')
  } finally {
    loading.value = false
  }
})


// Submit

const submit = async () => {
  if (!asset.value.name || !asset.value.department || !asset.value.purchaseDate) {
    alert('Please fill required fields')
    return
  }

  try {
    loading.value = true

    const payload = {
      
      ...asset.value,
      cost: Number(asset.value.cost),
    }

    if (isEdit.value && assetId) {
      await updateAsset(assetId, payload)
      alert('Asset updated successfully')
    } else {
      await createAsset(payload)
      alert('Asset created successfully')
    }

    router.push({ name: 'assets' })
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

      <Input
        v-model="asset.purchaseDate"
        type="date"
        placeholder="Purchase Date"
      />

      <Input
        v-model="asset.cost"
        type="number"
        placeholder="Cost"
      />
    </div>

    <div class="flex gap-4 mt-4">
      <Button
        label="Save"
        type="primary"
        :disabled="loading"
        @click="submit"
      />

      <Button
        label="Cancel"
        type="secondary"
        @click="router.back()"
      />
    </div>
  </div>
</template>
