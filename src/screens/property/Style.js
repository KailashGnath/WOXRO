import { StyleSheet } from "react-native";
import { DevHeight, DevWidth } from "@assets/Device.js"
import Fonts from "../../assets/Fonts"

const Styles = StyleSheet.create({
  _main: {
    flex: 1,
    backgroundColor: "#fff"
  },
  _transaction_type: {
    padding: 20,
    width: "100%",
  },
  _singleView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center"
  },
  _titletext: {
    fontFamily: Fonts.semi_bold,
    fontWeight: "600",
    marginBottom: 15
  },
  _progressbar: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    backgroundColor: "lightgray"
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
  },
  _flatListView: {
    // backgroundColor: "red"
    paddingVertical: 10,
    paddingHorizontal: 20
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

export default Styles