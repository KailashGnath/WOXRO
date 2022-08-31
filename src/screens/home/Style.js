import { StyleSheet } from "react-native";
import { DevHeight, DevWidth } from "@assets/Device.js"
import Fonts from "../../assets/Fonts"

const Styles = StyleSheet.create({
  _main: {
    flex: 1,
    backgroundColor: "skyblue",
    fontFamily: Fonts.bold
  },
  _text: {
    fontFamily: Fonts.bold,
    fontSize: 20
  }
})

export default Styles