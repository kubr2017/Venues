import { combineReducers } from 'redux';
import googleObjectReducer from './googleObjectReducer';
import areaReducer from './areaReducer';

export default combineReducers({
  googleObject: googleObjectReducer,
  areaObject: areaReducer
});
