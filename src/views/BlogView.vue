<template>
  <main class="bg-neutral-1">
    <section class="page-section text-center">
      <h1 class="h1">
        Our Blog & Articles
      </h1>
      <p class="text-dark-400 text-[1.125rem] max-w-[39.5rem] mx-auto mt-[1.25rem]">
        We consider all the drivers of change gives you the components you need to change to create a truly happens.
      </p>
      <div class="grid gap-1.5 grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] mt-[4.5rem] desktop:grid-cols-4 tablet:gap-y-2">
        <ArticlePreview
          v-for="article in articleList"
          :key="article.id"
          :article="article"
        />
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { isBefore } from 'date-fns';
import { ARTICLE_PREVIEW_LIST } from '@/constants/articles';
import ArticlePreview from '@/components/ArticlePreview.vue';

const articleList = [...ARTICLE_PREVIEW_LIST].sort((a, b) => (
  isBefore(new Date(a.createdAt), new Date(b.createdAt)) ? 1 : -1
));
</script>
