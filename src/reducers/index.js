import { combineReducers } from 'redux';
import googleObjectReducer from './googleObjectReducer';
import areaNameReducer from './areaNameReducer';
import areaLocationReducer from './areaLocationReducer';

export default combineReducers({
  googleObject: googleObjectReducer,
  areaName: areaNameReducer,
  areaLocation: areaLocationReducer
});
