<script setup lang="ts">
defineProps<{
  modelValue: string | number;
  options: { label: string; value: string | number }[];
}>();

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <select
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    class="w-full px-3 py-2 rounded border border-app-border-pill bg-app-surface text-text-main focus:outline-none focus:ring-2 focus:ring-brand"
  >
    <option v-for="opt in options" :key="opt.value" :value="opt.value">
      {{ opt.label }}
    </option>
  </select>
</template>
