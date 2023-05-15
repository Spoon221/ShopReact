import styled from 'styled-components';

import {deviceSizes} from '../shared/utils';

export const WrapperApp = styled.div`
  margin-top: 80px;

  @media (max-width: ${deviceSizes.laptop}) {
    margin-top: 0;
    margin-bottom: 80px;
  }
`;
