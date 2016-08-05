import createStoreWithFocus, {combineReducerWithFocus} from 'focus-graph/store/create-store';
import rootReducer from '../reducer';
import {amoutToUpperCaseMiddleware, errorFieldMiddleware, ownActiondMiddleware} from '../../src/middleware/user-middleware';
import DevTools from '../containers/dev-tools'
import customReducer from '../reducer/custom-reducer';
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
    {dataset: rootReducer, customData: customReducer },
    [errorFieldMiddleware, amoutToUpperCaseMiddleware,ownActiondMiddleware],
    [DevTools.instrument()]
  );

  lastCreatedStore = store;
  return store;
};
