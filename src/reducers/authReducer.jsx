// authReducer.js

export const initialState = {
  isAuthenticated: false,
  isLoading: false,
  message: false,
  user: "",
  role: "",
  picture: "",
  error: "",
  token: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        error: "",
        isLoading: true,
        isAuthenticated: false,
      };
    case "SUCCESS":
      return {
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
        role: action.payload.role,
        token: action.payload.token,
        picture: action.payload.picture,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: "",
        role: "",
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
        isAuthenticated: false,
        message: action.payload.message,
        user: "",
        role: "",
      };
    default:
      return state;
  }
};
