<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
    <h1 class="text-6xl font-extrabold text-gray-800">404</h1>
    <p class="mt-4 text-xl text-gray-600">
      Oops! The page you're looking for doesn't exist.
    </p>
    <router-link
      to="/"
      class="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      Go Back Home
    </router-link>
  </div>