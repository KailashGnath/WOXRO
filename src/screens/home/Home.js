import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import Styles from './Style'
import Header from '@components/header/Header'
import Search from '@components/searchbar/Search'
import Selector from './selector/Selector'
import Office from './office/Office'
import Appcontext from '../../common/Constants'


const Home = ({ navigation }) => {
  const [data, setdata] = useState()
  const { flatlist, setflatlist } = useContext(Appcontext)


  return (
    <View style={Styles._main}>
      <ScrollView>
        <Header navigation={navigation} to={"Property"} />
        <Search />
        <Selector />
        <Office data={flatlist} />
        <Office data={flatlist} />
        <Office data={flatlist} />
        {/* <Text style={Styles._text}>Home</Text>
      <Text style={{ fontSize: 20 }}>Home</Text> */}
        <View style={{ height: 30 }}>
        </View>
      </ScrollView>
    </View >
  )
}

export default Home