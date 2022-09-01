import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Styles from './Style'
import Header from '@components/header/Header'
import ProgressBar from '@components/progressbar/ProgressBar'
import Spacer from '@components/spacer/Spacer'
import Textinput from "@components/textinput/Textinput"
import MapView, { Marker } from 'react-native-maps';

const Location = () => {
  const marker = {
    lat: 9.9312,
    lng: 76.2673,
    title: "",
    description: "Home"
  }
  return (
    <View style={Styles._main}>
      <ScrollView>
        <Header />
        <ProgressBar progress={.75} fraction={"3/4"} title={"Location"} />
        <Spacer height={20} />
        <TouchableOpacity style={Styles._disabled}>
          <Text style={Styles._disabledText}>India</Text>
        </TouchableOpacity>
        <Spacer height={15} />
        <Textinput title={"City"} placeholder={"Cochi"} />
        <Spacer height={10} />
        <Textinput title={"Locality"} placeholder={"Cochi"} />
        <Spacer height={10} />
        <Textinput title={"Street"} placeholder={"Cochi"} />
        <Spacer height={20} />
        <View style={Styles._mapView}>
          <MapView
            style={Styles._map}
            initialRegion={{
              latitude: 9.9312,
              longitude: 76.2673,
              latitudeDelta: 7.0922,
              longitudeDelta: 7.0421,
            }}>
            <Marker
              coordinate={{
                latitude: marker.lat,
                longitude: marker.lng,

              }}
              title={marker.title}
              description={marker.description}
            />
          </MapView>
        </View>
        <Spacer height={30} />
        <View style={Styles._buttonOptions}>
          <TouchableOpacity style={Styles._backButton}>
            <Text style={Styles.__backText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles._continueButton}>
            <Text style={Styles.__continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
        <Spacer height={60} />
      </ScrollView>
    </View>
  )
}

export default Location