import createStoreWithFocus, {combineReducerWithFocus} from 'focus-graph/store/create-store';
import rootReducer from '../reducer';
import {amoutToUpperCaseMiddleware, errorFieldMiddleware, ownActiondMiddleware} from '../../src/middleware/user-middleware';
import DevTools from '../containers/dev-tools'
import customReducer from '../reducer/custom-reducer';
import i18next from 'i18next'
import messageReducer from 'focus-application/messages/messages-reducer';
import headerReducer from 'focus-application/header/header-reducer';
import confirmReducer from 'focus-application/confirm/confirm-reducer';
import fetchReducer from 'focus-application/fetch/fetch-reducer';
import sessionReducer from 'focus-application/session/session-reducer';


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
      fetch:fetchReducer,
      session:sessionReducer
    },
    [errorFieldMiddleware, amoutToUpperCaseMiddleware,ownActiondMiddleware],
    [DevTools.instrument()],
    props => { return i18next.t(props)}
  );

  lastCreatedStore = store;
  return store;
};
