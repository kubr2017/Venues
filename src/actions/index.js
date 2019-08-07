import { getGoogleObject } from '../api/GoogleConnection';
import FourSquareConnection from '../api/FourSquareConnection';
import {FourSquareClient_id} from '../api/keys';
import {FourSquareClient_secret} from '../api/keys';


export const getGoogle = () => async dispatch => {
  console.log('inside getGoogle action, async function');
  const response = await getGoogleObject();
  console.log('inside action, response:',response);
  dispatch({type: 'GOOGLE_OBJECT', payload: response});
};

export const getLocation = (area) => {
  console.log('inside getLocation action',area);
  return {
    type:'AREA_OBJECT',
    payload: area
  };
};

export const getVenuesDetails = (parameters) => async (dispatch,getState) => {
  console.log('in getVenueDetails');
  await dispatch(getVenues(parameters));

  getState().venuesReducer.data.response.venues.map((el)=>(el.id)).forEach(async function(id){ await dispatch(getDetails(id))})
}

export const getVenues = () => async dispatch => {
  console.log('in getVenues:');
  const parameters = {
    client_id:FourSquareClient_id,
    client_secret:FourSquareClient_secret,
    ll:'40.6947591,-73.9950086',
    query:'restaurant,pizza',
    radius:500,
    limit:2,
    v:'20182507'
  }

  const response = await FourSquareConnection.get('/search?' + new URLSearchParams(parameters))

  dispatch({ type: 'FETCH_VENUES', payload: response});
};

export const getDetails = (Id) => async dispatch => {
  console.log('in getDetails params:');
  // const Id='4aad3536f964a520035f20e3'
  const parameters = {
    client_id:FourSquareClient_id,
    client_secret:FourSquareClient_secret,
    v:'20182507'
  }
  const response = await FourSquareConnection.get('/'+Id+'?' + new URLSearchParams(parameters))

  dispatch({ type: 'FETCH_DETAILS', payload: response});
};

// const endPoint = 'https://api.foursquare.com/v2/venues/search?'
// const parameters = {
//   client_id:FourSquareClient_id,
//   client_secret:FourSquareClient_secret,
//   ll:location.lat+','+location.lng,
//   query:'restaurant,pizza',
//   radius:500,
//   limit:15,
//   v:'20182507'
// }
// console.log('location:',location);
// axios.get(endPoint+new URLSearchParams(parameters))
