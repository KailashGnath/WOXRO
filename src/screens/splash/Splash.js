import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Styles from './Style'

const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home")
    }, 3000);

  }, [])

  return (
    <View style={Styles._main}>
      <Text style={Styles._text}>Splash</Text>
    </View>
  )
}

export default Splash