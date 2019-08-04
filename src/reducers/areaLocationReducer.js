export default (state = {}, action) => {
  switch (action.type) {
    case 'AREA_OBJECT':
      console.log('in condition of areaObject reducer', action.payload.location);
      return action.payload.location;
    default:
      return state;
  }
}
