import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Styles from './Style'
import Icon from 'react-native-vector-icons/SimpleLineIcons';


const Selector = () => {
  return (
    <View style={Styles._main}>
      <View style={Styles._buttonView}>
        <TouchableOpacity style={Styles._proprtyButton}>
          <Text style={Styles._propertytext}>Property</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles._servicesButton}>
          <Text style={Styles._servicestext}>Services</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles._flatListView}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[{}, {}, {}, {}]}
          // keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={Styles._card}>
              <Icon name='layers' size={45} color={"#00000D"} />
              <Text style={Styles._text}>Industrial land</Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}

export default Selector