import React, {useEffect, useState} from 'react';
import {AutoComplete, Dropdown, Space, Switch} from 'antd';
import {DownOutlined, HeartOutlined} from '@ant-design/icons';

import {useProduct} from '../../services/product';
import {Card, Spinner} from '../../shared/ui';
import {Loading, StyledCard, Wrapper} from './ui';
import {compareByAlfa, compareByHighPrice, compareByLowPrice, compareByRate, ITEMS, LABELS} from './utils';

export const Main = () => {
  const {
    getProducts,
    products,
    loading,
    cartProductList,
    setCartProductList,
    wishProductList,
    setWishProductList,
  } = useProduct();

  const [sortId, setSortId] = useState(0);
  const [viewProducts, setViewProducts] = useState(products);
  const [isOnlyWishList, setIsOnlyWishList] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setViewProducts(products);
  }, [products]);

  useEffect(() => {
    filteredOnlyWishList();
  }, [isOnlyWishList]);

  const filteredOnlyWishList = () => {
    if (isOnlyWishList) {
      const arr = products.filter((x) => wishProductList.some((y) => y.id === x.id));
      setViewProducts(arr);
    } else {
      setViewProducts(products);
    }
  };

  const handleSortedClick = ({key}) => {
    setSortId(key);
    switch (key) {
      case '0':
        const arrHighPrice = products.sort(compareByHighPrice);
        setViewProducts(arrHighPrice);
        break;
      case '1':
        const arrLowPrice = products.sort(compareByLowPrice);
        setViewProducts(arrLowPrice);
        break;
      case '2':
        const arrHighRate = products.sort(compareByRate);
        setViewProducts(arrHighRate);
        break;
      case '3':
        const arrAlfa = products.sort(compareByAlfa);
        setViewProducts(arrAlfa);
        break;
    }
  };

  const handleClickWish = (card) => {
    const hasWishProduct = wishProductList.some((item) => item.id === card.id);

    if (hasWishProduct) {
      const newArr = wishProductList.filter((item)=> item.id !== card.id);
      setWishProductList(newArr);
    } else {
      const newWishProduct = {
        id: card.id,
        product: card,
      };
      setWishProductList([...wishProductList, newWishProduct]);
    }
  };

  const checkIsWish = (id) => {
    return wishProductList.some((item) => item.id === id);
  };

  const handleClickBuy = (card) => {
    const hasCartProduct = cartProductList.some((item) => item.id === card.id);

    if (hasCartProduct) {
      const newArr = cartProductList.filter((item)=> item.id !== card.id);
      setCartProductList(newArr);
    } else {
      const newCartProduct = {
        id: card.id,
        amount: 1,
        product: card,
      };
      setCartProductList([...cartProductList, newCartProduct]);
    }
  };

  const checkInCart = (id) => {
    return cartProductList.some((item) => item.id === id);
  };

  const options = products.map((item)=> ({value: item.title, key: item.id, option: item.id}));

  const onSelect = (_, data) => {
    const product = products.find((item) => item.id === data.option);
    if (product) setViewProducts([product]);
  };

  return (
    <Wrapper>
      {
        loading ? <Loading><Spinner/></Loading> :
           <>
             <StyledCard>
               <Space className="header-space">
                 <Space>
                   <Space>Сортировка:</Space>
                   <Dropdown
                     menu={{items: ITEMS, onClick: handleSortedClick}}
                     trigger={['click']}
                     size="large"
                     overlayStyle={{width: 226}}
                     placement="bottomRight"
                   >
                     <a onClick={(e) => e.preventDefault()}>
                       <Space >{LABELS[sortId]}</Space>
                       <DownOutlined style={{paddingRight: 20}} />
                     </a>
                   </Dropdown>
                 </Space>
                 <Space style={{margin: '8px 0'}} direction="horizontal">
                   <Space>Только избранные:</Space>
                   <Switch
                     onClick={()=> setIsOnlyWishList(!isOnlyWishList)}
                     checkedChildren={<HeartOutlined />}
                     unCheckedChildren={<HeartOutlined />}
                     defaultChecked={isOnlyWishList}
                   />
                 </Space>
                 <AutoComplete
                   style={{
                     width: 200,
                   }}
                   options={options}
                   placeholder="Введите название товара"
                   onSelect={(val, option) => onSelect(val, option)}
                   filterOption={(inputValue, option) =>
                     option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                   }
                 />
               </Space>
             </StyledCard>
             {
               viewProducts.map((item) => <Card
                 key={item.id}
                 card={item}
                 handleClickWish={handleClickWish}
                 handleClickBuy={handleClickBuy}
                 isWish={checkIsWish(item.id)}
                 isInCart={checkInCart(item.id)}

               />) }
           </>
      }
    </Wrapper>
  );
};
