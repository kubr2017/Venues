import { getGoogleObject } from '../api/GoogleConnection';
import FourSquareConnection from '../api/FourSquareConnection';


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

export const getVenues = (parameters) => async dispatch => {
  console.log('in getVenues params:',parameters);
  const response = await FourSquareConnection.get('/search?' + new URLSearchParams(parameters))

  dispatch({ type: 'FETCH_VENUES', payload: response});
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
