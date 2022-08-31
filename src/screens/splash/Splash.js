import { View, Text } from 'react-native'
import React, { useEffect, useContext } from 'react'
import Styles from './Style'
import Appcontext from '../../common/Constants'

const Splash = ({ navigation }) => {
  const { flatlist, setflatlist } = useContext(Appcontext)

  useEffect(() => {
    fetch('https://api.xentice.com/api/postadSelect')
      .then((response) => response.json())
      .then((data) => setflatlist(data))
    // .then(navigation.navigate("Home"));
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