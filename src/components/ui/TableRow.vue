<script setup lang="ts">
defineProps<{
  columns: (string | number)[];
  status?: string;
}>();
</script>

<template>
  <tr class="border-b border-app-border-pill hover:bg-white/[0.02] transition-colors">
    <td
      v-for="(col, index) in columns"
      :key="index"
      class="px-4 py-3 text-sm text-text-main font-medium"
    >
      {{ col }}
    </td>
  </tr>
</template>
