import styled from 'styled-components';
import {Space} from 'antd';

import {Button} from '../../shared/ui';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  flex: 1 1 50%;
  box-sizing: border-box;
  margin: 12px;
  
  background-color: var(--main-bg-form);
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.16);
  padding: 20px;
`;

export const Div = styled.div`
  &.image-box, &.description-box {
    display: flex;
    flex: 1 1 48%;
    min-width: 300px;
  }

  &.image-box {
    justify-content: center;
    padding: 12px;
    box-sizing: border-box;
    img {
      max-height: 400px;
      max-width: 100%;
    }
  }
  
  &.description-box {
    flex-direction: column;
    gap: 12px;
  }
  
  &.text-large {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const StyledSpace = styled(Space)`
  display: flex;
  justify-content: flex-start;
  
  .ant-space-item {
    display: flex;
    margin-left: -4px;
  }

  .select-btn path {
    fill: red;
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
    text-transform: capitalize;
  }
  
  &.ellipse {
    align-items: center;
    background-color: var(--main-bg);
    border-radius: 8px;
    display: inline-flex;
    height: 34px;
    margin-top: 12px;
    padding: 0 12px;
    white-space: nowrap;
  }
`;

export const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  height: 48px;
  font-size: 18px;
  font-weight: bold;
  color: #222;
  padding: 4px 24px;
  
  &.ant-btn:hover {
    color: var(--main-orange);
    border-color:  var(--main-orange);

    path {
      fill: var(--main-orange);
    }
  }
`;


