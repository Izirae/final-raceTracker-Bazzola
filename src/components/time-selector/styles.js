import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({

  input:{
    borderBottomColor: colors.text,
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 5,
    color: colors.text,
    fontSize: 15,
    fontFamily: "PlayBold",
  },

  title: {
    fontSize: 15,
    marginBottom: 5,
    color: colors.text,
  },
});