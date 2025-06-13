<template>
  <main>
    <div class="bg-neutral-1">
      <AboutDescription class="page-section" />
    </div>
    <section>
      <BaseButton
        to="https://www.youtube.com"
        class="
          flex justify-center items-center flex-col gap-2 text-center py-[8rem] desktop:py-[13rem] px-(--spacing-screen-padding)
          bg-[url('/images/about-background.webp')] bg-cover bg-center relative group
          before:absolute before:inset-0 before:bg-neutral-5/84"
      >
        <div
          class="
          w-[6.5rem] h-[6.5rem] grid place-items-center text-primary bg-white rounded-full z-[1]
          group-hover:scale-[105%] transition-transform
        "
        >
          <IconPlay class="w-auto h-1.5 translate-x-[0.25rem]" />
        </div>
        <h2 class="h2 text-white z-[1]">
          Feel the authentic & <br class="max-[380px]:hidden"> original taste from us
        </h2>
      </BaseButton>
      <div
        class="
        grid gap-3 justify-center py-4 px-(--spacing-screen-padding) desktop:pb-6
        lg-tablet:grid-cols-2 lg-tablet-landscape:grid-cols-[repeat(3,minmax(0,22.875rem))] desktop:gap-[5.5rem]
      "
      >
        <div class="flex gap-1.5">
          <IconRestaurantMenu class="shrink-0 w-auto h-3" />
          <div class="text-dark-400">
            <h3 class="font-bold text-[1.25rem] mb-1 text-dark">
              Multi Cuisine
            </h3>
            <p>Simple, user-friendly ordering in just a few clicks — something delicious for every craving.</p>
          </div>
        </div>
        <div class="flex gap-1.5">
          <IconOven class="shrink-0 w-auto h-3" />
          <div class="text-dark-400">
            <h3 class="font-bold text-[1.25rem] mb-1 text-dark">
              Easy To Order
            </h3>
            <p>Simple, user-friendly ordering in just a few clicks—no hassle, no wait.</p>
          </div>
        </div>
        <div class="flex gap-1.5">
          <IconTimer class="shrink-0 w-auto h-3" />
          <div class="text-dark-400">
            <h3 class="font-bold text-[1.25rem] mb-1 text-dark">
              Fast Delivery
            </h3>
            <p>Hot, fresh meals delivered to your door quickly and reliably every time.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-neutral-1">
      <div class="page-section flex gap-3 flex-col items-center tablet-landscape:flex-row justify-between">
        <div class="max-w-[39.125rem]">
          <h2 class="h2 mb-[1.25rem] max-w-[92%]">
            A little information for our valuable guests
          </h2>
          <p class="text-dark-400 max-w-[92%]">
            At Bistro Bliss, we believe that dining is not just about food, but also about the overall
            experience. Our staff, renowned for their warmth and dedication, strives to make every
            visit an unforgettable event.
          </p>
          <div class="grid gap-1.5 mt-2 text-dark-400 tablet:grid-rows-[11rem,11rem] tablet:grid-cols-2 desktop:mt-4">
            <div class="card flex flex-col text-center justify-center p-1 font-medium text-[1.125rem] rounded-lg">
              <span class="h2 block mb-1">
                3
              </span>
              Locations
            </div>
            <div class="card flex flex-col text-center justify-center p-1 font-medium text-[1.125rem] rounded-lg">
              <span class="h2 block mb-1">
                1995
              </span>
              Founded
            </div>
            <div class="card flex flex-col text-center justify-center p-1 font-medium text-[1.125rem] rounded-lg">
              <span class="h2 block mb-1">
                65+
              </span>
              Staff Members
            </div>
            <div class="card flex flex-col text-center justify-center p-1 font-medium text-[1.125rem] rounded-lg">
              <span class="h2 block mb-1">
                100%
              </span>
              Satisfied Customers
            </div>
          </div>
        </div>
        <img
          class="max-w-[25rem] desktop:max-w-[34.5rem]"
          src="/images/about-history.webp"
          alt="Our history"
          loading="lazy"
        >
      </div>
    </section>
    <CustomerReview class="page-section" />
  </main>
</template>

<script lang="ts" setup>
import IconPlay from '@/assets/icons/Play.svg';
import IconRestaurantMenu from '@/assets/icons/RestaurantMenu.svg';
import IconOven from '@/assets/icons/Oven.svg';
import IconTimer from '@/assets/icons/Timer.svg';
import BaseButton from '@/components/BaseButton.vue';
import AboutDescription from '@/components/AboutDescription.vue';
import CustomerReview from '@/components/CustomerReview.vue';
</script>
