<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrollY = ref(0)
const isVisible = ref(false)

onMounted(() => {
  isVisible.value = true
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  scrollY.value = window.scrollY
}

const features = [
  {
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    title: 'Centralized Asset Inventory',
    description: 'Single source of truth for all physical and intangible assets across your organization'
  },
  {
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    title: 'Depreciation & Lifecycle Tracking',
    description: 'Automated depreciation schedules and full asset lifecycle management'
  },
  {
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Maintenance Scheduling',
    description: 'Proactive alerts and automated scheduling to prevent downtime'
  },
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Audit-Ready Compliance',
    description: 'Generate detailed reports instantly for audits and financial reporting'
  },
  {
    icon: 'M17 20h5v-1a3 3 0 00-5.356-1.857M17 20H7m10 0v-1a3 3 0 00-5.356-1.857M7 20H2v-1a3 3 0 005.356-1.857M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Asset Assignment & Tracking',
    description: 'Assign assets to employees, departments, or locations with full history'
  },
  {
    icon: 'M3 10h18M7 15h1m4 0h1m-4 4h1m4-4h1m-8-9h.01M12 3v.01',
    title: 'Custom Categories & Fields',
    description: 'Flexible system to match your unique asset classification needs'
  }
]

const benefits = [
  { number: '10x', label: 'Faster Audits' },
  { number: '100%', label: 'Visibility' },
  { number: '50%', label: 'Reduced Loss' },
  { number: '24/7', label: 'Access' }
]
</script>

