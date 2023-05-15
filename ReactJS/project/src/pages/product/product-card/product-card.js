import React from 'react';

import {useProduct} from '../../../services/product';
import {Card} from '../../../components/drawer-cart';

export const ProductCard = (product) => {
  const {handleRemoveProduct, handleUpdateCountProduct} = useProduct();

  return (
    <div style={{margin: 8, maxWidth: 300, marginTop: 10}}>
      <Card
        card={product.product}
        onRemoveFromCart={handleRemoveProduct}
        onUpdateCount={handleUpdateCountProduct}
        showHeader={false}
      />
    </div>

  );
};
