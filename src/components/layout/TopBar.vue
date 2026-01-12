<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
  localStorage.removeItem('token');
  router.push('/login');
};
</script>

<template>
  <header class="h-16 bg-app-surface border-b border-app-border-pill flex items-center justify-between px-6">
    <!-- Left -->
    <div>
      <p class="text-xs uppercase tracking-widest text-text-dim font-bold">
        Asset Register System
      </p>
    </div>

    <!-- Right -->
    <div class="flex items-center gap-4">
      <div class="text-right hidden sm:block">
        <p class="text-sm font-semibold text-text-main">Admin User</p>
        <p class="text-xs text-text-dim">admin@asset.com</p>
      </div>

      <img
        src=""
        class="w-9 h-9 rounded-full border border-app-border-pill"
        alt="avatar"
      />

      <button
        @click="logout"
        class="text-xs font-bold uppercase tracking-widest text-warning hover:text-white transition"
      >
        Logout
      </button>
    </div>
  </header>
</template>
