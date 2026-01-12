<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '../../services/auth.service';

const email = ref('');
const password = ref('');
const error = ref('');
const loading = ref(false);
const router = useRouter();

const submit = async () => {
  loading.value = true;
  error.value = '';
  try {
    const res = await login({
      email: email.value,
      password: password.value,
    });

    localStorage.setItem('token', res.token);
    router.push('/');
  } catch (e: any) {
    error.value = e.response?.data?.message || 'Invalid credentials';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
      <h2 class="text-2xl font-bold text-center mb-6">
        Asset Register Login
      </h2>

      <div v-if="error" class="mb-4 text-red-600 text-sm text-center">
        {{ error }}
      </div>

      <div class="space-y-4">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
        />

        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
        />

        <button
          @click="submit"
          :disabled="loading"
          class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {{ loading ? 'Signing in...' : 'Login' }}
        </button>
      </div>
    </div>
  </div>
</template>
