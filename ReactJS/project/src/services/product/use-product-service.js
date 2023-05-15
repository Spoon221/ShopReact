import {useState} from 'react';

import {useProductApi} from './use-product-api';
import {useLocalStorage} from '../../shared/hooks';

export const useProductService = () => {
  const [listProducts, setListProducts] = useState([]);
  const [listCategories, setListCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartProductList, setCartProductList] = useLocalStorage('cart', []);
  const [wishProductList, setWishProductList] = useLocalStorage('wish', []);

  const getProducts = async (category) => {
    setLoading(true);
    const data = await useProductApi.getProducts(category);
    setLoading(false);

    setListProducts(data);
  };

  const getCategories = async () => {
    const data = await useProductApi.getCategories();

    setListCategories(data);
  };

  const handleRemoveProduct = (id) => {
    const hasCartProduct = cartProductList.some((item) => item.id === id);

    if (hasCartProduct) {
      const newArr = cartProductList.filter((item)=> item.id !== id);
      setCartProductList(newArr);
    }
  };

  const handleUpdateCountProduct = (id, value) => {
    const tempArray = cartProductList.map((item)=>item);
    const cartProduct = tempArray.find((item) => item.id === id);
    cartProduct.amount = value;

    setCartProductList(tempArray);
  };

  return {
    loading,
    products: listProducts,
    onSetProducts: setListProducts,
    categories: listCategories,
    getProducts,
    getCategories,

    cartProductList,
    setCartProductList,
    wishProductList,
    setWishProductList,

    handleRemoveProduct,
    handleUpdateCountProduct,
  };
};
