<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { UserPlus, ArrowRight, Shield, Lock } from 'lucide-vue-next';
import { AuthService } from '../../services/auth.service';

const router = useRouter();

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const loading = ref(false);
const error = ref('');

const submit = async () => {
  error.value = '';

  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match';
    return;
  }

  if (password.value.length < 8) {
    error.value = 'Password must be at least 8 characters';
    return;
  }

  loading.value = true;

  try {
    await AuthService.register({
      name: name.value.trim(),
      email: email.value.trim(),
      password: password.value,
      password_confirmation: confirmPassword.value,
    });

    router.push('/login');
  } catch (err: any) {
    error.value = err.response?.data?.message || 'Registration failed. Please try again.';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div 
    class="min-h-screen relative flex items-center justify-center p-6"
    style="background-color: var(--color-app-bg)"
  >
    <!-- Background  -->
    <div class="fixed inset-0 z-0 pointer-events-none">
      <img
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
        alt="Background"
        class="w-full h-full object-cover"
        style="opacity: 0.08"
      />
      <div class="absolute inset-0" style="background: linear-gradient(to bottom, rgba(10,10,10,0.4), rgba(10,10,10,0.8))"></div>
    </div>

    <!-- Card -->
    <div class="relative z-10 w-full max-w-md">
      <div 
        class="bg-neutral-900/70 backdrop-blur-xl rounded-2xl border overflow-hidden shadow-2xl"
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
            <UserPlus class="w-8 h-8" style="color: var(--color-text-main)" />
          </div>
          
          <h1 
            class="text-3xl font-bold mb-2"
            style="color: var(--color-text-main)"
          >
            Create Account
          </h1>
          
          <p 
            class="text-base"
            style="color: var(--color-text-muted)"
          >
            Join Asset Register and start managing your assets
          </p>
        </div>

        <!-- Form -->
        <form @submit.prevent="submit" class="p-8 pt-6 space-y-6">
          <!-- Error -->
          <div 
            v-if="error"
            class="p-4 rounded-lg text-sm text-center"
            style="
              background-color: rgba(239,68,68,0.15);
              color: var(--color-danger);
              border: 1px solid rgba(239,68,68,0.3);
            "
          >
            {{ error }}
          </div>

          <!-- Name -->
          <div class="space-y-2">
            <label class="block text-sm font-medium" style="color: var(--color-text-muted)">
              Full Name
            </label>
            <input
              v-model="name"
              type="text"
              required
              autocomplete="name"
              placeholder="John Doe"
              class="w-full px-4 py-3 rounded-lg outline-none transition-all"
              style="
                background-color: var(--color-app-bg);
                border: 1px solid var(--color-app-border);
                color: var(--color-text-main);
              "
              :class="{ 'focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand)]/30': true }"
            />
          </div>

          <!-- Email -->
          <div class="space-y-2">
            <label class="block text-sm font-medium" style="color: var(--color-text-muted)">
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
              :class="{ 'focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand)]/30': true }"
            />
          </div>

          <!-- Password -->
          <div class="space-y-2">
            <label class="block text-sm font-medium" style="color: var(--color-text-muted)">
              Password
            </label>
            <div class="relative">
              <input
                v-model="password"
                type="password"
                required
                autocomplete="new-password"
                placeholder="••••••••"
                class="w-full px-4 py-3 rounded-lg outline-none transition-all pr-11"
                style="
                  background-color: var(--color-app-bg);
                  border: 1px solid var(--color-app-border);
                  color: var(--color-text-main);
                "
                :class="{ 'focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand)]/30': true }"
              />
              <Lock class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
            </div>
          </div>

          <!-- ConfirmPassword -->
          <div class="space-y-2">
            <label class="block text-sm font-medium" style="color: var(--color-text-muted)">
              Confirm Password
            </label>
            <div class="relative">
              <input
                v-model="confirmPassword"
                type="password"
                required
                autocomplete="new-password"
                placeholder="••••••••"
                class="w-full px-4 py-3 rounded-lg outline-none transition-all pr-11"
                style="
                  background-color: var(--color-app-bg);
                  border: 1px solid var(--color-app-border);
                  color: var(--color-text-main);
                "
                :class="{ 'focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand)]/30': true }"
              />
              <Lock class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
            </div>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full py-3.5 font-semibold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg"
            style="
              background-color: var(--color-brand);
              color: var(--color-text-main);
              box-shadow: var(--shadow-brand);
            "
            :style="{
              opacity: loading ? 0.7 : 1,
              cursor: loading ? 'not-allowed' : 'pointer',
              ':hover': loading ? {} : { backgroundColor: 'var(--color-brand-hover)' }
            }"
          >
            <span v-if="loading">Creating account...</span>
            <span v-else>Register</span>
            <ArrowRight v-if="!loading" class="w-5 h-5" />
            <svg v-else class="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
          </button>

          <!-- Login link -->
          <p class="text-center text-sm pt-2" style="color: var(--color-text-muted)">
            Already have an account? 
            <router-link 
              to="/login"
              class="font-medium hover:underline"
              style="color: var(--color-brand)"
            >
              Sign in
            </router-link>
          </p>
        </form>
      </div>

      <!-- Footer note -->
      <p 
        class="text-center text-xs mt-8"
        style="color: var(--color-text-dim)"
      >
        © {{ new Date().getFullYear() }} Asset Register System • Secured with end-to-end encryption
      </p>
    </div>
  </div>
</template>