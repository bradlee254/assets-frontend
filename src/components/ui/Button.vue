<script setup lang="ts">
defineProps<{
  label: string;
  type?: 'primary' | 'secondary' | 'danger';
  small?: boolean;
}>();
</script>

<template>
  <button
    :class="[
      'rounded font-bold transition-all uppercase tracking-tight',
      small ? 'px-2 py-1 text-xs' : 'px-4 py-2 text-sm',
      type === 'primary'
        ? 'bg-brand text-white hover:bg-brand/90'
        : type === 'secondary'
        ? 'bg-app-surface text-text-main hover:bg-white/5'
        : type === 'danger'
        ? 'bg-red-500 text-white hover:bg-red-600'
        : ''
    ]"
  >
    {{ label }}
  </button>
</template>
