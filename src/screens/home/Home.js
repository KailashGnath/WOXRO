import { View, Text } from 'react-native'
import React from 'react'
import Styles from './Style'

const Home = () => {
  return (
    <View style={Styles._main}>
      {/* header */}
      <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

        </View>
      </View>
      {/* header */}
      <Text style={Styles._text}>Home</Text>
      <Text style={{ fontSize: 20 }}>Home</Text>
    </View>
  )
}

export default Home