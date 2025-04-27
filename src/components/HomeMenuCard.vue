<template>
  <div class="card flex flex-col items-center py-2.5 px-2 text-center">
    <div class="grid place-items-center w-[6.25rem] h-[6.25rem] rounded-full bg-secondary/7 text-neutral-6">
      <component :is="icon" />
    </div>
    <h3 class="h3 mt-2 mb-1">
      {{ title }}
    </h3>
    <p class="text-dark-400">
      {{ description }}
    </p>
    <AppButton
      class="mt-2"
      variant="text"
      label="Explore Menu"
      :to="{ name: 'menu' }"
    />
  </div>
</template>

<script lang="ts" setup>
import AppButton from './AppButton.vue';

defineProps<{
  title: string;
  description: string;
  icon: unknown;
}>();
</script>
