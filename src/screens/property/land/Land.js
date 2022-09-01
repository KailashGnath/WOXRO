import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Styles from './Style'
import Icon from 'react-native-vector-icons/SimpleLineIcons';


const Land = ({ single }) => {
  const [landselected, setlandselected] = useState()

  return (
    <View style={Styles._flatListView}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={single == true ? [{ id: 0 }] : [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]}
        // keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={[Styles._card, { backgroundColor: landselected == item.id ? "darkblue" : "white" }]} activeOpacity={0.7} onPress={() => setlandselected(item.id)}>
            <Icon name='layers' size={45} color={landselected == item.id ? "#fff" : "#00000D"} />
            <Text style={[Styles._text, { color: landselected == item.id ? "#fff" : "#565656" }]}>Industrial land</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Land