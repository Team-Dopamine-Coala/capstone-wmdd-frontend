import { View, Box, Text, ScrollView, Icon, HStack } from 'native-base'
import React, {useEffect, useState} from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'
import { useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import WeekCalender from './WeekCalender'
import moment from 'moment'

import {getStudentsByClass} from '../../../../utils/queries'

import RightChevron from '../../../svg/SettingIcons/RightChevron'
import RightArrow from '../../../svg/SettingIcons/RightArrow'
import MapPin from '../../../svg/SettingIcons/MapPin'

const ClassDetail = ({navigation, route}) => {
  
  const {item, weektitle} = route.params
  const [kids, setKids] = useState([])
  const [Classdetail] = useState(true)
  const classID = item._id
  
  //Fetch Student List
  useEffect(() => {
    getStudentsByClass(classID)
    .then((data) => {
      setKids(data)
    })
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.title} fontFamily="Lexend_700">{item.title}</Text>

      <WeekCalender weektitle={weektitle}/>

      <HStack style={styles.timebox} alignItems="center" space={1}>
        <Text style={styles.time} fontFamily="Lexend_400">{moment(item.startTime).format('H:mm A')}</Text>
        <RightArrow Classdetail={Classdetail}/>
        <Text style={styles.time} fontFamily="Lexend_400">{moment(item.endTime).format('H:mm A')}</Text>
      </HStack>
      <HStack style={styles.locationbox}>
        <MapPin Classdetail={Classdetail}/>
        <Text style={styles.location} fontFamily="Lexend_500">{item.location}</Text>
      </HStack>

      <Box style={styles.studentbg}>
        <Text fontFamily="Lexend_700" style={styles.studenttitle}>Student List</Text>
        <HStack space={1} borderBottomWidth=".5"  borderColor="#BBBBBB" justifyContent="space-between"/>
        <ScrollView>
          {kids.map((trainee,i) => (
            <Box key={i}>
              <TouchableOpacity onPress={() => {navigation.navigate('Student Detail',{trainee})}} style={styles.namebox}>
                  <Text style={styles.name} fontFamily="Lexend_400">{trainee.firstname} {trainee.lastname}</Text>
                  <RightChevron Classdetail={Classdetail}/>
              </TouchableOpacity>
              <HStack space={1}  borderBottomWidth=".5" borderColor="#BBBBBB" justifyContent="space-between"/>
            </Box>
          ))}
        </ScrollView>   
      </Box>
    </View>
  )
}
const styles = StyleSheet.create ({
  container: {
    backgroundColor: '#BBA0EC',
    paddingTop: 62,
  },
  title:{
    fontSize: 32,
    lineHeight: 40,
    textAlign: 'center',
    marginTop:8,
    marginBottom: 12,
    color:'#212427',
  },
  timebox:{
    marginVertical:12,
    alignSelf:'center',
  },
  time:{
    lineHeight:25,
    fontSize: 20,
    color:'#212427',
  },
  locationbox:{
    marginBottom: 24,
    alignSelf:'center',
  },
  location:{
    fontSize: 16,
    lineHeight:24,
    marginLeft: 8,
    color:'#212427',
  },
  studentbg: {
    backgroundColor: '#FDFDFD',
    paddingVertical:33,
    paddingLeft: 20,
    borderTopRightRadius:28,
    borderTopLeftRadius:28,
    height: '100%',
  },
  studenttitle:{
    fontSize:20,
    lineHeight: 25,
    marginBottom:14,
  },
  namebox:{
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name:{
    fontSize:16,
    lineHeight:22,
    color:'#000000',
  },
  iconarrow:{
    width: 24,
    height: 24,
    fontSize: 24,
    lineHeight: 24,
    marginRight: 20,
  }
})
export default ClassDetail