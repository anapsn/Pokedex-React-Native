import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 50,
    padding: 25,
  },

  header: {
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
    borderRadius: 8,
  },

  namePokemon: {
    fontSize: 25,
    marginVertical: 20,
    fontWeight: "bold",
  },

  infoPokemon: {
    flexDirection: "row",
    justifyContent: "space-between", // 🔥 substitui o gap
  },

  info: {
    flex: 1, // 🔥 faz os cards dividirem espaço igual
    padding: 25,
    borderRadius: 8,
    borderColor: "#F2F2F2",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10, // 🔥 simula gap
  },

  textInfo1: {
    fontSize: 20,
    fontWeight: "bold",
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },

  footerCardContainer: {
    width: 88,
    height: 88,
    alignItems: "center",
  },

  footerCard: {
    backgroundColor: "#F6F6F6",
    padding: 15,
    borderWidth: 1,
    borderColor: "#F2F2F2",
    borderRadius: 8,
    marginBottom: 5,
  },
});