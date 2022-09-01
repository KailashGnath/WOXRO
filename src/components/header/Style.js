import { StyleSheet } from "react-native";
import { DevHeight, DevWidth } from "@assets/Device.js"
import Fonts from "../../assets/Fonts"

const Style = StyleSheet.create({
  _main: {
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center"
  },
  _leftBox: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  _text: {
    fontSize: 33,
    color: "#105aff",
    fontFamily: Fonts.medium
  },
  _rightView: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "grey",
    overflow: "hidden"
  },
  _image: {
    height: "100%",
    width: "100%"
  },
  _icon: {
    marginRight: 20
  }
})

export default Style