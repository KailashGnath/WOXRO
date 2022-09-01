import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Style from './Style';

const Header = ({ navigation, to }) => {
  return (
    <View style={Style._main}>
      <View style={Style._leftBox}>
        <Icon name='reorder-three-outline' size={50} style={Style._icon} color={"darkblue"} />
        <Text style={Style._text}>xentice</Text>
      </View>
      <TouchableOpacity style={Style._rightView} onPress={() => { navigation.navigate(to) }} >
        <Image source={require('@assets/images/default.webp')} resizeMode="center" style={Style._image} />
      </TouchableOpacity>
    </View>
  )
}

export default Header