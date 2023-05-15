import styled, {css} from 'styled-components';

import {deviceSizes} from '../../../shared/utils';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
    cursor: pointer;

  svg {
    height: 20px;
  }

  @media (max-width: ${deviceSizes.laptop}) {
    ${({isActive}) => isActive && css`
        path {
            fill: var(--main-orange);
        }
    `}
  }

  @media (min-width: ${deviceSizes.laptop}) {
    ${({$isTabletElement}) => $isTabletElement && css`display: none;`}
  }
`;

export const Title = styled.div`
  color: var(--main-text-light);
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
`;

export const WrapperTabletItem = styled.div`
    cursor: pointer;
    @media (max-width: ${deviceSizes.laptop}) {
        display: none;
    }
`;
