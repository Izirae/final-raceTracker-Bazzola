import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "10%",
    marginTop: "5%",
    marginBottom: "5%"
    },
  preview: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.secondary,
    borderWidth: 1,
    marginRight: "5%",
  },

  text:{
    color: colors.text,
  },
});
