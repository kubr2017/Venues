import { getGoogleObject } from '../api/GoogleConnection';


export const getGoogle = () => async dispatch => {
  const response = await getGoogleObject;
  dispatch({type: 'GoogleObject', payload: response});
};
