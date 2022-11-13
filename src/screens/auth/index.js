import React, { useState, useReducer } from "react";
import { useDispatch } from "react-redux";
import { View, Text, TouchableOpacity, Button, KeyboardAvoidingView, Image, StatusBar } from "react-native";
import Input from '../../components/input/index';
import colors from "../../utils/colors";
import { styles } from "./styles";
import { signIn, signUp } from "../../store/auth.action";
import { UPDATED_FORM, onInputChange } from "../../utils/forms";
import logo from "../../../assets/logo.png";

const initialState = {
  email: { value: "", error: "", touched: false, hasError: true },
  password: { value: "", error: "", touched: false, hasError: true },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATED_FORM:
      const { name, value, hasError, error, touched, isFormValid } =
        action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
    default:
      return state;
  }
};

const Auth = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);

  const title = isLogin ? "Login" : "Register";
  const message = isLogin ? "Registrarse" : "Volver al login";
  const messageAction = isLogin ? "Login" : "Register";

  const onHandleSubmit = () => {
    dispatch(isLogin ? signIn(formState.email.value, formState.password.value) : signUp(formState.email.value, formState.password.value));
  };
  const onHandleChange = (value, type) => {
    onInputChange(type, value, dispatchFormState, formState);
  };

  return (
    <KeyboardAvoidingView style={styles.containerKeyboard} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <StatusBar/>
      <Text style={styles.welcome}>Bienvenido a Race Tracker</Text>
      <Image style={styles.logo} source={logo}/>
      <View style={styles.container}>
        <View style= {{alignItems: "center"}}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Input
          style={styles.input}
          placeholder="Email"
          value={formState.email.value}
          placeholderTextColor={colors.secondary}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => onHandleChange(text, "email")}
          hasError={formState.email.hasError}
          error={formState.email.error}
          touched={formState.email.touched}
        />
        <Input
          style={styles.input}
          placeholderTextColor={colors.secondary}
          value={formState.password.value}
          placeholder="Contraseña"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => onHandleChange(text, "password")}
          hasError={formState.password.hasError}
          error={formState.password.error}
          touched={formState.password.touched}
        />
        <Button
          title={messageAction}
          color={colors.primary}
          onPress={onHandleSubmit}
          disabled={!formState.isFormValid}
        />
        <View style={styles.prompt}>
          <TouchableOpacity
            style={styles.promptButton}
            onPress={() => setIsLogin(!isLogin)}
          >
            <Text style={styles.promptMessage}>{message}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Auth;
