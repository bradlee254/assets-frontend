<script setup lang="ts">
import { ref } from 'vue'
import Button from '../../components/ui/Button.vue'
import Table from '../../components/ui/Table.vue'
import Badge from '../../components/ui/Badge.vue'
import CategoryTypeForm from './CategoryForm.vue'
import ToggleSwitch from '../../components/ui/ToggleSwitch.vue'

interface CategoryType {
  id: string
  name: string
  type: 'Category' | 'Type'
  active: boolean
}

const categories = ref<CategoryType[]>([
  { id: 'C001', name: 'Laptop', type: 'Category', active: true },
  { id: 'C002', name: 'Software', type: 'Category', active: true },
  { id: 'T001', name: 'Physical', type: 'Type', active: true },
  { id: 'T002', name: 'Soft', type: 'Type', active: true },
])

const showModal = ref(false)
const modalMode = ref<'add' | 'edit'>('add')
const selectedItem = ref<CategoryType | undefined>()

const openAddModal = () => {
  modalMode.value = 'add'
  selectedItem.value = undefined
  showModal.value = true
}

const openEditModal = (item: CategoryType) => {
  modalMode.value = 'edit'
  selectedItem.value = item
  showModal.value = true
}

const saveCategoryType = (item: CategoryType) => {
  const index = categories.value.findIndex((c) => c.id === item.id)
  if (index >= 0) {
    categories.value[index] = item
  } else {
    categories.value.push(item)
  }
}

const toggleActive = (item: CategoryType) => {
  item.active = !item.active
}

const deleteItem = (id: string) => {
  if (!window.confirm('Are you sure?')) return
  categories.value = categories.value.filter((c) => c.id !== id)
}
</script>

<template>
  <div class="h-full flex flex-col gap-6">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold text-text-main">Categories & Types</h1>
      <Button label="Add New" type="primary" @click="openAddModal" />
    </div>

    <div class="flex-1 overflow-auto bg-app-surface rounded-lg border border-app-border-pill">
      <Table :headers="['Name', 'Type', 'Status', 'Actions']">
        <tr v-for="item in categories" :key="item.id" class="border-b border-app-border-pill">
          <td class="px-4 py-3 text-text-main">{{ item.name }}</td>
          <td class="px-4 py-3 text-text-main">{{ item.type }}</td>
          <td class="px-4 py-3">
            <ToggleSwitch v-model="item.active" @update:modelValue="toggleActive(item)" />
          </td>
          <td class="px-4 py-3 flex gap-2">
            <Button label="Edit" type="secondary" small @click="openEditModal(item)" />
            <Button label="Delete" type="danger" small @click="deleteItem(item.id)" />
          </td>
        </tr>
      </Table>
    </div>

    <CategoryTypeForm
      :show="showModal"
      :mode="modalMode"
      :item="selectedItem"
      @close="showModal = false"
      @save="saveCategoryType"
    />
  </div>
</template>
