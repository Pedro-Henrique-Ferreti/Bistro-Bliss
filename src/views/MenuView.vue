<template>
  <main>
    <section class="page-section text-center">
      <h1 class="h1">
        Our Menu
      </h1>
      <p class="max-w-[34.5rem] text-dark-400 text-[1.125rem] mx-auto mt-[1.25rem] mb-3">
        Explore a diverse selection of delicious dishes, crafted with fresh ingredients and bold flavors.
      </p>
      <AppTabPanel
        v-model="selectedMenuType"
        class="mx-auto"
        :items="Object.values(MenuListTab)"
      />
      <div class="grid gap-1.5 mt-[5.5rem] tablet:grid-cols-2 tablet-landscape:grid-cols-3 desktop:grid-cols-4">
        <MenuCard
          v-for="item in MENU_LIST.filter(({ type }) => (
            selectedMenuType === MenuListTab.ALL.id || type === selectedMenuType)
          )"
          :key="item.id"
          :menu-item="item"
        />
      </div>
    </section>
    <section class="bg-neutral-1">
      <div class="page-section flex gap-3 flex-col items-center desktop:flex-row desktop:justify-between">
        <div class="max-w-[32rem] shrink-0 desktop:w-[22rem] max-desktop:text-center">
          <h2 class="h2 mb-[1.25rem]">
            You can order through apps
          </h2>
          <p class="text-dark-400">
            We're partnered with popular platforms like Uber Eats, DoorDash, and Grubhub so you can browse our menu, customize your order, and have it delivered straight to your door with just a few taps.
          </p>
        </div>
        <div class="flex flex-wrap justify-center gap-x-1 gap-y-1.5 desktop:gap-x-1.5 desktop:gap-y-2.5 desktop:max-w-[51.75rem]">
          <div
            v-for="(logo, index) in APP_LOGOS"
            :key="index"
            class="
              flex justify-center items-center w-[13.75rem] h-[5.5rem] rounded-xl bg-white shadow-card
              desktop:nth-4:w-[16.25rem] desktop:nth-5:w-[16.25rem] desktop:nth-6:w-[16.25rem]"
          >
            <component :is="logo" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { MENU_LIST, MenuListTab } from '@/constants/menu';
import LogoDeliveroo from '@/assets/logos/Deliveroo.svg';
import LogoDidiFood from '@/assets/logos/DidiFood.svg';
import LogoDoordash from '@/assets/logos/Doordash.svg';
import LogoFoodPanda from '@/assets/logos/FoodPanda.svg';
import LogoGrubhub from '@/assets/logos/Grubhub.svg';
import LogoInstacart from '@/assets/logos/Instacart.svg';
import LogoJustEat from '@/assets/logos/JustEat.svg';
import LogoPostmates from '@/assets/logos/Postmates.svg';
import LogoUberEats from '@/assets/logos/UberEats.svg';
import AppTabPanel from '@/components/AppTabPanel.vue';
import MenuCard from '@/components/MenuCard.vue';

const APP_LOGOS = [
  LogoUberEats,
  LogoGrubhub,
  LogoPostmates,
  LogoDoordash,
  LogoFoodPanda,
  LogoDeliveroo,
  LogoInstacart,
  LogoJustEat,
  LogoDidiFood,
];

const selectedMenuType = ref<typeof MenuListTab['']['id']>(MenuListTab.ALL.id);
</script>
