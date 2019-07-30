export default (state = [],action) => {
  switch (action.type) {
    case 'GOOGLE_OBJECT':
      console.log('inside case in reducer, payload:', action.payload);
      return action.payload;
    default:
      return state;
  }
}
