import IonicIcons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Platform, TouchableOpacity, Alert } from "react-native";
import { LogOut } from "../store/auth.action";
import { useDispatch } from "react-redux";
import { MapsScreen, NewRecordScreen, RecordDetailScreen, RecordListScreen } from "../screens/index";
import colors from "../utils/colors";

const Stack = createNativeStackNavigator();

const RecordsNavigator = () => {

  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(LogOut());
  };

  const logOutAlert = () => {
    Alert.alert(
      "Logging out",
      "¿Desea cerrar sesión?",
      [
        {
          text: "Sí",
          onPress: onLogOut,
          style: "cancel"
        },
        {
          text: "No",
        }

      ],
      { cancelable: false }
    );
  }

  return (
    <Stack.Navigator
      initialRouteName="Record"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? colors.secondary : colors.primary,
        },
        contentStyle: { backgroundColor: colors.background },
        headerTintColor: colors.black,
        headerTitleStyle: {
          fontFamily: "PlayBold",

        },
      }}>
      <Stack.Screen
        name="Records"
        component={RecordListScreen}
        options={({ navigation }) => ({
          title: "Records",
          headerTitleAlign: "center",
          headerRight: () => (
            <>
              <TouchableOpacity onPress={() => navigation.navigate("NewRecord")}>
                <IonicIcons name="add-circle-outline" size={25} color={colors.black} />
              </TouchableOpacity>
            </>
          ),
          headerLeft: () => (
            <>
              <TouchableOpacity onPress={logOutAlert}>
                <IonicIcons name="log-out-outline" size={25} color={colors.black} />
              </TouchableOpacity>
            </>
          ), 
        })}
      />
      <Stack.Screen
        name="RecordDetail"
        component={RecordDetailScreen}
        options={{ title: "Detalles del registro" }}
      />
      <Stack.Screen
        name="NewRecord"
        component={NewRecordScreen}
        options={{ title: "Nuevo registro" }}
      />
      <Stack.Screen name="Maps" component={MapsScreen} options={{ title: "Mapa" }} />
    </Stack.Navigator>
  );
};

export default RecordsNavigator;