import React, {useEffect, useState} from 'react';
import {MinusOutlined, PlusOutlined} from '@ant-design/icons';
import ButtonGroup from 'antd/es/button/button-group';

import {Div, StyledButton, StyledCard, StyledCloseOutlined, StyledDivider} from './ui';

export const Card = ({card, onRemoveFromCart, onUpdateCount, showHeader=true}) => {
  const {amount, product} = card;
  const [count, setCount] = useState(amount);

  useEffect(() => {
    onUpdateCount(product.id, count);
  }, [count]);

  const increase = () => {
    setCount(count + 1);
  };

  const decline = () => {
    let newCount = count - 1;
    if (newCount < 1) {
      onRemoveFromCart(product.id);
      newCount = 0;
    }
    setCount(newCount);
  };

  return (
    <StyledCard
      size="small"
    >
      <Div className="card-header">
        {showHeader && <Div style={{marginBottom: 6, fontSize: 18}}>{product.title}</Div>}
        <Div className="text-small">Цена за 1шт. {product.price}$</Div>
        <Div className="text-small">Заказано: {count}шт.</Div>
        <StyledCloseOutlined onClick={() => onRemoveFromCart(product.id)} />
      </Div>

      <StyledDivider/>
      <Div className="card-footer">
        <Div style={{display: "flex", alignItems: "center"}}>{product.price * count}$</Div>
        <ButtonGroup>
          <StyledButton onClick={decline} icon={<MinusOutlined />} />
          <Div className="counter">{count}</Div>
          <StyledButton onClick={increase} icon={<PlusOutlined />} />
        </ButtonGroup>
      </Div>
    </StyledCard>
  );
};
