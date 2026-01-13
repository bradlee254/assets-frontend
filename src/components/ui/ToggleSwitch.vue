<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, required: true }
})

const emits = defineEmits(['update:modelValue'])

const toggle = () => {
  emits('update:modelValue', !props.modelValue)
}
</script>

<template>
  <button
    @click="toggle"
    :class="[
      'w-10 h-5 rounded-full p-0.5 transition-colors',
      props.modelValue ? 'bg-success' : 'bg-text-dim'
    ]"
  >
    <span
      class="block w-4 h-4 bg-white rounded-full shadow transform transition-transform"
      :class="props.modelValue ? 'translate-x-5' : ''"
    ></span>
  </button>
</template>
