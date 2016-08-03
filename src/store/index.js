import builder from 'focus-redux/store/builder';
import rootReducer from '../reducer';
import {amoutToUpperCaseMiddleware, errorFieldMiddleware, ownActiondMiddleware} from '../../src/middleware/user-middleware';
import DevTools from '../containers/dev-tools'


export default function configureStore(initialState){
  const store = builder(
    rootReducer,
    [errorFieldMiddleware, amoutToUpperCaseMiddleware,ownActiondMiddleware],
    [DevTools.instrument()]
  );
  /*if(module.hot){
    // Enable Webpack hot module replacement for reducers
   module.hot.accept('../reducer', () => {
     const nextRootReducer = require('../reducer');
     store.replaceReducer(nextRootReducer)
   })
 }*/
  return store;
};
