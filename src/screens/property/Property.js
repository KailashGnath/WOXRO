import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Header from '@components/header/Header'
import Styles from "./Style"
import * as Progress from 'react-native-progress';
import ProgressBar from '@components/progressbar/ProgressBar';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Land from './land/Land'
import Textinput from '@components/textinput/Textinput';
import Spacer from '@components/spacer/Spacer'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';


const Property = ({ navigation }) => {
  var radio_props = [
    { label: 'Sell', value: 0 },
    { label: 'Rent', value: 1 },
    { label: 'Lease', value: 1 }
  ];
  return (
    <View style={Styles._main}>
      <ScrollView>
        <Header navigation={navigation} to={"Location"} />
        <ProgressBar title={"Property"} />
        <Land />
        <Land />
        <View style={Styles._singleView}>
          <Land single={true} />
        </View>
        <Spacer height={30} />
        <Textinput title={"Property Title"} placeholder={"Woxro office"} />
        <View style={Styles._transaction_type}>
          <Text style={Styles._titletext}>Transaction Type</Text>
          <RadioForm
            radio_props={radio_props}
            formHorizontal={true}
            labelHorizontal={true}
            labelStyle={{ marginRight: 20 }}
            initial={0}
            buttonSize={20}
            buttonColor={'darkblue'}
            selectedButtonColor={'darkblue'}
            button
            animation={false}
            buttonOuterSize={20}
            onPress={(value) => { }}
          />
        </View>
        <Textinput title={"Price"} placeholder={"2500"} />
        <Textinput title={"Build Area"} placeholder={"2500"} />
        <Textinput title={"Plot Area"} placeholder={"2500"} />
        <Textinput title={"Seating Capacity"} placeholder={"100"} />
        <Spacer height={30} />
      </ScrollView>
    </View>
  )
}

export default Property