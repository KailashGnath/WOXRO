import { View, Text } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import Styles from './Style';

const ProgressBar = ({ title = 'Title', fraction = '1/4', progress = .25 }) => {
  return (
    <View style={Styles._progressbar}>
      <View style={Styles._circleView}>
        <Progress.Circle borderColor={"#fff"} progress={progress} color={"blue"} animated={false} unfilledColor={"white"} showsText={true} size={50} fill={"#fff"} formatText={() => fraction} thickness={6} textStyle={Styles._progressText} />
      </View>
      <View style={Styles._progressText, {
        height: 50,
        justifyContent: "center"
      }}>
        <Text style={Styles._property}>{title}</Text>
        <Text>Progress Detail ></Text>
      </View>
    </View>
  )
}

export default ProgressBar