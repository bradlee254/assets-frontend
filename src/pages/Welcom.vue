<script setup>
import { Shield, BarChart3, FolderTree, Users } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen relative" style="background-color: var(--color-app-bg)">
    <!-- Background Image -->
    <div class="fixed inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
        alt="Asset Management Background"
        class="w-full h-full object-cover"
        style="opacity: 0.15"
      />
      <div class="absolute inset-0"></div>
    </div>

    <!-- Content Overlay -->
    <div class="relative z-10">
      <!-- Navbar -->
      <nav
        class="flex justify-between items-center px-8 py-6"
        style="border-bottom: 1px solid var(--color-app-border)"
      >
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-lg flex items-center justify-center"
            style="background-color: var(--color-brand)"
          >
            <Shield class="w-6 h-6" style="color: var(--color-text-main)" />
          </div>
          <h1 class="text-2xl font-bold" style="color: var(--color-text-main)">
            Asset Register
          </h1>
        </div>

        <div class="flex items-center gap-4">
          <router-link
            to="/login"
            class="px-5 py-2.5 font-medium transition-colors"
            style="color: var(--color-text-muted)"
            :style="{ ':hover': { color: 'var(--color-text-main)' } }"
          >
            Login
          </router-link>
          <router-link
            to="/register"
            class="px-6 py-2.5 font-semibold rounded-lg transition-all duration-200 shadow-lg"
            style="
              background-color: var(--color-brand);
              color: var(--color-text-main);
              box-shadow: var(--shadow-brand);
            "
            :style="{ ':hover': { backgroundColor: 'var(--color-brand-hover)' } }"
          >
            Get Started
          </router-link>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="flex flex-col items-center text-center px-8 pt-32 pb-20">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style="
            background-color: var(--color-app-surface);
            border: 1px solid var(--color-app-border);
          "
        >
          <span
            class="w-2 h-2 rounded-full animate-pulse"
            style="background-color: var(--color-success)"
          ></span>
          <span class="text-sm" style="color: var(--color-text-muted)">
            Enterprise Asset Management
          </span>
        </div>

        <h2
          class="text-5xl md:text-6xl font-bold max-w-4xl leading-tight"
          style="color: var(--color-text-main)"
        >
          Manage, Track & Secure
          <span class="block mt-2" style="color: var(--color-brand)">
            Your Assets with Confidence
          </span>
        </h2>

        <p
          class="mt-8 text-xl max-w-2xl leading-relaxed"
          style="color: var(--color-text-muted)"
        >
          A modern asset management system designed to help organizations track
          physical and digital assets efficiently and securely.
        </p>

        <!-- Stats -->
        <div class="mt-24 grid grid-cols-3 gap-12 max-w-3xl w-full">
          <div class="text-center">
            <div
              class="text-4xl font-bold mb-2"
              style="color: var(--color-brand)"
            >
              10K+
            </div>
            <div class="font-medium" style="color: var(--color-text-dim)">
              Assets Tracked
            </div>
          </div>
          <div
            class="text-center"
            style="border-left: 1px solid var(--color-app-border); border-right: 1px solid var(--color-app-border)"
          >
            <div
              class="text-4xl font-bold mb-2"
              style="color: var(--color-brand)"
            >
              500+
            </div>
            <div class="font-medium" style="color: var(--color-text-dim)">
              Organizations
            </div>
          </div>
          <div class="text-center">
            <div
              class="text-4xl font-bold mb-2"
              style="color: var(--color-brand)"
            >
              99.9%
            </div>
            <div class="font-medium" style="color: var(--color-text-dim)">
              Uptime
            </div>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="px-8 max-w-7xl mx-auto pb-32">
        <div class="text-center mb-16">
          <h3
            class="text-3xl font-bold mb-4"
            style="color: var(--color-text-main)"
          >
            Powerful Features
          </h3>
          <p class="text-lg" style="color: var(--color-text-muted)">
            Everything you need to manage your assets effectively
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Feature Card -->
          <div
            v-for="i in 4"
            :key="i"
            class="group relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            style="
              background-color: var(--color-app-surface);
              border: 1px solid var(--color-app-border);
            "
            :style="{
              ':hover': {
                borderColor: 'var(--color-brand)',
              },
            }"
          >
            <div
              class="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style="background-color: var(--color-brand-soft)"
            ></div>

            <div class="relative">
              <div
                class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                style="background-color: var(--color-app-bg)"
                :style="{ ':hover': { backgroundColor: 'var(--color-brand-soft)' } }"
              >
                <component
                  :is="['Shield', 'FolderTree', 'BarChart3', 'Users'][i - 1]"
                  class="w-7 h-7"
                  style="color: var(--color-brand)"
                />
              </div>
              <h3
                class="text-xl font-semibold mb-3"
                style="color: var(--color-text-main)"
              >
                {{
                  ['Asset Tracking', 'Categorization', 'Reports & Insights', 'User Management'][
                    i - 1
                  ]
                }}
              </h3>
              <p class="leading-relaxed" style="color: var(--color-text-muted)">
                {{
                  [
                    'Monitor all assets in one centralized system with real-time updates and notifications.',
                    'Organize assets into meaningful categories and subcategories for easy management.',
                    'Generate comprehensive reports for audits, analytics, and informed decisions.',
                    'Control access with secure role-based permissions and team collaboration tools.',
                  ][i - 1]
                }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer
        class="py-8 text-center"
        style="
          border-top: 1px solid var(--color-app-border);
          color: var(--color-text-dim);
        "
      >
        <p>© {{ new Date().getFullYear() }} Asset Register System. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>