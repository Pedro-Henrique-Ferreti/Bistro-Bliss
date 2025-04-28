<template>
  <div>
    <TheHeader />
    <RouterView />
  </div>
  <TheFooter class="mt-auto" />
</template>

<script setup lang="ts">
import TheHeader from './components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>
