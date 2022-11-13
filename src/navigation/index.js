import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";
import RecordsNavigator from "./records";
import AuthNavigator from "./auth";


const AppNavigation = () => {
  const userId = useSelector((state) => state.auth.auth?.userId);
  const state = useSelector((state) => state.auth);
  console.log('userID from navigation', userId)
  return (
    <NavigationContainer>
      {userId ? <RecordsNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigation;