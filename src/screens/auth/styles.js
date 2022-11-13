import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  containerKeyboard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontSize: 28,
    fontFamily: "PlayBold",
    textAlign: "center",
    padding: 5,
    marginBottom: 10,    
    color: colors.text
  },
  logo:{
    width: 75,
    height: 75,
    marginBottom: 10,
  },
  container: {
    width: "80%",
    maxWidth: 400,
    padding: 15,
    margin: 15,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    height: 300,
  },
  title: {
    fontSize: 18,
    fontFamily: "PlayBold",
    marginVertical: 5,
    textAlign: "center",
    borderBottomWidth: 1,
    padding: 5,
    width: "50%"
  },
  input: {
    fontFamily: "Play",
  },
  promptButton: {
    backgroundColor: "#ffffff",
    borderColor: colors.primary,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  prompt: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  promptMessage: {
    fontSize: 14,
    color: colors.black,
    fontFamily: "Play",
  },
});
