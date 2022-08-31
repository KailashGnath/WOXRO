import { View, TextInput } from 'react-native'
import React from 'react'
import Styles from './Style'
import Icon from 'react-native-vector-icons/Fontisto';

const Search = () => {
  return (
    <View style={Styles._main}>
      <Icon name='search' size={20} style={Styles._icon} />
      <TextInput style={Styles._search} placeholder="Search" placeholderTextColor={"grey"} >
      </TextInput>
    </View>
  )
}

export default Search