import React, {createContext, useContext} from 'react';

import {useProductService} from './use-product-service';

const ProductContext = createContext(null);

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({children}) => {
  const productService = useProductService();

  return <ProductContext.Provider value={productService}>{children}</ProductContext.Provider>;
};
