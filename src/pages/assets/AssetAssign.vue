<script setup>
import { ref } from 'vue'

const assignedTo = ref('')
const department = ref('')
const assignedDate = ref('')
</script>

<template>
  <div class="space-y-6">
    <h2 class="text-lg font-semibold">Assign Asset</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label class="block text-sm mb-1">Assigned To</label>
        <input
          v-model="assignedTo"
          type="text"
          class="w-full border rounded px-3 py-2"
          placeholder="Employee name"
        />
      </div>

      <div>
        <label class="block text-sm mb-1">Department</label>
        <input
          v-model="department"
          type="text"
          class="w-full border rounded px-3 py-2"
          placeholder="IT, Finance..."
        />
      </div>

      <div>
        <label class="block text-sm mb-1">Assigned Date</label>
        <input
          v-model="assignedDate"
          type="date"
          class="w-full border rounded px-3 py-2"
        />
      </div>
    </div>

    <div class="flex justify-end">
      <button class="bg-blue-600 text-white px-4 py-2 rounded">
        Save Assignment
      </button>
    </div>
  </div>
</template>
