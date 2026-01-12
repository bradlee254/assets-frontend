<template>
  <div class="app-layout">
    <Sidebar />
    <div class="main">
      <Topbar />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue';
import Topbar from './TopBar.vue';
</script>
