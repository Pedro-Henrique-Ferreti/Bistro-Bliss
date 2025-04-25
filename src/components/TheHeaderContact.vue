<template>
  <div class="bg-neutral-6">
    <div class="container-md flex items-center max-tablet:justify-center justify-between h-[2.75rem] text-neutral-1">
      <div class="flex items-center gap-1.5">
        <BaseButton
          class="flex items-center gap-0.5 hover:underline"
          to="tel:14148570107"
        >
          <IconPhone class="text-white" />
          <span>(414) 857 - 0107</span>
        </BaseButton>
        <BaseButton
          class="flex items-center gap-0.5 hover:underline"
          to="mailto:yummy@bistrobliss"
        >
          <IconMail class="text-white" />
          <span>yummy@bistrobliss</span>
        </BaseButton>
      </div>
      <div class="max-tablet:hidden flex items-center gap-[0.25rem]">
        <BaseButton
          class="w-[1.75rem] h-[1.75rem] grid place-items-center rounded-full bg-neutral-1/12 hover:bg-neutral-1/50 transition-colors"
          aria-label="Twitter"
          to="https://x.com"
        >
          <IconTwitter class="fill-white" />
        </BaseButton>
        <BaseButton
          class="w-[1.75rem] h-[1.75rem] grid place-items-center rounded-full bg-neutral-1/12 hover:bg-neutral-1/50 transition-colors"
          aria-label="Facebook"
          to="https://facebook.com"
        >
          <IconFacebook class="fill-white -translate-x-[1px]" />
        </BaseButton>
        <BaseButton
          class="w-[1.75rem] h-[1.75rem] grid place-items-center rounded-full bg-neutral-1/12 hover:bg-neutral-1/50 transition-colors"
          aria-label="Instagram"
          to="https://instagram.com"
        >
          <IconInstagram class="fill-white" />
        </BaseButton>
        <BaseButton
          class="w-[1.75rem] h-[1.75rem] grid place-items-center rounded-full bg-neutral-1/12 hover:bg-neutral-1/50 transition-colors"
          aria-label="GitHub"
          to="https://github.com"
        >
          <IconGitHub class="fill-white" />
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconPhone from '@/assets/icons/Phone.svg';
import IconMail from '@/assets/icons/Mail.svg';
import IconTwitter from '@/assets/icons/Twitter.svg';
import IconInstagram from '@/assets/icons/Instagram.svg';
import IconFacebook from '@/assets/icons/Facebook.svg';
import IconGitHub from '@/assets/icons/GitHub.svg';
import BaseButton from './BaseButton.vue';
</script>
