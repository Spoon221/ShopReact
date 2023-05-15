import React from 'react';
import {Outlet} from 'react-router-dom';

import {Menu} from './components/menu';
import {WrapperApp} from './styles/ui';

export const App = () => {
  return (
    <WrapperApp>
      <Outlet/>
      <Menu/>
    </WrapperApp>
  );
};
