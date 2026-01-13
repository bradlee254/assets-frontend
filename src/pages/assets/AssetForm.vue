<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import Card from '../../components/ui/Card.vue'
import Button from '../../components/ui/Button.vue'
import Input from '../../components/ui/Input.vue'
import Select from '../../components/ui/Select.vue'
import Badge from '../../components/ui/Badge.vue'

const route = useRoute()
const router = useRouter()

// Detect mode
const isEdit = computed(() => !!route.params.id)

// Mock existing asset (for edit mode)
const existingAsset = {
  id: 'A001',
  name: 'Laptop Dell XPS',
  type: 'Physical',
  category: 'Laptop',
  serial: 'DX123456',
  model: 'XPS 15',
  supplier: 'Dell',
  purchaseDate: '2025-12-01',
  cost: 2500,
  department: 'IT',
  status: 'Active',
}

// Asset form state
const form = reactive({
  type: existingAsset.type || 'Physical',
  name: existingAsset.name || '',
  category: existingAsset.category || '',
  description: '',
  serial: existingAsset.serial || '',
  model: existingAsset.model || '',
  supplier: existingAsset.supplier || '',
  purchaseDate: existingAsset.purchaseDate || '',
  cost: existingAsset.cost || '',
  department: existingAsset.department || '',
  licenseKey: '',
  vendor: '',
  renewalDate: '',
  subscriptionTerm: '',
  agree: false,
})

const showSummary = ref(false)

// Options
const assetTypes = [
  { label: 'Physical Asset', value: 'Physical' },
  { label: 'Soft Asset', value: 'Soft' },
]

const departments = [
  { label: 'IT', value: 'IT' },
  { label: 'HR', value: 'HR' },
  { label: 'Finance', value: 'Finance' },
]

// Actions
const submit = () => {
  if (!form.agree) {
    alert('You must agree to terms before saving')
    return
  }

  console.log('Saving asset:', form)

  router.push({ name: 'assets' })
}
</script>

<template>
  <div class="h-full flex flex-col gap-6 max-w-5xl">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-text-main">
          {{ isEdit ? 'Edit Asset' : 'Register New Asset' }}
        </h1>
        <p class="text-text-dim text-sm">
          {{ isEdit ? 'Update asset details' : 'Enter asset information' }}
        </p>
      </div>

      <Badge
        :text="form.type"
        color="brand"
      />
    </div>

    <!-- Asset Type -->
    <Card title="Asset Type">
      <Select
        v-model="form.type"
        :options="assetTypes"
      />
    </Card>

    <!-- Basic Information -->
    <Card title="Basic Information">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input v-model="form.name" label="Asset Name" />
        <Input v-model="form.category" label="Category" />
        <Input v-model="form.model" label="Model" />
        <Input v-model="form.serial" label="Serial Number" />
        <Input v-model="form.supplier" label="Supplier" />
        <Input v-model="form.purchaseDate" type="date" label="Purchase Date" />
        <Input v-model="form.cost" type="number" label="Cost" />
        <Select v-model="form.department" :options="departments" label="Department" />
      </div>
    </Card>

    <!-- Soft Asset Fields -->
    <Card
      v-if="form.type === 'Soft'"
      title="License Details"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input v-model="form.licenseKey" label="License Key" />
        <Input v-model="form.vendor" label="Vendor" />
        <Input v-model="form.renewalDate" type="date" label="Renewal Date" />
        <Input v-model="form.subscriptionTerm" label="Subscription Term" />
      </div>
    </Card>

    <!-- Summary -->
    <Card v-if="showSummary" title="Asset Summary">
      <div class="grid grid-cols-2 gap-4 text-sm">
        <div><span class="text-text-dim">Name:</span> {{ form.name }}</div>
        <div><span class="text-text-dim">Type:</span> {{ form.type }}</div>
        <div><span class="text-text-dim">Category:</span> {{ form.category }}</div>
        <div><span class="text-text-dim">Department:</span> {{ form.department }}</div>
        <div><span class="text-text-dim">Cost:</span> ${{ form.cost }}</div>
      </div>
    </Card>

    <!-- Agreement -->
    <div class="flex items-center gap-2">
      <input
        type="checkbox"
        v-model="form.agree"
        class="accent-brand"
      />
      <p class="text-sm text-text-muted">
        I confirm that the information provided is accurate and I accept responsibility
      </p>
    </div>

    <!-- Actions -->
    <div class="flex justify-end gap-3">
      <Button
        label="Preview Summary"
        type="secondary"
        @click="showSummary = !showSummary"
      />
      <Button
        label="Save Asset"
        type="primary"
        @click="submit"
      />
    </div>
  </div>
</template>
