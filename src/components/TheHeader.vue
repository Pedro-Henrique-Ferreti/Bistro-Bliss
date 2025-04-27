<template>
  <header>
    <TheHeaderContact />
    <div class="pt-[1.75rem] pb-[1.25rem] bg-neutral-1 relative">
      <div class="container-md flex items-center justify-between">
        <AppLogo class="w-[11rem] desktop:w-[18rem]" />
        <nav
          class="header-nav"
          id="header-nav"
          :data-open="menuIsOpen"
        >
          <ul class="flex gap-1 max-desktop:flex-col max-desktop:mb-[0.75rem] desktop:gap-[0.75rem]">
            <TheHeaderNavItem
              name="Home"
              :to="{ name: 'home' }"
            />
            <TheHeaderNavItem
              name="About"
              :to="{ name: 'about' }"
            />
            <TheHeaderNavItem
              name="Menu"
              :to="{ name: 'menu' }"
            />
            <TheHeaderNavItem
              name="Blog"
              :to="{ name: 'blog' }"
            />
            <TheHeaderNavItem
              name="Contact"
              :to="{ name: 'contact' }"
            />
          </ul>
          <AppButton
            variant="outline"
            size="small"
            label="Book A Table"
            :to="{ name: 'book-table' }"
          />
        </nav>
        <BaseButton
          class="w-2 h-2 grid place-items-center desktop:hidden"
          aria-controls="header-nav"
          aria-label="Menu"
          :aria-expanded="menuIsOpen"
          @click="menuIsOpen = !menuIsOpen"
        >
          <IconMenu
            v-if="!menuIsOpen"
            class="w-[1.5rem] h-[1.5rem]"
          />
          <IconClose
            v-else
            class="w-[1rem] h-[1rem]"
          />
        </BaseButton>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IconClose from '@/assets/icons/Close.svg';
import IconMenu from '@/assets/icons/Menu.svg';
import BaseButton from './BaseButton.vue';
import AppLogo from './AppLogo.vue';
import AppButton from './AppButton.vue';
import TheHeaderContact from './TheHeaderContact.vue';
import TheHeaderNavItem from './TheHeaderNavItem.vue';

const menuIsOpen = ref(false);
</script>

<style scoped>
@reference '@/assets/css/main.css';

.header-nav {
  @apply
    hidden data-[open=true]:block p-(--spacing-screen-padding) bg-neutral-1 absolute left-0 right-0 top-[100%]
    desktop:flex! desktop:items-center desktop:gap-10 desktop:static desktop:p-0 desktop:bg-transparent
  ;
}
</style>
