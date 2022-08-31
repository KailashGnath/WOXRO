import { StyleSheet } from "react-native";
import { DevHeight, DevWidth } from "@assets/Device.js"
import Fonts from "../../../assets/Fonts"

const Styles = StyleSheet.create({
  _main: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  _buttonView: {
    flexDirection: "row"
  },
  _proprtyButton: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
    marginRight: 10
  },
  _propertytext: {
    color: "#000",
    fontFamily: Fonts.bold,
    fontWeight: "bold"
  },
  _servicesButton: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderColor: "lightgrey",
  },
  _servicestext: {
    color: "grey",
    fontFamily: Fonts.bold,
    fontWeight: "bold"
  },
  _flatListView: {
    // backgroundColor: "red"
    paddingVertical: 10
  },
  _card: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    width: 80,
    marginRight: 10,
    borderRadius: 10
    // flex: 1
    // height: 100
  },
  _text: {
    textAlign: "center",
    marginTop: 5,
    fontFamily: Fonts.semi_bold,
    fontSize: 12,
    color: "#565656"
  }

})

export default Styles;