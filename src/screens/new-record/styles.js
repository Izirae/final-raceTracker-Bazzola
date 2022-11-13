import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    color: colors.text,
    
  },
  input: {
    borderBottomColor: colors.text,
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 5,
    color: colors.text,
    fontSize: 20,
    fontFamily: "Play",
  },
});
