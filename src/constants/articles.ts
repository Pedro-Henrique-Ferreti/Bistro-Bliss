import type { ArticlePreview } from '@/types/Article';

export const ARTICLE_PREVIEW_LIST: ArticlePreview[] = [
  {
    id: 1,
    title: 'The secret tips & tricks to prepare a perfect burger & pizza for our customers',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    createdAt: '2025-01-12T00:00:00.000',
    description: 'Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.',
  },
  {
    id: 2,
    title: 'How to prepare the perfect french fries in an air fryer',
    image: 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600',
    createdAt: '2025-04-04T00:00:00.000',
  },
  {
    id: 3,
    title: 'How to prepare delicious chicken tenders',
    image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=600',
    createdAt: '2025-03-22T00:00:00.000',
  },
  {
    id: 4,
    title: '7 delicious cheesecake recipes you can prepare',
    image: 'https://images.pexels.com/photos/635409/pexels-photo-635409.jpeg?auto=compress&cs=tinysrgb&w=600',
    createdAt: '2025-02-11T00:00:00.000',
  },
  {
    id: 5,
    title: '5 great pizza restaurants you should visit this city',
    image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600',
    createdAt: '2025-02-20T00:00:00.000',
  },
] as const;
