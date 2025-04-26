<template>
  <RouterLink
    class="flex flex-col bg-white border border-neutral-1 rounded-xl shadow-card hover:scale-[102%] transition-transform"
    :to="{ name: 'blog-post', params: { postId: article.id } }"
  >
    <div
      class="w-full aspect-[3/2] rounded-t-xl bg-cover bg-center bg-neutral-2"
      :style="`background-image: url('${article.image}');`"
    />
    <div class="px-1.5 pt-[1.75rem] pb-1">
      <span class="text-dark-300 text-[0.875rem] font-medium">
        {{ format(new Date(article.createdAt), 'MMMM dd, yyyy') }}
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
  </RouterLink>
</template>

<script setup lang="ts">
import type { ArticlePreview } from '@/types/Article';
import { format } from 'date-fns';

defineProps<{
  article: ArticlePreview;
  showDescription?: boolean;
}>();
</script>
