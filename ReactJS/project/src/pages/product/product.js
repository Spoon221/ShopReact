import React, {useEffect, useMemo, useState} from 'react';
import {useLocation} from 'react-router-dom';

import {useProduct, useProductApi} from '../../services/product';
import {Container, Div, Wrapper, StyledButton, StyledSpace, Text} from './ui';
import {PRODUCT_DEFAULT} from './constants';
import {StarIcon, WishlistIcon} from '../../shared/ui';
import {ProductCard} from './product-card';

export const Product = () => {
  const {getProductById} = useProductApi;
  const location = useLocation();
  const [product, setProduct] = useState(PRODUCT_DEFAULT);

  const {cartProductList, setCartProductList, wishProductList, setWishProductList} = useProduct();

  const IconStar = useMemo(() => StarIcon, [StarIcon]);
  const IconWish = useMemo(() => WishlistIcon, [WishlistIcon]);

  useEffect(() => {
    const productID = location.pathname.match(/([^\/]*)\/*$/)[1];

    getProductById(productID).then((data) => setProduct(data));
  }, []);

  const handleClickWish = () => {
    const hasWishProduct = wishProductList.some((item) => item.id === product.id);

    if (hasWishProduct) {
      const newArr = wishProductList.filter((item)=> item.id !== product.id);
      setWishProductList(newArr);
    } else {
      const newWishProduct = {
        id: product.id,
        product: product,
      };
      setWishProductList([...wishProductList, newWishProduct]);
    }
  };

  const checkIsWish = () => {
    return wishProductList.some((item) => item.id === product.id);
  };

  const handleClickBuy = () => {
    const hasCartProduct = cartProductList.some((item) => item.id === product.id);

    if (hasCartProduct) {
      const newArr = cartProductList.filter((item)=> item.id !== product.id);
      setCartProductList(newArr);
    } else {
      const newCartProduct = {
        id: product.id,
        amount: 1,
        product: product,
      };
      setCartProductList([...cartProductList, newCartProduct]);
    }
  };

  const checkInCart = () => {
    return cartProductList.some((item) => item.id === product.id);
  };

  const findProduct = cartProductList.find((item) => item.id === product.id);

  return (
    <>
      {product.id && (
        <Wrapper>
          <Container>
            <Div className="image-box">
              <img src={product.image} alt="product"/>
            </Div>
            <Div className="description-box">
              <Div className="text-large">{product.title}</Div>
              <Div>{product.description}</Div>
              <Div>
                <StyledSpace style={{marginBottom: 12}}>
                  <Text className="large ellipse">{product.price}$</Text>
                  <Text className="ellipse">
                    <IconStar/>
                    <Text className="medium">{product.rating.rate}</Text>
                  </Text>
                  <Text className="medium ellipse">{product.category}</Text>
                </StyledSpace>
              </Div>
              <Div>
                <StyledSpace style={{marginTop: 14}}>
                  <StyledButton onClick={handleClickBuy}>
                    {checkInCart() ? 'В корзине' : 'Купить'}
                  </StyledButton>
                  <StyledButton
                    className={checkIsWish() ? 'select-btn' : ''}
                    onClick={handleClickWish}
                    style={{padding: 12, width: 48}}
                  >
                    <IconWish/>
                  </StyledButton>
                </StyledSpace>
              </Div>
              {findProduct && <ProductCard product={findProduct}/>}
            </Div>
          </Container>
        </Wrapper>
      )}
    </>
  );
};
