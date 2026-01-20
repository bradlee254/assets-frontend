<script setup lang="ts">
import { Shield, ArrowRight, Lock } from 'lucide-vue-next'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { AuthService } from '../../services/auth.service'

const router = useRouter()

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  error.value = ''
  loading.value = true

  try {
    await AuthService.login({
      email: email.value.trim(),
      password: password.value,
    })

    // ✅ SPA-safe redirect
    router.push({ name: 'dashboard' })

    
  } catch (err: any) {
    error.value =
      err?.response?.data?.message ||
      'Invalid email or password'
  } finally {
    loading.value = false
  }
}
</script>
<template>
  <div 
    class="min-h-screen relative flex items-center justify-center p-6"
    style="background-color: var(--color-app-bg)"
  >
    <!-- Background Image (same as landing) -->
    <div class="fixed inset-0 z-0 pointer-events-none">
      <img
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
        alt="Background"
        class="w-full h-full object-cover"
        style="opacity: 0.10"
      />
      <div class="absolute inset-0" style="background: linear-gradient(to bottom, rgba(10,10,10,0.4), rgba(10,10,10,0.8))"></div>
    </div>

    <!-- Card -->
    <div 
      class="relative z-10 w-full max-w-md"
    >
      <div 
        class=" backdrop-blur-xl rounded-2xl border overflow-hidden shadow-2xl"
        style="
          border-color: var(--color-app-border);
          background-color: var(--color-app-surface);
          box-shadow: var(--shadow-card);
        "
      >
        <!-- Header -->
        <div class="p-8 pb-6 text-center border-b" style="border-color: var(--color-app-border)">
          <div 
            class="w-16 h-16 mx-auto mb-5 rounded-xl flex items-center justify-center"
            style="background-color: var(--color-brand)"
          >
            <Shield class="w-8 h-8" style="color: var(--color-text-main)" />
          </div>
          
          <h1 
            class="text-3xl font-bold mb-2"
            style="color: var(--color-text-main)"
          >
            Welcome Back
          </h1>
          
          <p 
            class="text-base"
            style="color: var(--color-text-muted)"
          >
            Sign in to manage your assets securely
          </p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleLogin" class="p-8 pt-6 space-y-6">
          <!-- Error message -->
          <div 
            v-if="error"
            class="p-4 rounded-lg text-sm text-center"
            style="background-color: rgba(239,68,68,0.15); color: var(--color-danger); border: 1px solid rgba(239,68,68,0.3)"
          >
            {{ error }}
          </div>

          <!-- Email -->
          <div class="space-y-2">
            <label 
              class="block text-sm font-medium"
              style="color: var(--color-text-muted)"
            >
              Email
            </label>
            <input
              v-model="email"
              type="email"
              required
              autocomplete="email"
              placeholder="name@company.com"
              class="w-full px-4 py-3 rounded-lg outline-none transition-all"
              style="
                background-color: var(--color-app-bg);
                border: 1px solid var(--color-app-border);
                color: var(--color-text-main);
              "
              :class="{
                'border-green-500/50 focus:border-green-500/70': email.length > 0,
                'focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand)]/30': true
              }"
            />
          </div>

          <!-- Password -->
          <div class="space-y-2">
            <div class="flex justify-between items-center">
              <label 
                class="block text-sm font-medium"
                style="color: var(--color-text-muted)"
              >
                Password
              </label>
              <a 
                href="#"
                class="text-sm hover:underline"
                style="color: var(--color-brand)"
              >
                Forgot password?
              </a>
            </div>
            <div class="relative">
              <input
                v-model="password"
                type="password"
                required
                autocomplete="current-password"
                placeholder="••••••••"
                class="w-full px-4 py-3 rounded-lg outline-none transition-all pr-11"
                style="
                  background-color: var(--color-app-bg);
                  border: 1px solid var(--color-app-border);
                  color: var(--color-text-main);
                "
                :class="{
                  'border-green-500/50 focus:border-green-500/70': password.length > 0,
                  'focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand)]/30': true
                }"
              />
              <button
                type="button"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
              >
                <Lock class="w-5 h-5" />
              </button>
            </div>
          </div>

          <!-- Submit -->
          <button
  type="submit"
  :disabled="loading"
  class="w-full py-3.5 font-semibold rounded-lg transition-all
         flex items-center justify-center gap-2 shadow-lg
         hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed"
  style="
    background-color: var(--color-brand);
    color: var(--color-text-main);
    box-shadow: var(--shadow-brand);
  "
>

            <span v-if="loading">Signing in...</span>
            <span v-else>Sign In</span>
            <ArrowRight v-if="!loading" class="w-5 h-5" />
            <svg v-else class="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
          </button>

          <!-- Register link -->
          <p class="text-center text-sm pt-2" style="color: var(--color-text-muted)">
            Don't have an account? 
            <router-link 
              to="/register"
              class="font-medium hover:underline"
              style="color: var(--color-brand)"
            >
              Create account
            </router-link>
          </p>
        </form>
      </div>

      <!-- Footer hint -->
      <p 
        class="text-center text-xs mt-8"
        style="color: var(--color-text-dim)"
      >
        © {{ new Date().getFullYear() }} Asset Register System • Secured with end-to-end encryption
      </p>
    </div>
  </div>
</template>