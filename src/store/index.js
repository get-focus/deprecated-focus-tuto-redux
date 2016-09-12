import createStoreWithFocus, {combineReducerWithFocus} from 'focus-graph/store/create-store';
import rootReducer from '../reducer';
import {amoutToUpperCaseMiddleware, errorFieldMiddleware, ownActiondMiddleware} from '../../src/middleware/user-middleware';
import DevTools from '../containers/dev-tools'
import customReducer from '../reducer/custom-reducer';

import messageReducer from 'focus-application/lib/messages/messages-reducer';
import headerReducer from 'focus-application/lib/header/header-reducer';
import confirmReducer from 'focus-application/lib/confirm/confirm-reducer';
import fetchReducer from 'focus-application/lib/fetch/fetch-reducer';

let lastCreatedStore;

if(module.hot){
  console.info('Reducer hot reload subscription')
  // Enable Webpack hot module replacement for reducers
 module.hot.accept('../reducer/index', () => {
   console.log('[HMR] reload reducers ...')
   const nextProjectReducer = require('../reducer/index');
   lastCreatedStore.replaceReducer(combineReducerWithFocus(nextRootReducer))
 })
}

export default function configureStore(initialState){
  const store = createStoreWithFocus({
      dataset: rootReducer,
      customData: customReducer,
      messages: messageReducer,
      header: headerReducer,
      confirm: confirmReducer,
      fetch:fetchReducer
    },
    [errorFieldMiddleware, amoutToUpperCaseMiddleware,ownActiondMiddleware],
    [DevTools.instrument()]
  );

  lastCreatedStore = store;
  return store;
};
