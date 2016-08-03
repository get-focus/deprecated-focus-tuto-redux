import React , {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import {createStore} from 'redux';
import builder from 'focus-redux/store/builder'
import Root from './root';
import reducer from './reducer'
import configureStore from './store';

const renderApp = RootComponent => {
  console.info('App rendered')
  ReactDOM.render(
    <AppContainer>
      <RootComponent store={configureStore()} />
    </AppContainer>,
      document.querySelector('.focus-redux-demo-app')
  );
}

renderApp(Root);

if (module.hot) {

//   module.hot.decline('./routes.js');
  module.hot.accept('./reducer', () => {
    console.log('hot reducer accepted.')
  //  window.location.reload()
  });
  module.hot.accept('./root', () => {
    console.log('Root change')

    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextRoot = require('./root');
    renderApp(NextRoot);
  });
}
