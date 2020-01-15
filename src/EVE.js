import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import './style/EVE.scss';

import Main from './component/main';
// import Loading from './component/loading';


function EVE() {
  return (
    <Provider store={store}>
      <header>
        {'Header'}
      </header>
      <Main />
    </Provider>
  );
}

export default EVE;