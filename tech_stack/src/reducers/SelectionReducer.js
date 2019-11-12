const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case "select_library":
      return action.payload;
    default:
      return state;
  }
};
