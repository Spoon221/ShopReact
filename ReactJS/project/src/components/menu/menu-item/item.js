import React, {useMemo} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Badge} from 'antd';

import {DropdownCatalog} from '../../dropdown-catalog';
import {Title, Wrapper, WrapperTabletItem} from './ui';
import {useProduct} from '../../../services/product';

export const Item = ({item, onOpenDrawer}) => {
  const {link, icon, title, isModal} = item;

  const location = useLocation();
  const navigate = useNavigate();

  const Icon = useMemo(() => icon, [icon]);

  const handleClick = () => {
    if (isModal) {
      const modalName = link === '/modal-catalog' ? 'catalog' : 'cart';
      if (onOpenDrawer) {
        onOpenDrawer(modalName);
      }
    } else {
      navigate(link);
    }
  };

  const isCatalogItem = link === '/modal-catalog';
  const isHomeItem = link === '/';

  const {cartProductList} = useProduct();

  return (
    <>
      {isCatalogItem && (
        <WrapperTabletItem>
          <DropdownCatalog/>
        </WrapperTabletItem>
      )}

      {isHomeItem && (
        <WrapperTabletItem onClick={handleClick}>
          <h2>Shopping</h2>
        </WrapperTabletItem>
      )}

      <Wrapper
        isActive={location.pathname === link}
        onClick={handleClick}
        $isTabletElement={isCatalogItem || isHomeItem}
      >
        {link !== '/modal-cart' ? <Icon/> : (
            <Badge count={cartProductList.length}>
              <Icon/>
            </Badge>
        )}
        <Title>{title}</Title>
      </Wrapper>
    </>
  );
};
