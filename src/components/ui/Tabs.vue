<script setup lang="ts">
import { ref } from 'vue';
defineProps<{ tabs: string[] }>();

const active = ref(0);
</script>

<template>
  
    <div class="flex border-b border-app-border-pill mb-4">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="active = index"
        :class="[
          'px-4 py-2 font-bold text-sm uppercase tracking-wider transition',
          active === index
            ? 'border-b-2 border-brand text-brand'
            : 'text-text-dim hover:text-text-main'
        ]"
      >
        {{ tab }}
      </button>
    </div>
    <div>
      <slot :name="'tab-' + active"></slot>
    </div>
  </template>
