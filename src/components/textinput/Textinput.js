import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Styles from './Style'

const Textinput = ({ title = "Textinput", placeholder = "Woxro office" }) => {
  return (
    <View style={Styles._main}>
      <Text style={Styles._titleText}>{title}</Text>
      <TextInput style={Styles._inputField} placeholder={placeholder} placeholderTextColor={"#000"} />
    </View>
  )
}

export default Textinput