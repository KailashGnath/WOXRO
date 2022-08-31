import { StyleSheet } from "react-native";
import { DevHeight, DevWidth } from "@assets/Device.js"
import Fonts from "../../assets/Fonts"

const Styles = StyleSheet.create({
  _main: {
    width: "90%",
    borderWidth: 1,
    borderColor: "lightgrey",
    paddingHorizontal: 20,
    paddingVertical: 0,
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  _icon: {
    marginRight: 10
  },
  _text: {
    color: "grey",
    fontFamily: Fonts.light
  },
  _search: {
    width: "100%"
  }
})

export default Styles