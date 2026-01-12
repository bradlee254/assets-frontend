<script setup lang="ts">
defineProps<{ multiple?: boolean }>();
</script>

<template>
  <input
    type="file"
    :multiple="multiple || false"
    class="w-full text-text-main"
  />
</template>
