const initialState = {
  login: localStorage.getItem('auth'),
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem('auth',true)
      return {
        ...state,
        login: action.payload,
      };
    case "LOGOUT":
      localStorage.setItem('auth',false)
      return {
        ...state,
        login: action.payload,
      };
    default:
      return state;
  }
};

export default auth;
