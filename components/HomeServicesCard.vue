<template>
  <div class="w-full max-w-[10rem] min-[500px]:max-w-[15rem] desktop:max-w-none">
    <img
      loading="lazy"
      :src="image"
      :alt="title"
    >
    <h3 class="h3 mt-2 mb-1">
      {{ title }}
    </h3>
    <p class="text-dark-400">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  image: string;
}>();
</script>
