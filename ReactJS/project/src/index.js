import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import {ProductProvider} from './services/product';
import {Routing} from './routing';

import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <ProductProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </ProductProvider>,
    // </React.StrictMode>,
);
