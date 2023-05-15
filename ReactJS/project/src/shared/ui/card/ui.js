import styled from 'styled-components';
import {Card, Space} from 'antd';
import {Link} from 'react-router-dom';

import {Button} from '../button';

export const StyledCard = styled(Card)`
  flex: 1 1 24%;
  width: 250px;
  min-width: 250px;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);

  img {
    max-width: 100%;
    height: 300px;
    object-fit: contain;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .select-btn path {
    fill: red;
  }
`;

export const StyledSpace = styled(Space)`
  display: flex;
  justify-content: space-between;
  
  .ant-space-item {
    display: flex;
    margin-left: -4px;
  }
  
`;

export const Text = styled.span`
  &.large {
    font-size: 18px;
    font-weight: bold;
  }
  
  &.medium {
    font-size: 14px;
    color: #222222;
  }
  
  &.ellipse {
    align-items: center;
    background-color: var(--main-bg);
    border-radius: 8px;
    display: inline-flex;
    height: 34px;
    margin: 8px 8px 0 0;
    padding: 0 12px;
    white-space: nowrap;
  }
`;

export const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  height: 42px;
  
  &.ant-btn:hover {
    color: var(--main-orange);
    border-color:  var(--main-orange);
  }
`;

export const StyledLink = styled(Link)`
  &.align-center {
    display: flex;
    justify-content: center;
  }

  &:hover {
    .ant-card-meta-title {
      color: var(--main-orange);
    }
    img {
      opacity: 0.6;
    }
  }
`;
