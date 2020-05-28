import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Rainbow from './components/rainbow';

const Root = () => (
  <BrowserRouter>
    <Rainbow></Rainbow>
  </BrowserRouter>
);

export default Root;
