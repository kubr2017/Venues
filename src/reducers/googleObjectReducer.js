export default (state = [],action) => {
  switch (action.type) {
    case 'GoogleObject':
      return action.payload;
    default:
      return state;
  }
}
