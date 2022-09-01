import { StyleSheet } from "react-native";
import { DevHeight, DevWidth } from "@assets/Device.js"
import Fonts from "../../assets/Fonts"

const Styles = StyleSheet.create({
  _main: {
    width: "90%",
    height: 43,
    borderWidth: 1,
    borderColor: "#808080",
    marginVertical: 10,
    alignSelf: "center",
    borderRadius: 5
  },
  _titleText: {
    position: "absolute",
    top: -10,
    left: 15,
    paddingHorizontal: 5,
    backgroundColor: "white",
    fontFamily: Fonts.bold,
    fontWeight: "bold",
    color: "#808080"
  },
  _inputField: {
    width: "100%",
    height: "100%",
    paddingLeft: 10
    // backgroundColor: "red"
  }
})

export default Styles