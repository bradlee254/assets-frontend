<script setup>
import { ref } from 'vue'

const assignedTo = ref('')
const department = ref('')
const assignedDate = ref('')
</script>

<template>
  <div class="space-y-6 text-[var(--color-text-main)]">
    <h2 class="text-lg font-semibold">Assign Asset</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label class="block text-sm mb-1 text-[var(--color-text-muted)]">
          Assigned To
        </label>
        <input
          v-model="assignedTo"
          type="text"
          class="w-full rounded px-3 py-2 bg-app-bg border border-(--color-app-border) focus:outline-none focus:ring-1 focus:ring-[var(--color-brand)]"
        />
      </div>

      <div>
        <label class="block text-sm mb-1 text-[var(--color-text-muted)]">
          Department
        </label>
        <input
          v-model="department"
          type="text"
          class="w-full rounded px-3 py-2 bg-[var(--color-app-bg)] border border-[var(--color-app-border)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand)]"
        />
      </div>

      <div>
        <label class="block text-sm mb-1 text-[var(--color-text-muted)]">
          Assigned Date
        </label>
        <input
          v-model="assignedDate"
          type="date"
          class="w-full rounded px-3 py-2 bg-[var(--color-app-bg)] border border-[var(--color-app-border)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand)]"
        />
      </div>
    </div>

    <div class="flex justify-end">
      <button
        class="px-4 py-2 rounded bg-[var(--color-brand)] text-white hover:opacity-90"
      >
        Save Assignment
      </button>
    </div>
  </div>
</template>
