import axios from 'axios';

export const login = (credentials) => {
  return async (dispatch) => {
    dispatch({ type: 'LOGIN_REQUEST' });
    try {
      const response = await axios.post('/api/auth/login', credentials);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
      // Store the token or redirect as needed
    } catch (error) {
      console.error('Login error:', error);
      // Handle errors (dispatch error actions if needed)
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: 'LOGOUT' });
    // Optionally remove token from local storage or other cleanup
  };
};
