import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import './style/EVE.scss';

import Main from './component/main';
import Header from './component/header';


function EVE() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
}

export default EVE;