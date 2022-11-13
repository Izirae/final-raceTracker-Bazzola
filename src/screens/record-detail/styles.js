import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.text,
    textAlign: "center",
    fontFamily: "PlayBold",
    marginTop: "2%",
    fontSize: 25,
  },
  subtitle: {
    color: colors.text,
    textAlign: "center",
    fontFamily: "Play",
    marginBottom: "4%",
    fontSize: 15,
  },
  image: {
    height: "40%",
    minHeight: 300,
    width: "100%",
  },
  location: {
    margin: 20,
    width: "90%",
    maxWidth: 350,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: colors.primary,
    textAlign: "center",
  },
  map: {
    height: 150,
  },
  text:{
    color: colors.text
  },
  notFound: {
    textAlign: "center",
    marginTop: 50,
    fontFamily: "PlayBold",
    color: colors.text,
  },
});
