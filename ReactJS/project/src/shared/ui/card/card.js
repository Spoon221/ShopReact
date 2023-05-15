import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Space} from 'antd';

import {StyledButton, StyledCard, StyledLink, StyledSpace, Text} from './ui';
import {StarIcon, WishlistIcon} from '../icons';

const {Meta} = StyledCard;

export const Card = ({card, handleClickWish, isWish, isInCart, handleClickBuy}) => {
  const IconStar = useMemo(() => StarIcon, [StarIcon]);
  const IconWish = useMemo(() => WishlistIcon, [WishlistIcon]);

  return (
    <StyledCard
      cover={
        <StyledLink className="align-center" to={`/product/${card.id}`}>
          <img
            alt="product"
            src={card.image}
          />
        </StyledLink>
      }
    >
      <StyledSpace style={{marginBottom: 12}}>
        <Text className="large ellipse">{card.price}$</Text>
        <Space>
          <IconStar/>
          <Text className="medium">{card.rating.rate}</Text>
        </Space>
      </StyledSpace>

      <StyledLink to={`/product/${card.id}`}>
        <Meta title={card.title}/>
      </StyledLink>

      <StyledSpace style={{marginTop: 14}}>
        <StyledButton onClick={() => handleClickBuy(card)}>
          {isInCart ? 'В корзине' : 'Купить'}
        </StyledButton>
        <StyledButton
          className={isWish ? 'select-btn' : ''}
          style={{padding: 12, width: 42}} onClick={() => handleClickWish(card)}
        >
          <IconWish/>
        </StyledButton>
      </StyledSpace>
    </StyledCard>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }),
  }),
  handleClickWish: PropTypes.func,
  isWish: PropTypes.bool,
  isInCart: PropTypes.bool,
  handleClickBuy: PropTypes.func,
};
