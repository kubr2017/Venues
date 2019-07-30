import { getGoogleObject } from '../api/GoogleConnection';


export const getGoogle = () => async dispatch => {
  console.log('inside action, async function');
  const response = await getGoogleObject();
  console.log('inside action, response:',response);
  dispatch({type: 'GOOGLE_OBJECT', payload: response});
};
