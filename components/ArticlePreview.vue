<template>
  <NuxtLink
    class="flex flex-col bg-white border border-neutral-1 rounded-xl shadow-card group"
    :to="{ name: 'blog-article', params: { articleId: article.id } }"
  >
    <div class="overflow-hidden rounded-t-xl aspect-[3/2]">
      <img
        class="w-full aspect-[inherit] group-hover:scale-[104%] transition-transform duration-300"
        alt="Article image"
        loading="lazy"
        :src="article.image"
      >
    </div>
    <div class="px-1.5 pt-[1.75rem] pb-1">
      <span class="text-dark-300 text-[0.875rem] font-medium">
        {{ format(new Date(article.createdAt), 'MMMM d, yyyy') }}
      </span>
      <span class="block mt-[0.75rem] text-[1.25rem] font-medium">
        {{ article.title }}
      </span>
      <p
        v-if="showDescription && article.description"
        v-text="article.description"
        class="hidden desktop:block text-dark-400 mt-[0.75rem]"
      />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { format } from 'date-fns';
import type { Article } from '@/types/Article';

defineProps<{
  article: Article;
  showDescription?: boolean;
}>();
</script>
