<template>
  <div class="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
    <h3 class="text-xl font-semibold text-gray-800">
      {{ title }}
    </h3>
    <p class="mt-3 text-gray-600">
      {{ text }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  text: String,
})
</script>
