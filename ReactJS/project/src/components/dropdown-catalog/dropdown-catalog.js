import React, {useEffect} from 'react';
import {Dropdown, Space} from 'antd';
import {useNavigate} from 'react-router-dom';

import {useProduct} from '../../services/product';
import {DropdownItem, StyledButton} from './ui';

export const DropdownCatalog = () => {
  const {getCategories, categories, getProducts} = useProduct();
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);

  const onClick = ({key}) => {
    getProducts(categories[key]);
    navigate('/');
  };

  const categoriesData = categories.map((item, index) => {
    return {
      key: index+'',
      label: <DropdownItem>{item}</DropdownItem>,
    };
  });

  return (
    <Dropdown
      menu={{items: categoriesData, onClick}}
      style={{marginBottom: 10}}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <StyledButton type="text">КАТАЛОГ</StyledButton>
        </Space>
      </a>
    </Dropdown>
  );
};
