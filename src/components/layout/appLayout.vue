<script setup lang="ts">
import Sidebar from './Sidebar.vue';
import Topbar from './TopBar.vue';
</script>

<template>
  <div class="flex bg-app-bg text-text-muted min-h-screen">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main -->
    <div class="flex-1 flex flex-col">
      <Topbar />

      <!-- Page content -->
      <main class="flex-1 p-8">
        <router-view />
      </main>
    </div>
  </div>
</template>
