import {List} from 'antd';
import styled from 'styled-components';

export const StyledList = styled(List)`
  &.ant-list {
    border: none;
  }
`;

export const StyledItem = styled(List.Item)`
  text-transform: capitalize;
  font-size: 18px;
  margin: auto -16px;
  cursor: pointer;
  
  &:hover {
    color: var(--main-orange)
  }
`;
