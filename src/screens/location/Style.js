import { StyleSheet } from "react-native";
import { DevHeight, DevWidth } from "@assets/Device.js"
import Fonts from "../../assets/Fonts"

const Styles = StyleSheet.create({
  _main: {
    flex: 1,
    backgroundColor: "#fff"
  },
  _disabled: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 5,
    backgroundColor: "#909090"
  },
  _map: {
    height: "100%",
    width: "100%"
  },
  _disabledText: {
    fontWeight: "800",
    color: "#505050"
  },
  _mapView: {
    height: 250,
    width: "90%",
    alignSelf: "center",
    // backgroundColor: "pink"
  },
  _buttonOptions: {
    width: "90%",
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    alignSelf: "center"
  },
  _backButton: {
    paddingVertical: 10,
    borderRadius: 5,
    width: "47%",
    borderWidth: 1,
    borderColor: "darkblue",
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },
  _continueButton: {
    paddingVertical: 10,
    borderRadius: 5,
    width: "47%",
    borderWidth: 1,
    borderColor: "darkblue",
    backgroundColor: "darkblue",
    justifyContent: "center",
    alignItems: "center"
  },
  __backText: {
    fontSize: 15,
    fontFamily: Fonts.bold,
    fontWeight: "bold",
    color: "darkblue"
  },
  __continueText: {
    fontSize: 15,
    fontFamily: Fonts.bold,
    fontWeight: "bold",
    color: "white"
  }
})

export default Styles