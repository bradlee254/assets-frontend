<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const navItems = [
  { name: 'Dashboard', path: '/', icon: '▣' },
  { name: 'Assets', path: '/assets', icon: '▢' },
];
</script>

<template>
  <aside
    class="w-64 bg-app-surface border-r border-app-border-pill min-h-screen flex flex-col"
  >
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
    <nav class="flex-1 p-4 space-y-1">
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

    <!-- Footer -->
    <div class="p-4 border-t border-app-border-pill text-xs text-text-dim">
      <p class="font-mono">v1.0.0</p>
      <p class="mt-1">© Asset Register</p>
    </div>
  </aside>
</template>
