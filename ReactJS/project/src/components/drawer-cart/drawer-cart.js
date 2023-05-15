import React from 'react';
import {Space} from 'antd';

import {Drawer} from '../../shared/ui';
import {Card} from './card';
import {useProduct} from '../../services/product';

export const DrawerCart = ({title, ...props}) => {
  const {cartProductList, handleRemoveProduct, handleUpdateCountProduct} = useProduct();

  const calculatingSum = () => {
    return cartProductList.reduce((sum, item) => {
      return sum + item.amount * item.product.price;
    }, 0);
  };

  const titleText = `${title}  ${calculatingSum().toFixed(2)}$`;

  return (
    <Drawer title={titleText} {...props}>
      <Space style={{position: 'relative'}}>
        <div style={{position: 'absolute', top: -30, left: 0, width: '100%'}}/>
      </Space>
      {cartProductList.map(
          (item) => <Card
            key={item.id}
            card={item}
            onRemoveFromCart={handleRemoveProduct}
            onUpdateCount={handleUpdateCountProduct}
          />,
      )}
    </Drawer>
  );
};
