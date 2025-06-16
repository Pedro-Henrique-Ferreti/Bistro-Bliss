<template>
  <button
    v-if="!to"
    :type="type"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
  <NuxtLink
    v-else
    target="_blank"
    :to="to"
    @click="handleClick"
  >
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { ButtonHTMLAttributes } from 'vue';
import type { RouteLocationRaw } from 'vue-router';

const emit = defineEmits(['click']);
const props = withDefaults(defineProps<{
  to?: RouteLocationRaw;
  type?: ButtonHTMLAttributes['type'];
  disabled?: boolean;
}>(), {
  type: 'button',
  to: undefined,
});

function handleClick(event: Event) {
  /**
   * Prevents <a> and <NuxtLink> elements from being activated
   * with Tab + Enter keys when button is disabled
   */
  if (props.disabled) {
    event.preventDefault();
    return;
  }

  emit('click', event);
}
</script>
