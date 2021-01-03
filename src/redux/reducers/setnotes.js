const initialState = {
  items: [],
};

const setnotes = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NOTES":
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default setnotes;
