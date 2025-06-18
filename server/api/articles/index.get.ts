import { isBefore } from 'date-fns';
import { ARTICLE_LIST } from '@/constants/articles';

export default defineEventHandler((event) => {
  const { limit } = getQuery(event);

  const articleList = [...ARTICLE_LIST].sort((a, b) => (
    isBefore(new Date(a.createdAt), new Date(b.createdAt)) ? 1 : -1
  ));

  return limit ? articleList.slice(0, +limit) : articleList;
});
