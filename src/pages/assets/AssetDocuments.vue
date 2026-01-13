<script setup>
import { ref } from 'vue'

const documents = ref([
  { name: 'Invoice.pdf' },
  { name: 'Warranty.pdf' }
])
</script>

<template>
  <div class="space-y-6">
    <h2 class="text-lg font-semibold">Documents</h2>

    <input type="file" class="border p-2 rounded w-full" />

    <ul class="space-y-2">
      <li
        v-for="(doc, i) in documents"
        :key="i"
        class="flex justify-between items-center border p-3 rounded"
      >
        <span>{{ doc.name }}</span>
        <button class="text-blue-600 text-sm">View</button>
      </li>
    </ul>
  </div>
</template>
