export default (state = '', action) => {
  switch (action.type) {
    case 'AREA_OBJECT':
      console.log(('inside case in areaName reducer, payload',action.payload.name));
      return action.payload.name;
    default:
      return state;
  }
}
