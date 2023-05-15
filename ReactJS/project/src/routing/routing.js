import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

import {App} from '../App';
import {Main} from '../pages/main';
import {Product} from '../pages/product';
import {Spinner} from '../shared/ui';
import {NotFound} from '../pages/not-found';

export const Routing = () => {
  const spinnerStyle = {position: 'absolute', top: '50%', left: '50%'};

  return (
    <Suspense fallback={<Spinner style={spinnerStyle}/>}>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Main/>}/>
          <Route path="product">
            <Route path=":id" element={<Product/>}/>
          </Route>
          <Route path={'*'} element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
