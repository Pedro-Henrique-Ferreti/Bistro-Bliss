<template>
  <div class="card">
    <div
      class="w-full aspect-[3/2] rounded-t-xl bg-cover bg-center bg-neutral-2"
      :style="`background-image: url('${menuItem.image}');`"
    />
    <div class="flex flex-col gap-[0.75rem] items-center text-center p-[1.75rem] pb-2">
      <span class="font-bold text-[1.5rem] text-primary">
        $ {{ menuItem.price }}
      </span>
      <span class="h3">
        {{ menuItem.title }}
      </span>
      <p class="text-dark-400">
        {{ menuItem.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MenuItem } from '@/types/Menu';

defineProps<{
  menuItem: MenuItem;
}>();
</script>
