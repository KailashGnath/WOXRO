import { StyleSheet } from "react-native";
import { DevHeight, DevWidth } from "@assets/Device.js"
import Fonts from "../../assets/Fonts"

const Styles = StyleSheet.create({
  _main: {
    flex: 1,
    fontFamily: Fonts.bold,
    backgroundColor: "#fff"
  },
  _text: {
    fontFamily: Fonts.bold,
    fontSize: 20
  }
})

export default Styles