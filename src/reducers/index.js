import { combineReducers } from 'redux';
import googleObjectReducer from './googleObjectReducer';

export default combineReducers({
  googleObject: googleObjectReducer
});
