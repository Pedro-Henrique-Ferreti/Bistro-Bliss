<template>
  <main>
    <section class="bg-neutral-1">
      <article class="page-section container-xs">
        <h1 class="h2 text-center mb-4">
          {{ article?.title }}
        </h1>
        <img
          class="w-full rounded-t-xl mb-4"
          alt="Article main image"
          :src="article?.image"
        >
        <div
          v-html="article?.content"
          class="article-content"
        />
      </article>
    </section>
    <section class="page-section text-center">
      <h2 class="h2">
        Read More Articles
      </h2>
      <p class="text-dark-400 text-[1.125rem] max-w-[39.5rem] mx-auto mt-[1.25rem]">
        We consider all the drivers of change gives you the components you need to change to create a truly happens.
      </p>
      <div class="grid mt-[4.5rem] gap-1.5 grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] desktop:grid-cols-4">
        <ArticlePreview
          v-for="item in articleList"
          :key="item.id"
          :article="item"
        />
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { isBefore } from 'date-fns';
import { ARTICLE_LIST } from '@/constants/articles';

const route = useRoute();

const article = computed(() => ARTICLE_LIST.find(i => i.id === +route.params.articleId));

const articleList = [...ARTICLE_LIST].sort((a, b) => (
  isBefore(new Date(a.createdAt), new Date(b.createdAt)) ? 1 : -1
)).slice(0, 4);

useSeoMeta({
  title: () => (article.value?.title),
});
</script>

<style scoped>
@reference '@/assets/css/main.css';

.article-content:deep() {
  *:not(h1, h2, h3) {
    @apply text-dark-400 text-[1.125rem];
  }
  h1, h2, h3 {
    @apply font-semibold;
    margin: revert;
    font-size: revert;
  }
  ul, ol {
    padding: revert;
    padding-inline-start: 1em;
    list-style: revert;
    @apply marker:font-semibold;
  }
}
</style>
