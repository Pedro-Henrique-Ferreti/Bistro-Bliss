<template>
  <div class="bg-neutral-6">
    <div class="container-md flex items-center justify-between h-[2.75rem] text-neutral-1">
      <div class="flex items-center gap-0.5 max-tablet:justify-between max-tablet:w-full tablet:gap-1.5">
        <BaseButton
          class="flex items-center gap-0.5 hover:underline"
          to="tel:14148570107"
        >
          <IconPhone class="text-white max-lg-smartphone:hidden" />
          <span>(414) 857 - 0107</span>
        </BaseButton>
        <BaseButton
          class="flex items-center gap-0.5 hover:underline"
          to="mailto:yummy@bistrobliss"
        >
          <IconMail class="text-white max-lg-smartphone:hidden" />
          <span>yummy@bistrobliss</span>
        </BaseButton>
      </div>
      <div class="max-tablet:hidden flex items-center gap-[0.25rem]">
        <SocialMediaButton
          color="neutral"
          size="small"
          aria-label="Twitter"
          to="https://x.com"
          :icon="IconTwitter"
        />
        <SocialMediaButton
          color="neutral"
          size="small"
          aria-label="Facebook"
          to="https://facebook.com"
          :icon="IconFacebook"
        />
        <SocialMediaButton
          color="neutral"
          size="small"
          aria-label="Instagram"
          to="https://instagram.com"
          :icon="IconInstagram"
        />
        <SocialMediaButton
          color="neutral"
          size="small"
          aria-label="GitHub"
          to="https://github.com"
          :icon="IconGitHub"
        />
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
</script>
