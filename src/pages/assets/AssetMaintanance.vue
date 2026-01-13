<script setup>
import { ref } from 'vue'

const records = ref([
  { date: '2025-01-10', description: 'Battery replaced' },
  { date: '2025-03-02', description: 'Screen fixed' }
])
</script>

<template>
  <div class="space-y-6">
    <h2 class="text-lg font-semibold">Maintenance</h2>

    <table class="w-full border-collapse border">
      <thead class="bg-gray-100">
        <tr>
          <th class="border px-3 py-2 text-left">Date</th>
          <th class="border px-3 py-2 text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in records" :key="i">
          <td class="border px-3 py-2">{{ item.date }}</td>
          <td class="border px-3 py-2">{{ item.description }}</td>
        </tr>
      </tbody>
    </table>

    <button class="bg-blue-600 text-white px-4 py-2 rounded">
      Add Maintenance
    </button>
  </div>
</template>
