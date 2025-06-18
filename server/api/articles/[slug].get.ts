import { ARTICLE_LIST } from '@/constants/articles';

export default defineEventHandler((event) => {
  const { slug } = getRouterParams(event);

  const article = ARTICLE_LIST.find((article) => article.slug === slug);

  if (!article) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Article not found',
    });
  }

  return article;
});
