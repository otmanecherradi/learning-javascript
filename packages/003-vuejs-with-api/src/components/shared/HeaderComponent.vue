<script setup>
import { RouterLink } from 'vue-router';


</script>
<template>
  <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center p-6 lg:px-8" aria-label="Global">
      <div class="flex mr-12">
        <RouterLink to="/" class="-m-1.5 p-1.5">
          <span class="">Company</span>
        </RouterLink>
      </div>
      <div class="flex gap-x-12">
        <RouterLink to="/categories/" class="text-sm font-semibold leading-6 text-gray-900">Categories</RouterLink>
        <RouterLink to="/products/" class="text-sm font-semibold leading-6 text-gray-900">Products</RouterLink>
      </div>
    </nav>
    <div></div>
  </header>
</template>
