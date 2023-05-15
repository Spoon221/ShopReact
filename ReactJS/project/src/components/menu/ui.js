import styled from 'styled-components';

import {deviceSizes} from '../../shared/utils';

export const Wrapper = styled.div`
  color: var(--main-text-light);
  width: 100%;
  background-color: var(--main-bg-form);
  position: fixed;
  top: 0;
  z-index: 2;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);

  @media (max-width: ${deviceSizes.laptop}) {
    width: 100%;
    bottom: 0;
    top: auto;
    box-shadow: 0 -2px 8px rgba(0,0,0,.15);
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 10px;
  width: 1024px;
  margin: auto;
  box-sizing: border-box;

  @media (max-width: ${deviceSizes.laptop}) {
    width: 100%;
    justify-content: space-around;
  }
`;
