import { combineReducers } from 'redux';
import googleObjectReducer from './googleObjectReducer';
import areaReducer from './areaReducer';
import venuesReducer from './venuesReducer';
import venueDetailsReducer from './venueDetailsReducer';

export default combineReducers({
  googleObject: googleObjectReducer,
  areaObject: areaReducer,
  venuesReducer: venuesReducer,
  venueDetails: venueDetailsReducer
});
