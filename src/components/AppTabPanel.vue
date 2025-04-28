<template>
  <div
    class="max-w-fit"
    :class="$attrs.class"
  >
    <swiper-container
      space-between="16"
      free-mode="true"
      slides-per-view="auto"
    >
      <swiper-slide
        v-for="tab in items"
        :key="tab.id"
        class="w-max last:mr-0!"
      >
        <label :for="tab.elementId || tab.id">
          <input
            v-model="activeTabId"
            :id="tab.elementId || tab.id"
            class="w-0 h-0 opacity-0 absolute"
            type="radio"
            :name="tab.name"
            :value="tab.id"
            @keypress.enter="($event.target as HTMLInputElement).click()"
          >
          <span
            class="
              flex justify-center items-center min-w-[7.5rem] h-3 px-[1.75rem] font-bold
              rounded-full border border-neutral-2 cursor-pointer transition-colors
              data-[active=true]:border-primary data-[active=true]:bg-primary data-[active=true]:text-white"
            :data-active="activeTabId === tab.id"
          >
            {{ tab.name }}
          </span>
        </label>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script lang="ts" setup>
import type { TabPanelTab } from '@/types/TabPanel';

defineProps<{
  items: TabPanelTab[];
}>();

const activeTabId = defineModel<string>({ required: true });
</script>
