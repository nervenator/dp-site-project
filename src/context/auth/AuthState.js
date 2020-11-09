import React, { useReducer } from 'react';
import authContext from './AuthContext';
import authReducer from './authReducer';
import { projectAuth } from '../../firebase/config';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS } from '../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Login User
  const login = async (email, password) => {
    try {
      const userCred = await projectAuth.signInWithEmailAndPassword(
        email,
        password
      );
      const token = await userCred.user.getIdToken();
      dispatch({
        type: LOGIN_SUCCESS,
        payload: token,
      });
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.message,
      });
    }
  };
  // Logout
  const logout = () => dispatch({ type: LOGOUT });

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <authContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        login,
        logout,
        clearErrors,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
