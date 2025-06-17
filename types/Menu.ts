export enum MenuType {
  BREAKFAST = 'breakfast',
  MAIN_DISH = 'main-dishes',
  DRINK = 'drink',
  DESSERT = 'dessert',
}

export interface MenuItem {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  type: MenuType;
}
