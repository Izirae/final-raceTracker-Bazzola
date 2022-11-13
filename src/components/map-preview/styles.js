import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  mapImage: {
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  notFound: {
    textAlign: "center",
    marginTop: 50,
    fontFamily: "PlayBold",
    color: colors.text,
  },
});
