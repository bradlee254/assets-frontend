<script setup lang="ts">
defineProps<{ page: number; totalPages: number }>();
const emit = defineEmits(['prev', 'next']);
</script>

<template>
  <div class="flex justify-end items-center gap-2 mt-4 text-sm text-text-dim">
    <button
      @click="$emit('prev')"
      class="px-3 py-1 rounded border border-app-border-pill hover:bg-white/5 transition"
    >
      Prev
    </button>
    <span>Page {{ page }} of {{ totalPages }}</span>
    <button
      @click="$emit('next')"
      class="px-3 py-1 rounded border border-app-border-pill hover:bg-white/5 transition"
    >
      Next
    </button>
  </div>
</template>
