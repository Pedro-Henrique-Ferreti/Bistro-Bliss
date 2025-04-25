<template>
  <main>
    <section class="
      flex justify-center items-center flex-col h-[35rem] p-(--spacing-screen-padding) text-center
      bg-[url('/images/hero-background.webp')] bg-cover bg-center desktop:h-[calc(100vh-9.25rem)]
    ">
      <h1 class="h1 font-secondary">
        Best food for <br> your taste
      </h1>
      <p class="text-xl mt-2 max-w-[33.5rem]">
        Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.
      </p>
      <div class="flex flex-wrap justify-center gap-1 mt-[2.5rem]">
        <AppButton>Book A Table</AppButton>
        <AppButton variant="outline">
          Explore Menu
        </AppButton>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
</script>
