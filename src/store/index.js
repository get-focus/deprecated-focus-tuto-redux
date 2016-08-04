import createStoreWithFocus, {combineReducerWithFocus} from 'focus-redux/store/builder';
import rootReducer from '../reducer';
import {amoutToUpperCaseMiddleware, errorFieldMiddleware, ownActiondMiddleware} from '../../src/middleware/user-middleware';
import DevTools from '../containers/dev-tools'

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
  const store = createStoreWithFocus(
    rootReducer,
    [errorFieldMiddleware, amoutToUpperCaseMiddleware,ownActiondMiddleware],
    [DevTools.instrument()]
  );

  lastCreatedStore = store;
  return store;
};
