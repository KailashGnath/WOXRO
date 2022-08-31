import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Style from './Style';

const Header = () => {
  return (
    <View style={Style._main}>
      <View style={Style._leftBox}>
        <Icon name='reorder-three-outline' size={50} style={Style._icon} color={"blue"} />
        <Text style={Style._text}>xentice</Text>
      </View>
      <View style={Style._rightView}>
        <Image source={require('@assets/images/default.webp')} resizeMode="center" style={Style._image} />
      </View>
    </View>
  )
}

export default Header