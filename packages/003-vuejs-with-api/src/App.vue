<script setup>
import { RouterView } from 'vue-router'

import HeaderComponent from '@/components/shared/HeaderComponent.vue';
</script>

<template>
  <HeaderComponent />

  <main class="container mx-auto">
    <RouterView />
  </main>
</template>
