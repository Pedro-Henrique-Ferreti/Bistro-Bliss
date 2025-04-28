<template>
  <main class="bg-neutral-1">
    <header class="page-section pb-0 text-center">
      <h1 class="h1">
        Book A Table
      </h1>
      <p class="text-dark-400 text-[1.125rem] max-w-[34rem] mx-auto mt-[1.25rem]">
        We consider all the drivers of change gives you the components you need to change to create a truly happens.
      </p>
    </header>
    <section class="mt-[4.5rem]">
      <div class="container-base flex justify-center">
        <form
          class="grid gap-1.5 w-full max-w-[50.75rem] p-2.5 bg-white rounded-2xl shadow-card"
          @submit.prevent
        >
          <AppInput
            label="name"
            placeholder="Your name"
          />
          <AppButton class="w-full">
            Book A Table
          </AppButton>
        </form>
      </div>
      <div class="
      bg-neutral-1 bg-[url('/images/location-map.webp')] bg-cover bg-center aspect-[4/5]
        tablet:aspect-square lg-tablet:aspect-[3/2] desktop:aspect-video min-[1500px]:aspect-[16/7]
      " />
    </section>
  </main>
</template>

<script lang="ts" setup>
import AppInput from '@/components/AppInput.vue';
import AppButton from '@/components/AppButton.vue';
</script>
