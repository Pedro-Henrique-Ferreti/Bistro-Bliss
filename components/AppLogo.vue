<template>
  <NuxtLink
    class="inline-flex"
    :to="{ name: 'home' }"
  >
    <component
      :is="variant === 'light' ? IconLogoWhite : IconLogo"
      class="w-full h-full"
    />
  </NuxtLink>
</template>

<script lang="ts" setup>
import IconLogo from '@/assets/icons/Logo.svg';
import IconLogoWhite from '@/assets/icons/LogoWhite.svg';

defineProps<{
  variant?: 'light' | 'dark';
}>();
</script>
