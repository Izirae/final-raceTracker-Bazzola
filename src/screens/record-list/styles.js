import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    fontFamily: "Play",
  },
  empty: {
    fontSize: 18,
    textAlign: "center",
    color: colors.text,
    fontFamily: "Play",
  },
});