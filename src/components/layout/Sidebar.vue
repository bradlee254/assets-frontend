<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const navItems = [
  { name: 'Dashboard', path: '/', icon: '▢' },
  { name: 'Assets', path: '/assets', icon: '▢' },
];

// Mock user data (replace later with API)
const user = {
  name: 'Admin User',
  email: 'admin@asset.com',
  avatar: '/avatar.png',
};

const logout = () => {
  // Remove token (or whatever auth mechanism you use)
  localStorage.removeItem('token');
  router.push('/login');
};
</script>

<template>
  <aside
    class="w-64 bg-app-surface border-r border-app-border-pill min-h-screen flex flex-col justify-between"
  >
    <!-- Top: Brand + Nav -->
    <div>
      <!-- Brand -->
      <div class="px-6 py-6 border-b border-app-border-pill">
        <h1 class="text-xl font-bold tracking-tight text-brand">
          Asset<span class="text-text-main">Register</span>
        </h1>
        <p class="text-xs uppercase tracking-widest text-text-dim mt-1">
          Control System
        </p>
      </div>

      <!-- Navigation -->
      <nav class="p-4 space-y-1">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold tracking-wide transition-all"
          :class="
            route.path === item.path
              ? 'bg-brand/10 text-brand border-l-2 border-brand'
              : 'text-text-muted hover:bg-white/5 hover:text-text-main'
          "
        >
          <span class="text-base opacity-80">{{ item.icon }}</span>
          {{ item.name }}
        </router-link>
      </nav>
    </div>

    <!-- Bottom: User info + Logout -->
    <div class="px-6 py-4 border-t border-app-border-pill flex items-center gap-3">
      <img
        :src="user.avatar"
        alt="avatar"
        class="w-10 h-10 rounded-full border border-app-border-pill"
      />
      <div class="flex-1">
        <p class="text-sm font-semibold text-text-main">{{ user.name }}</p>
        <p class="text-xs text-text-dim truncate">{{ user.email }}</p>
      </div>
      <button
        @click="logout"
        class="text-xs font-bold text-warning hover:text-white uppercase tracking-widest"
      >
        Logout
      </button>
    </div>
  </aside>
</template>
