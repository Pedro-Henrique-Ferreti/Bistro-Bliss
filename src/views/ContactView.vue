<template>
  <main class="bg-neutral-1">
    <header class="page-section pb-0 text-center">
      <h1 class="h1">
        Contact Us
      </h1>
      <p class="text-dark-400 text-[1.125rem] max-w-[34rem] mx-auto mt-[1.25rem]">
        We'd love to hear from you! Reach out with any questions, feedback, or special requests.
      </p>
    </header>
    <section class="mt-[4.5rem] pt-20 relative lg-tablet:pt-15">
      <div class="container-base flex justify-center absolute top-0">
        <form
          class="grid gap-1.5 w-full max-w-[50.75rem] p-2.5 max-tablet:p-1.5 bg-white rounded-2xl shadow-card min-lg-tablet:grid-cols-2"
          @submit.prevent
        >
          <AppInput
            label="Name"
            placeholder="Enter your name"
          />
          <AppInput
            label="Email"
            type="email"
            placeholder="Enter email address"
          />
          <AppInput
            class="lg-tablet:col-span-2"
            label="Subject"
            placeholder="Write a subject"
            mask="0-000-000-0000"
          />
          <AppInput
            class="lg-tablet:col-span-2"
            label="Message"
            type="textarea"
            placeholder="Write your message"
          />
          <AppButton class="w-full lg-tablet:col-span-2">
            Send
          </AppButton>
        </form>
      </div>
      <div class="bg-white">
        <div class="page-section flex gap-1.5 pt-28 max-lg-tablet:flex-col lg-tablet:justify-between lg-tablet:max-w-[50rem]">
          <div class="flex flex-col gap-1.5">
            <span class="font-semibold text-[1.25rem]">
              Call Us:
            </span>
            <span class="font-semibold text-[1.5rem] text-primary">
              +1-414-857-0107
            </span>
          </div>
          <div class="flex flex-col gap-1.5">
            <span class="font-semibold text-[1.25rem]">
              Hours:
            </span>
            <span class="text-[1.125rem]">
              Mon-Fri: 11am - 8pm <br>
              Sat, Sun: 9am - 10pm
            </span>
          </div>
          <div class="flex flex-col gap-1.5">
            <span class="font-semibold text-[1.25rem]">
              Our Location:
            </span>
            <span class="text-[1.125rem]">
              123 Bridge Street <br>
              Nowhere Land, LA 12345 <br>
              United States
            </span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import AppButton from '@/components/AppButton.vue';
import AppInput from '@/components/AppInput.vue';
</script>
