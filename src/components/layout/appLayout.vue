<script setup lang="ts">
import Sidebar from './Sidebar.vue';
</script>

<template>
  <div class="flex h-screen bg-app-bg text-text-muted">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main content -->
    <main class="flex-1 flex flex-col">
      
      <div class="flex-1 overflow-auto p-8">
        <router-view />
      </div>
    </main>
  </div>
</template>
