import React, {useState} from 'react';

import {ItemsContainer, Wrapper} from './ui';
import {menuItems} from './constants';
import {Item} from './menu-item';
import {DrawerCart} from '../drawer-cart';
import {DrawerCatalog} from '../drawer-catalog';

export const Menu = () => {
  const [isOpenCart, setOpenCart] = useState(false);
  const [isOpenCatalog, setOpenCatalog] = useState(false);

  const openDrawer = (modalName) => {
    if (modalName === 'cart') {
      setOpenCart(true);
    } else {
      setOpenCatalog(true);
    }
  };

  const onClose = () => {
    setOpenCart(false);
    setOpenCatalog(false);
  };

  return (
    <>
      <Wrapper>
        <ItemsContainer>
          {menuItems.map((item) => (
            <Item key={item.link} item={item} onOpenDrawer={openDrawer}/>
          ))}
        </ItemsContainer>
      </Wrapper>

      {isOpenCart && <DrawerCart title="Корзина" placement="right" onClose={onClose} open={isOpenCart}/>}
      <DrawerCatalog title="Каталог" placement="right" onClose={onClose} open={isOpenCatalog}/>
    </>
  );
};
