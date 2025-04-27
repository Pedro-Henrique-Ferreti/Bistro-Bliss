<template>
  <BaseButton
    class="grid place-items-center rounded-full transition-colors"
    :class="[
      size === 'small' ? 'w-[1.75rem] h-[1.75rem]' : 'w-[2.25rem] h-[2.25rem]',
      color === 'primary' ? 'bg-primary hover:bg-primary/75' : 'bg-neutral-1/12 hover:bg-neutral-1/50',
    ]"
    :to="to"
  >
    <component
      class="fill-white"
      :class="size === 'small' ? 'w-[0.8125rem] h-[0.8125rem]' : 'w-1 h-1'"
      :is="icon"
    />
  </BaseButton>
</template>

<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router';
import BaseButton from './BaseButton.vue';

withDefaults(defineProps<{
  color?: 'primary' | 'neutral';
  size?: 'small';
  to?: RouteLocationRaw;
  icon: unknown;
}>(), {
  color: 'primary',
  size: undefined,
  to: undefined,
});
</script>
