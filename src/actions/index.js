import { getGoogleObject } from '../api/GoogleConnection';


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