<template>
  <div class="min-h-screen bg-gray-950 text-white overflow-hidden">
    <!-- Animated Background -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden">
      <div
        class="absolute top-0 left-0 w-96 h-96 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        :style="{ transform: `translate(${scrollY * 0.3}px, ${scrollY * 0.2}px)` }"
      ></div>
      <div
        class="absolute top-40 right-0 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"
        :style="{ transform: `translate(${scrollY * -0.4}px, ${scrollY * -0.3}px)`, animationDelay: '2s' }"
      ></div>
      <div
        class="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        :style="{ transform: `translate(${scrollY * 0.2}px, ${scrollY * -0.2}px)`, animationDelay: '4s' }"
      ></div>
    </div>

    <!-- Navigation -->
    <nav class="relative z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur-xl">
      <div class="max-w-7xl mx-auto px-6 py-5">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1"/>
              </svg>
            </div>
            <div>
              <h1 class="text-2xl font-black tracking-tight">AssetRegister</h1>
              <p class="text-xs text-teal-400 font-semibold">Enterprise Edition</p>
            </div>
          </div>

          <div class="hidden lg:flex items-center space-x-10">
            <a href="#features" class="text-gray-400 hover:text-white transition text-sm font-medium">Features</a>
            <a href="#benefits" class="text-gray-400 hover:text-white transition text-sm font-medium">Benefits</a>
            <router-link to="/login" class="text-teal-400 hover:text-teal-300 font-medium">Sign In</router-link>
            <router-link
              to="/register"
              class="bg-gradient-to-r from-teal-500 to-cyan-600 px-6 py-3 rounded-xl font-bold hover:from-teal-400 hover:to-cyan-500 transition transform hover:scale-105 shadow-lg shadow-teal-500/30"
            >
              Start Free Trial
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative pt-24 pb-32 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Left Content -->
          <div :class="['space-y-10', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12', 'transition-all duration-1000']">
            <div class="inline-block">
              <span class="inline-flex items-center px-4 py-2 rounded-full bg-teal-900/50 border border-teal-700 text-teal-300 text-sm font-medium">
                <span class="w-2 h-2 bg-teal-400 rounded-full mr-2 animate-pulse"></span>
                Trusted by growing organizations worldwide
              </span>
            </div>

            <h1 class="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
              Digitize Your<br/>
              <span class="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Asset Management
              </span>
            </h1>

            <p class="text-xl text-gray-400 leading-relaxed max-w-2xl">
              Maintain a centralized, real-time inventory of all physical and intangible assets. Track depreciation, schedule maintenance, assign ownership, and stay audit-ready — all in one secure platform.
            </p>

            <div class="flex flex-wrap gap-6 pt-4">
              <router-link
                to="/register"
                class="group bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold hover:from-teal-400 hover:to-cyan-500 transition-all transform hover:scale-105 shadow-2xl shadow-teal-500/40 flex items-center space-x-3"
              >
                <span>Get Started Free</span>
                <svg class="w-5 h-5 group-hover:translate-x-2 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </router-link>

              <button class="border-2 border-gray-700 hover:border-teal-500 px-8 py-4 rounded-xl font-bold transition flex items-center space-x-3 bg-gray-900/50">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                </svg>
                <span>Watch Demo</span>
              </button>
            </div>

            <!-- Quick Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              <div v-for="benefit in benefits" :key="benefit.label" class="text-center">
                <div class="text-4xl font-black text-teal-400">{{ benefit.number }}</div>
                <div class="text-sm text-gray-500 mt-1">{{ benefit.label }}</div>
              </div>
            </div>
          </div>

          <!-- Right Illustration -->
          <div :class="['relative', isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95', 'transition-all duration-1000 delay-300']">
            <div class="relative bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl">
              <div class="space-y-6">
                <!-- Header -->
                <div class="flex items-center justify-between">
                  <h3 class="text-xl font-bold">Asset Overview</h3>
                  <span class="text-xs text-teal-400 bg-teal-900/30 px-3 py-1 rounded-full">Live</span>
                </div>

                <!-- Summary Cards -->
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-gray-800/50 rounded-xl p-4">
                    <p class="text-sm text-gray-400">Total Assets</p>
                    <p class="text-3xl font-black text-white mt-1">8,429</p>
                    <p class="text-xs text-teal-400 mt-2">+318 this month</p>
                  </div>
                  <div class="bg-gray-800/50 rounded-xl p-4">
                    <p class="text-sm text-gray-400">Total Value</p>
                    <p class="text-3xl font-black text-white mt-1">$4.2M</p>
                    <p class="text-xs text-emerald-400 mt-2">Depreciating normally</p>
                  </div>
                </div>

                <!-- Mini Chart -->
                <div class="bg-gray-800/40 rounded-xl p-5 h-40 flex items-end justify-between">
                  <div v-for="n in 7" :key="n" class="w-8 bg-gradient-to-t from-teal-500 to-cyan-500 rounded-t-lg" :style="{ height: `${30 + Math.random() * 50}%` }"></div>
                </div>

                <!-- Recent Activity -->
                <div class="space-y-3">
                  <div class="flex items-center justify-between text-sm">
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span class="text-gray-300">Laptop assigned to J. Kim</span>
                    </div>
                    <span class="text-gray-500">2h ago</span>
                  </div>
                  <div class="flex items-center justify-between text-sm">
                    <div class="flex items-center space-x-3">
                      <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span class="text-gray-300">Printer maintenance due</span>
                    </div>
                    <span class="text-gray-500">Tomorrow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-24 px-6 bg-gray-900/30">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <span class="text-teal-400 font-semibold text-sm uppercase tracking-wider">Core Capabilities</span>
          <h2 class="text-4xl lg:text-5xl font-black mt-4 mb-6">
            Everything You Need for<br/>
            <span class="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Modern Asset Management</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            Built for organizations that need accuracy, compliance, and control over their asset portfolio
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="group bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-300"
          >
            <div class="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" :d="feature.icon"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">{{ feature.title }}</h3>
            <p class="text-gray-400 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-32 px-6">
      <div class="max-w-5xl mx-auto text-center">
        <div class="bg-gradient-to-r from-teal-600 to-cyan-700 rounded-3xl p-16 shadow-2xl relative overflow-hidden">
          <div class="absolute inset-0 bg-grid opacity-10"></div>
          <div class="relative">
            <h2 class="text-4xl lg:text-5xl font-black mb-6">
              Ready to Take Control of Your Assets?
            </h2>
            <p class="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Start your free 14-day trial today. No credit card required.
            </p>
            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <router-link
                to="/register"
                class="bg-white text-gray-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-xl"
              >
                Start Free Trial
              </router-link>
              <router-link to="/login" class="text-white border-2 border-white/50 px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition">
                Sign In
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-gray-800 py-12 px-6">
      <div class="max-w-7xl mx-auto text-center text-gray-500 text-sm">
        © 2026 AssetRegister. All rights reserved. • Privacy • Terms • Support
      </div>
    </footer>
  </div>
</template>

<style scoped>
.bg-grid {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 50px 50px;
}
</style>