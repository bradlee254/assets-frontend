<script setup lang="ts">
defineProps<{
  headers: string[];
}>();
</script>

<template>
  <table class="w-full text-left table-auto border-collapse">
    <thead class="bg-app-bg border-b border-app-border-pill">
      <tr>
        <th
          v-for="header in headers"
          :key="header"
          class="px-4 py-3 text-xs font-bold text-text-dim uppercase tracking-wider"
        >
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <slot />
    </tbody>
  </table>
</template>
