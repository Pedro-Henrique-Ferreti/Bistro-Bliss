<template>
  <div class="flex flex-col-reverse items-center gap-3 desktop:flex-row desktop:gap-6">
    <div class="flex w-fit pb-6 pr-1 tablet:pb-3 tablet:pr-3 relative desktop:shrink-0">
      <img
        class="w-full max-desktop:max-w-[30rem]"
        alt="About us"
        :src="image || '/images/about-description.webp'"
      >
      <div class="
        max-w-[25rem] p-2 bg-neutral-6 text-light rounded-xl
        absolute max-tablet:translate-x-1 bottom-0 right-0.5 tablet:right-0 desktop:p-3
      ">
        <span class="font-bold text-[1.5rem] text-light-400">
          Come and visit us
        </span>
        <ul class="grid gap-1.5 mt-[2rem] desktop:mt-[2.75rem]">
          <li class="flex items-center gap-[1.25rem]">
            <IconPhone class="w-auto h-1.5" />
            (414) 857 - 0107
          </li>
          <li class="flex items-center gap-[1.25rem]">
            <IconMail class="w-auto h-1.5" />
            yummy@bistrobliss
          </li>
          <li class="flex gap-[1.25rem]">
            <IconLocation class="w-auto h-1.5 shrink-0" />
            837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
          </li>
        </ul>
      </div>
    </div>
    <div>
      <h2 class="h2">
        We provide healthy food for your family.
      </h2>
      <p class="my-1.5 font-medium text-[1.125rem]">
        Our story began with a vision to create a unique dining experience that merges fine
        dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary
        culture, we aim to honor our local roots while infusing a global palate.
      </p>
      <p class="text-dark-400">
        At place, we believe that dining is not just about food, but also about the overall
        experience. Our staff, renowned for their warmth and dedication, strives to make
        every visit an unforgettable event.
      </p>
      <div
        v-if="$slots['default']"
        class="mt-2.5"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconPhone from '@/assets/icons/Phone.svg';
import IconMail from '@/assets/icons/Mail.svg';
import IconLocation from '@/assets/icons/Location.svg';

defineProps<{
  image?: string;
}>();
</script>
