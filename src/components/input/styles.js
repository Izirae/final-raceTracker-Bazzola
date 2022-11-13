import { StyleSheet } from "react-native";
import colors from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
  
    borderBottomColor: colors.tertiary,
    borderBottomWidth: 1,
    fontFamily: "Play",
    marginBottom: 5,
    marginTop: 10
  },
  message: {
    marginVertical: 5,
  },
  helperText: {
    fontSize: 12,
    fontFamily: "PlayBold",
    color: "#ff0000",
  },
});
