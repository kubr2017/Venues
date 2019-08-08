import { combineReducers } from 'redux';
import googleObjectReducer from './googleObjectReducer';
import areaReducer from './areaReducer';
import venuesReducer from './venuesReducer';
import venuesDetailsReducer from './venuesDetailsReducer';

export default combineReducers({
  googleObject: googleObjectReducer,
  areaObject: areaReducer,
  venuesReducer: venuesReducer,
  venuesDetails: venuesDetailsReducer
});
