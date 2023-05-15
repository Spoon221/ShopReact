import styled from 'styled-components';
import {Button} from 'antd';

export const DropdownItem = styled.div`
  padding: 10px 12px;
  color: var(--main-text-dark);
  cursor: pointer;
  text-transform: capitalize;
  
  &:hover {
    color: var(--main-orange);
  }
`;

export const StyledButton = styled(Button)`
  font-size: 18px;
  font-weight: bold;
  padding: 3px 20px;
  color: var(--main-text-light);
  font-family: BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Helvetica Neue', sans-serif;
`;
