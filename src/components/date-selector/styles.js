import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({

  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "5%",
    marginTop: "5%"
  },

  dateText:{
    color: colors.text,
    fontFamily: "PlayBold",
    fontSize: 20,
    marginTop: "2%"
  }

});