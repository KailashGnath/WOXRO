import { View, Text, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import Styles from './Style'
import Icon from 'react-native-vector-icons/Ionicons';

const Office = (data) => {
  const dat = JSON.parse(data.data[0]?.images)

  const Card = ({ img }) => {
    // console.log("inside final image", img[0])
    return (
      <View style={Styles._card}>
        <View style={Styles._like}>
          <Icon name='heart' size={15} color={"red"} />
        </View>
        <Image source={{ uri: img[0] }} resizeMode={"cover"} style={{ height: 100, width: "100%" }} />
        <View style={Styles._info}>
          <Text style={Styles._officeName}>Woxro office</Text>
          <Text style={Styles._amount}>Rs 2500/Hr</Text>
        </View>
        <View style={{ flexDirection: "row", paddingVertical: 5 }}>
          <Icon name='location' color={"green"} size={20} />
          <Text style={Styles._locationText}>Thrissur</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={Styles._main}>
      <View style={Styles._titleView}>
        <Text style={Styles._officetext}>Commercial Office</Text>
        <Text>see all</Text>
      </View>
      <View style={Styles._flatListView}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          // data={[{}, {}, {}, {}]}
          keyExtractor={item => item.id}
          data={data.data}
          renderItem={({ item }) => (
            <Card img={JSON.parse(item.images)} />
          )}
        />
      </View>
    </View>
  )
}

export default Office