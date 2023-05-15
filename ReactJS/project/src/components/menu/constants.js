import {CartIcon, CatalogIcon, HomeIcon} from '../../shared/ui';

export const menuItems = [
  {icon: HomeIcon, title: 'Главная', link: '/', isModal: false},
  {icon: CatalogIcon, title: 'Каталог', link: '/modal-catalog', isModal: true},
  {icon: CartIcon, title: 'Корзина', link: '/modal-cart', isModal: true},
];
