<template>
  <RouterLink
    class="inline-flex"
    :to="{ name: 'home' }"
  >
    <component
      :is="theme === 'light' ? IconLogoWhite : IconLogo"
      class="w-full h-full"
    />
  </RouterLink>
</template>

<script lang="ts" setup>
import IconLogo from '@/assets/icons/Logo.svg';
import IconLogoWhite from '@/assets/icons/LogoWhite.svg';

defineProps<{
  theme?: 'light' | 'dark';
}>();
</script>
