// const DEFAULT_STATE = {user: {name: 'Pierre', date: new Date().getTime(), bababa: 'dddididid'}};
// const rootReducer = (state = DEFAULT_STATE) => state

import {combineReducers} from 'redux';
import userReducer from './user-reducer';




export default combineReducers({
    user: userReducer
  });