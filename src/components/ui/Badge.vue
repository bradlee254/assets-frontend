<script setup lang="ts">
defineProps<{
  text: string;
  color?: 'success' | 'warning' | 'brand' | 'dim';
}>();
</script>

<template>
  <span
    class="text-[10px] font-bold px-2 py-0.5 rounded uppercase"
    :class="{
      'text-success bg-success/10': color === 'success',
      'text-warning bg-warning/10': color === 'warning',
      'text-brand bg-brand/10': color === 'brand',
      'text-text-dim bg-app-bg/10': color === 'dim',
    }"
  >
    {{ text }}
  </span>
</template>
