<script setup>
import { ref } from 'vue'

const documents = ref([
  { name: 'Invoice.pdf' },
  { name: 'Warranty.pdf' }
])
</script>

<template>
  <div class="space-y-6 text-[var(--color-text-main)]">
    <h2 class="text-lg font-semibold">Documents</h2>

    <input
      type="file"
      class="w-full rounded bg-[var(--color-app-bg)] border border-[var(--color-app-border)] p-2 text-sm text-[var(--color-text-muted)]"
    />

    <ul class="space-y-2">
      <li
        v-for="(doc, i) in documents"
        :key="i"
        class="flex justify-between items-center rounded border border-[var(--color-app-border)] bg-[var(--color-app-bg)] px-4 py-3"
      >
        <span class="text-sm">{{ doc.name }}</span>
        <button
          class="text-sm text-[var(--color-brand)] hover:underline"
        >
          View
        </button>
      </li>
    </ul>
  </div>
</template>
