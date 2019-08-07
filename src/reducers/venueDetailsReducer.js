export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_DETAILS':
      console.log('inside case in venueDetails reducer, payload',action.payload);
      return action.payload;
    default:
      return state;
  }
}
