<template>
  <main class="bg-neutral-1">
    <section class="page-section text-center">
      <h1 class="h1">
        Our Blog & Articles
      </h1>
      <p class="text-dark-400 text-[1.125rem] max-w-[39.5rem] mx-auto mt-[1.25rem]">
        Stay updated with the latest food trends, cooking tips, and behind-the-scenes stories from Bistro Bliss.
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
import type { Article } from '~/types/Article';

useSeoMeta({
  title: 'Our Blog & Articles',
});

const { data: articleList } = await useFetch<Article[]>('/api/articles');
</script>
