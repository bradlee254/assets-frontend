<script setup>
import { ref } from 'vue'

const records = ref([
  { date: '2025-01-10', description: 'Battery replaced' },
  { date: '2025-03-02', description: 'Screen fixed' }
])
</script>

<template>
  <div class="space-y-6 text-[var(--color-text-main)]">
    <h2 class="text-lg font-semibold">Maintenance</h2>

    <div class="overflow-hidden rounded border border-[var(--color-app-border)]">
      <table class="w-full">
        <thead class="bg-[var(--color-app-bg)]">
          <tr>
            <th class="px-3 py-2 text-left text-sm text-[var(--color-text-muted)]">
              Date
            </th>
            <th class="px-3 py-2 text-left text-sm text-[var(--color-text-muted)]">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, i) in records"
            :key="i"
            class="border-t border-[var(--color-app-border-pill)]"
          >
            <td class="px-3 py-2 text-sm">{{ item.date }}</td>
            <td class="px-3 py-2 text-sm text-[var(--color-text-dim)]">
              {{ item.description }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <button
      class="px-4 py-2 rounded bg-[var(--color-brand)] text-white hover:opacity-90"
    >
      Add Maintenance
    </button>
  </div>
</template>
