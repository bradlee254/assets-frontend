<script setup lang="ts">
defineProps<{ show: boolean }>();
const emit = defineEmits(['close']);
</script>

<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
  >
    <div class="bg-app-surface rounded-xl shadow-lg w-11/12 md:w-1/2 p-6 relative">
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 text-text-dim hover:text-text-main font-bold"
      >
        ×
      </button>
      <slot />
    </div>
  </div>
</template>
