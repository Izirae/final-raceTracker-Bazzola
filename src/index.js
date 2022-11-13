import React from "react";
import { Provider } from "react-redux";
import AppNavigator from "./navigation/index";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { init } from "./db";
import { store } from "./store";

export default function App() {

  const [loaded] = useFonts({
    Play: require("../assets/fonts/Play-Regular.ttf"),
    PlayBold: require("../assets/fonts/Play-Bold.ttf"),
  });

  init()
    .then(() => {
      console.log("DB OK");
    })
    .catch((err) => {
      console.log("DB failed");
      console.log(err);
    });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <Provider  store={store}>
      <AppNavigator />
    </Provider>
  );
}
