export const loginactioncreactor = (flag,space) => ({
  type: "LOGIN",
  payload: {flag,space}
});

export const logoutactioncreactor = (flag,space) => ({
  type: "LOGOUT",
  payload: {flag,space}
});