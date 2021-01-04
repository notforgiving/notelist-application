const initialState = {
  login: null,
};

if(localStorage.getItem('auth')){
  initialState.login = true
}

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
