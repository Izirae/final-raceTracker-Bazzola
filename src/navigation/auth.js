import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Auth from "../screens/auth"
import colors from "../utils/colors";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Auth"
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: colors.background },
            }}
        >
            <Stack.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
    );
};

export default AuthNavigator;