import { MenuType, type MenuItem } from '@/types/Menu';
import type { TabPanelTab } from '@/types/TabPanel';

export const MENU_LIST: MenuItem[] = [
  {
    id: 1,
    title: 'Fried Eggs',
    description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
    price: 9.99,
    image: 'https://images.pexels.com/photos/22420/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    type: MenuType.BREAKFAST,
  },
  {
    id: 2,
    title: 'Hawaiian Pizza',
    description: 'Made with pizza dough, tomato sauce, mozzarella cheese, ham, pineapple.',
    price: 15.99,
    image: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=600',
    type: MenuType.MAIN_DISH,
  },
  {
    id: 3,
    title: 'Martinez Cocktail',
    description: 'Gin, sweet vermouth, maraschino liqueur, orange bitters, lemon twist.',
    price: 7.25,
    image: 'https://images.pexels.com/photos/128242/pexels-photo-128242.jpeg?auto=compress&cs=tinysrgb&w=600',
    type: MenuType.DRINK,
  },
  {
    id: 4,
    title: 'Butterscotch Cake',
    description: 'Made with flour, brown sugar, butter, eggs, butterscotch sauce.',
    price: 20.99,
    image: 'https://images.pexels.com/photos/31779877/pexels-photo-31779877/free-photo-of-delicious-raspberry-cheesecake-on-elegant-table-setting.jpeg?auto=compress&cs=tinysrgb&w=600',
    type: MenuType.DESSERT,
  },
  {
    id: 5,
    title: 'Mint Lemonade',
    description: 'Made with mint leaves, lemon juice, water, sugar, ice.',
    price: 5.89,
    image: 'https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=600',
    type: MenuType.DRINK,
  },
  {
    id: 6,
    title: 'Chocolate Ice Cream',
    description: 'Made with milk, cream, sugar, cocoa powder, egg yolks.',
    price: 18.05,
    image: 'https://images.pexels.com/photos/2677814/pexels-photo-2677814.jpeg?auto=compress&cs=tinysrgb&w=600',
    type: MenuType.DESSERT,
  },
  {
    id: 7,
    title: 'Cheese Burger',
    description: 'Made with ground beef patty, cheddar cheese, burger bun, lettuce, tomato.',
    price: 12.55,
    image: 'https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=600',
    type: MenuType.MAIN_DISH,
  },
  {
    id: 8,
    title: 'Classic Waffles',
    description: 'Made with flour, eggs, milk, butter, baking powder.',
    price: 12.99,
    image: 'https://images.pexels.com/photos/374092/pexels-photo-374092.jpeg?auto=compress&cs=tinysrgb&w=600',
    type: MenuType.BREAKFAST,
  },
];

export const MenuListTab: Record<string, TabPanelTab<MenuType | 'all'>> = {
  ALL: { id: 'all', name: 'All' },
  BREAKFAST: { id: MenuType.BREAKFAST, name: 'Breakfast' },
  MAIN_DISH: { id: MenuType.MAIN_DISH, name: 'Main dishes' },
  DRINK: { id: MenuType.DRINK, name: 'Drinks' },
  DESSERT: { id: MenuType.DESSERT, name: 'Desserts' },
} as const;
