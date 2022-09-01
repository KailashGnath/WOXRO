import { StyleSheet } from "react-native";
import { DevHeight, DevWidth } from "@assets/Device.js"
import Fonts from "../../assets/Fonts"

const Styles = StyleSheet.create({
  _main: {
    flex: 1
  },
  _progressbar: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    backgroundColor: "#D3D3D3"
  },
  _progressText: {
    height: 50,
    justifyContent: "center",
    backgroundColor: "red"
  },
  _circleView: {
    padding: 5,
    marginRight: 10
  },
  _progressText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "#000"
  },
  _property: {
    fontWeight: "bold",
    color: "#000000"
  }
})

export default Styles