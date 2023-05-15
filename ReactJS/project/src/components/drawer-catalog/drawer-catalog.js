import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';

import {Drawer} from '../../shared/ui';
import {useProduct} from '../../services/product';
import {StyledItem, StyledList} from './ui';

export const DrawerCatalog = (props) => {
  const navigate = useNavigate();
  const {getCategories, categories, getProducts} = useProduct();
  const {open, onClose} = props;

  useEffect(() => {
    if (props.open) {
      getCategories();
    }
  }, [open]);

  const handleClick = (category) => {
    getProducts(category);
    onClose();
    navigate('/');
  };


  return (
    <Drawer {...props}>
      <StyledList
        size="large"
        bordered
        dataSource={categories}
        renderItem={(item) => <StyledItem onClick={() => handleClick(item)}>{item}</StyledItem>}
      />
    </Drawer>
  );
};

DrawerCatalog.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  placement: PropTypes.string,
};
