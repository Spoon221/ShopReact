import {Button, Card, Divider} from 'antd';
import styled from 'styled-components';
import {CloseOutlined} from '@ant-design/icons';

export const StyledCard = styled(Card)`
  margin: -12px -12px 24px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px;
`;

export const StyledDivider = styled(Divider)`
  margin: 12px 0;
`;

export const Div = styled.div`
  &.counter {
    font-size: 14px;
    padding: 4px 15px;
    border-bottom: 1px solid #d9d9d9;
    border-top: 1px solid #d9d9d9;
  }
  
  &.card-header {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
  }

  &.card-footer {
    display: flex;
    justify-content: space-between;
  }

  &.text-small {
    font-size: 12px;
    color: var(--main-text-light);
  }
`;

export const StyledButton = styled(Button)`
  box-shadow: none;
`;
export const StyledCloseOutlined = styled(CloseOutlined)`
  position: absolute;
  right: 0;
  top: 0;
`;

