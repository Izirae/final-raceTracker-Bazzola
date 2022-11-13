import { URL_AUTH_SIGN_UP, URL_AUTH_SIGN_IN } from "../utils/firebase/index";
import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";

export const authTypes = {
    SIGN_UP: "SIGN_UP",
    SIGN_IN: "SIGN_IN",
    LOG_OUT: "LOG_OUT"
};

const { SIGN_UP, SIGN_IN, LOG_OUT } = authTypes;

const initialState = {
  auth:{
    token: null,
    userId: null,
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      state.auth = action.payload;
    },
    log: (state, action) => {
      state.auth = action.payload;
    },
    
    logOut: (state, action) => {
      state.auth = action.payload;
    },
  },

});

export const { register, log, logOut } = authSlice.actions;

export const signUp = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_UP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        const errorID = errorResponse.error.message;

        let message = 'No se ha podido registrar'

        if(errorID === 'EMAIL_EXISTS') message = 'El email ya está registrado'
        Alert.alert(message)
        throw new Error(message)
      }

      const data = await response.json();
      //console.log(data)
      dispatch(register({ type: SIGN_UP, token: data.idToken, userId: data.localId}));
    } catch (error) {
      console.log(error);
    }
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_IN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        const errorID = errorResponse.error.message;

        let message = 'No se ha podido registrar'

        if(errorID === 'INVALID_PASSWORD') message = 'La contraseña ingresada no es correcta'
        if(errorID === 'EMAIL_NOT_FOUND') message = 'El email ingresado no es correcto'
        Alert.alert(message)
        throw new Error(message)
      }

      const data = await response.json();

      dispatch(log({ type: SIGN_IN, token: data.idToken, userId: data.localId}));
    } catch (error) {
      console.log(error);

    }
  };
};

export const LogOut = () =>{
  return async (dispatch) => {
    try {
      dispatch(logOut({ type: LOG_OUT, token: null, userId: null}));
    } 
    catch (error) {
      console.log(error);
    }
  }
};

export default authSlice.reducer;
