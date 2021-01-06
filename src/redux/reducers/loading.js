const initialState = {
  loading: true,
};

const setloaded = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADED":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default setloaded;
