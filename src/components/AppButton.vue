<template>
  <BaseButton
    class="button"
    :data-variant="variant"
    :data-color="color"
    :data-size="size"
    :to="to"
    @click="(event) => (isLoading ? event.preventDefault() : $emit('click'))"
  >
    <slot>{{ label }}</slot>
  </BaseButton>
</template>

<script lang="ts">
</script>

<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router';
import BaseButton from './BaseButton.vue';

defineEmits(['click']);
withDefaults(defineProps<{
  color?: 'primary' | 'secondary';
  variant?: 'outline' | 'text';
  size?: 'small';
  to?: RouteLocationRaw;
  disabled?: boolean;
  isLoading?: boolean;
  label?: string;
}>(), {
  color: 'primary',
  variant: undefined,
  size: undefined,
  label: undefined,
  to: undefined,
});
</script>

<style scoped>
@reference '@/assets/css/main.css';

.button {
  @apply inline-flex justify-center items-center font-semibold text-base cursor-pointer;
}
.button:not([data-variant="text"]) {
  @apply h-4 px-2 rounded-full;

  &[data-color="primary"] {
    @apply bg-primary text-white transition-shadow hover:shadow-button;
  }
  &[data-color="secondary"] {
    @apply bg-secondary text-white transition-shadow hover:shadow-button;
  }

  &[data-variant="outline"] {
    @apply
      bg-transparent text-neutral-7 border border-neutral-7 transition-colors
      hover:text-primary hover:border-primary hover:shadow-none
    ;
  }

  &[data-size="small"] {
    @apply h-3;
  }
}
.button[data-variant="text"] {
  @apply h-[1.75rem] text-primary hover:text-primary/80 transition-colors;
}
</style>
