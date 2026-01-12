<script setup lang="ts">
defineProps<{
  modelValue: string;
  placeholder?: string;
  type?: string;
}>();

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <input
    :type="type || 'text'"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="w-full px-4 py-2 rounded border border-app-border-pill bg-app-surface text-text-main focus:outline-none focus:ring-2 focus:ring-brand"
  />
</template>
