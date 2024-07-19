import { ShoppingBasket, ShoppingCart } from 'lucide-react';

const MenuData: any = [
  {
    label: 'Меню',
    isTitle: true,
    id: 1,
  },
  {
    id: 2,
    label: 'Товары',
    icon: <ShoppingBasket />,
    link: 'items',
  },
  {
    id: 3,
    label: 'Продукты',
    icon: <ShoppingCart />,
    link: 'products',
  },
];

export { MenuData };
