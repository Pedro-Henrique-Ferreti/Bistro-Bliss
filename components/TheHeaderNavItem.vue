<template>
  <li>
    <NuxtLink
      class="py-[0.25rem] px-1 font-medium rounded-full transition-colors [&.router-link-active]:bg-neutral-2 hover:bg-neutral-2/50"
      :to="to"
    >
      <span>{{ name }}</span>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import type { RouteLocationNamedRaw } from 'vue-router';

defineProps<{
  name: string;
  to: RouteLocationNamedRaw;
}>();
</script>
