import React from 'react';

import {StyledDrawer} from './ui';

export const Drawer = (props) => {
  return (
    <StyledDrawer {...props}>
      {props.children}
    </StyledDrawer>
  );
};
