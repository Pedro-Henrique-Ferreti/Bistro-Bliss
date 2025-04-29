<template>
  <footer class="bg-neutral-6 pt-4 pb-3 desktop:pt-[7.5rem] desktop:pb-5">
    <div class="container-md flex flex-col gap-3 max-lg-tablet:max-w-[25rem] lg-tablet:flex-row lg-tablet:justify-between">
      <div class="lg-tablet:max-w-[18rem]">
        <AppLogo
          class="w-[14.5rem]"
          variant="light"
        />
        <p class="text-neutral-8 my-2">
          In the new era of technology we look to the future with certainty and pride to for our company and our clients.
        </p>
        <div class="flex flex-wrap gap-[0.75rem]">
          <SocialMediaButton
            aria-label="Twitter"
            to="https://x.com"
            :icon="IconTwitter"
          />
          <SocialMediaButton
            aria-label="Facebook"
            to="https://facebook.com"
            :icon="IconFacebook"
          />
          <SocialMediaButton
            aria-label="Instagram"
            to="https://instagram.com"
            :icon="IconInstagram"
          />
          <SocialMediaButton
            aria-label="GitHub"
            to="https://github.com"
            :icon="IconGitHub"
          />
        </div>
      </div>
      <div class="lg-tablet:min-w-[12rem] desktop:min-w-[16rem]">
        <span class="text-white font-semibold">
          Pages
        </span>
        <nav class="grid gap-[1.25rem] mt-2 text-neutral-2">
          <RouterLink
            class="hover:underline"
            :to="{ name: 'home' }"
          >
            Home
          </RouterLink>
          <RouterLink
            class="hover:underline"
            :to="{ name: 'about' }"
          >
            About
          </RouterLink>
          <RouterLink
            class="hover:underline"
            :to="{ name: 'menu' }"
          >
            Menu
          </RouterLink>
          <RouterLink
            class="hover:underline"
            :to="{ name: 'blog' }"
          >
            Blog
          </RouterLink>
          <RouterLink
            class="hover:underline"
            :to="{ name: 'contact'}"
          >
            Contact
          </RouterLink>
          <RouterLink
            class="hover:underline"
            :to="{ name: 'book-table'}"
          >
            Book A Table
          </RouterLink>
        </nav>
      </div>
      <div class="w-full max-w-[25rem]">
        <span class="text-white font-semibold">
          Follow Us On Instagram
        </span>
        <div class="grid gap-1 grid-cols-2 mt-2">
          <BaseButton
            class="aspect-[2/1.75] rounded-xl bg-cover bg-center bg-neutral-2 hover:scale-[102%] transition-transform"
            style="background-image: url('https://images.pexels.com/photos/1703272/pexels-photo-1703272.jpeg?auto=compress&cs=tinysrgb&w=600');"
            to="https://instagram.com"
          />
          <BaseButton
            class="aspect-[2/1.75] rounded-xl bg-cover bg-center bg-neutral-2 hover:scale-[102%] transition-transform"
            style="background-image: url('https://images.pexels.com/photos/1583891/pexels-photo-1583891.jpeg?auto=compress&cs=tinysrgb&w=600');"
            to="https://instagram.com"
          />
          <BaseButton
            class="aspect-[2/1.75] rounded-xl bg-cover bg-center bg-neutral-2 hover:scale-[102%] transition-transform"
            style="background-image: url('https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600');"
            to="https://instagram.com"
          />
          <BaseButton
            class="aspect-[2/1.75] rounded-xl bg-cover bg-center bg-neutral-2 hover:scale-[102%] transition-transform"
            style="background-image: url('https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600');"
            to="https://instagram.com"
          />
        </div>
      </div>
    </div>
    <p class="container-md text-center text-neutral-8 border-t border-neutral-4 pt-2 mt-2.5">
      Copyright © 2025
      <BaseButton
        class="hover:underline"
        to="https://www.linkedin.com/in/pedro-henrique-ferreti-de-souza-7921aa174/"
      >
        <span>Pedro Ferreti</span>
      </BaseButton>. Design by
      <BaseButton
        class="hover:underline"
        to="https://www.figma.com/@jaydeepkaila9"
      >
        <span>Jaydeep Kaila</span>
      </BaseButton>.
    </p>
  </footer>
</template>

<script lang="ts" setup>
import IconTwitter from '@/assets/icons/Twitter.svg';
import IconInstagram from '@/assets/icons/Instagram.svg';
import IconFacebook from '@/assets/icons/Facebook.svg';
import IconGitHub from '@/assets/icons/GitHub.svg';
import AppLogo from './AppLogo.vue';
import SocialMediaButton from './SocialMediaButton.vue';
import BaseButton from './BaseButton.vue';
</script>
