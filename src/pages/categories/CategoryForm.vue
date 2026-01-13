<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'
import Button from '../../components/ui/Button.vue'
import Input from '../../components/ui/Input.vue'
import Select from '../../components/ui/Select.vue'
import ToggleSwitch from '../../components/ui/ToggleSwitch.vue'

interface CategoryType {
  id: string
  name: string
  type: 'Category' | 'Type'
  active: boolean
}

const props = defineProps<{
  show: boolean
  mode: 'add' | 'edit'
  item?: CategoryType
}>()

const emits = defineEmits(['close', 'save'])

const name = ref('')
const type = ref<'Category' | 'Type'>('Category')
const active = ref(true)

watch(
  () => props.item,
  (val) => {
    if (val) {
      name.value = val.name
      type.value = val.type
      active.value = val.active
    }
  },
  { immediate: true }
)

const typeOptions = [
  { label: 'Category', value: 'Category' },
  { label: 'Type', value: 'Type' },
]

const save = () => {
  emits('save', {
    id: props.item?.id || `C${Math.random().toString(36).substring(2, 7)}`,
    name: name.value,
    type: type.value,
    active: active.value,
  })
  emits('close')
}
</script>

<template>
  <div
    v-if="props.show"
    class="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
  >
    <div class="bg-app-surface rounded-xl w-96 p-6 space-y-4">
      <h2 class="text-lg font-bold text-text-main uppercase">
        {{ props.mode === 'add' ? 'Add New' : 'Edit' }} {{ type.value }}
      </h2>

      <Input v-model="name" placeholder="Name" />

      <Select v-model="type" :options="typeOptions" />

      <div class="flex items-center justify-between">
        <span class="text-text-dim font-semibold">Active</span>
        <ToggleSwitch v-model="active" />
      </div>

      <div class="flex justify-end gap-3 mt-4">
        <Button label="Cancel" type="secondary" @click="$emit('close')" />
        <Button label="Save" type="primary" @click="save" />
      </div>
    </div>
  </div>
</template>
