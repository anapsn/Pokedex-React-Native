import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7776A",
  },

  header: {
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingTop: 50,
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  info: {
    color: "#FFFFFF",
    paddingHorizontal: 25,
    paddingVertical: 25,
    fontSize: 18,
  },

  inputContainer: {
    backgroundColor: "#F98E80",
    marginHorizontal: 25,
    borderRadius: 8,
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
    marginBottom: 10,
  },

  input: {
    flex: 1,
    color: "#FFFFFF",
  },

  Content: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    padding: 15,
  },

  footer: {
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    borderColor: "#F2F2F2",
    padding: 15,
  },

  buttonfooter: {
    backgroundColor: "#F7776A",
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  textfooter: {
    color: "#ffffff",
    fontWeight: "bold",
  },

  card: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    alignItems: "center",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#F2F2F2",
  },

  cardinfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  contentText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
  },

  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },

  modalContent: {
    height: height * 0.8,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
});