const initialState = {
  login: JSON.parse(localStorage.getItem("auth")),
  spaceName: localStorage.getItem("spaceName")
    ? localStorage.getItem("spaceName")
    : null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("auth", true);
      localStorage.setItem("spaceName", action.payload.space);
      return {
        ...state,
        login: action.payload.flag,
        spaceName: action.payload.space,
      };
    case "LOGOUT":
      localStorage.setItem("auth", false);
      localStorage.setItem("spaceName", null);
      return {
        ...state,
        login: action.payload.flag,
        spaceName: action.payload.space,
      };
    default:
      return state;
  }
};

export default auth;
