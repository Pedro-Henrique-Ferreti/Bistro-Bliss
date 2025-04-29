<template>
  <main class="bg-neutral-1">
    <header class="page-section pb-0 text-center">
      <h1 class="h1">
        Book A Table
      </h1>
      <p class="text-dark-400 text-[1.125rem] max-w-[34rem] mx-auto mt-[1.25rem]">
        Reserve your spot today for a memorable dining experience—easy booking, guaranteed table.
      </p>
    </header>
    <section class="mt-[4.5rem] pt-20 relative lg-tablet:pt-15">
      <div class="container-base flex justify-center absolute top-0">
        <form
          class="grid gap-1.5 w-full max-w-[50.75rem] p-2.5 max-tablet:p-1.5 bg-white rounded-2xl shadow-card min-lg-tablet:grid-cols-2"
          @submit.prevent
        >
          <AppInput
            label="Date"
            type="date"
          />
          <AppInput
            label="Time"
            type="time"
          />
          <AppInput
            label="Name"
            placeholder="Enter your name"
          />
          <AppInput
            label="Phone"
            placeholder="x-xxx-xxx-xxxx"
            mask="0-000-000-0000"
          />
          <AppInput
            class="lg-tablet:col-span-2"
            label="How many people are coming?"
            placeholder="Ie, 3 people"
          />
          <AppButton class="w-full lg-tablet:col-span-2">
            Book A Table
          </AppButton>
        </form>
      </div>
      <div class="bg-neutral-1 bg-[url('/images/location-map.webp')] bg-cover bg-center aspect-[4/5]
        tablet:aspect-square lg-tablet:aspect-[4.75/3] desktop:aspect-[16/8] min-[1500px]:aspect-[16/7]"
      />
    </section>
  </main>
</template>

<script lang="ts" setup>
import AppInput from '@/components/AppInput.vue';
import AppButton from '@/components/AppButton.vue';
</script>
