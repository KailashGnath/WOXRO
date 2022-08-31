import { StyleSheet } from "react-native";
import { DevHeight, DevWidth } from "@assets/Device.js"
import Fonts from "../../../assets/Fonts"

const Styles = StyleSheet.create({
  _main: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "100%"
    // backgroundColor: "red"
  },
  _like: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 5,
    right: 5,
    height: 25,
    width: 25,
    zIndex: 9999,
    borderRadius: 15,
    backgroundColor: "darkgrey"
  },
  _titleView: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10
  },
  _officetext: {
    fontFamily: Fonts.bold,
    fontWeight: "bold",
    color: "#000"
  },
  _flatListView: {
    // backgroundColor: "pink",
    paddingLeft: 10,
    width: "100%"
  },
  _card: {
    // height: 150,
    width: DevWidth / 2.5,
    borderWidth: 1,
    borderColor: "lightgrey",
    // backgroundColor: "white",
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden"
  },
  _info: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 2,
    // backgroundColor: "red"
    // height: "30%",

  },
  _officeName: {
    fontSize: 13,
    fontFamily: Fonts.bold,
    color: "#000"
  },
  _amount: {
    fontSize: 11,
    paddingTop: 2,
    color: "red",
    fontWeight: "bold",
    // fontFamily: Fonts.bold
  },
  _locationText: {
    fontSize: 12,
    marginLeft: 5,
    fontWeight: "bold",
    color: "black"
  },
  // _heart: {

  // }
})

export default Styles;