const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          loading: false,
        };
      case 'LOGOUT':
        return initialState;
      case 'LOGIN_REQUEST':
        return {
          ...state,
          loading: true,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  