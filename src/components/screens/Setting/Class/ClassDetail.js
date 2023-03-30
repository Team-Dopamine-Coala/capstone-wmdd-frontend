import { View, Img, Box, Text, Title, ScrollView, VStack, Heading, Icon, HStack } from 'native-base'
import React, {useEffect, useState} from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'
import { useRoute } from '@react-navigation/native';
import moment from 'moment'
import { Ionicons } from '@expo/vector-icons'
import WeekCalender from './WeekCalender';

import {getStudentsByClass} from '../../../../utils/queries'

const ClassDetail = ({navigation, route}) => {
  const {item, weektitle} = route.params
  const [kids, setKids] = useState([])
  const classID = item._id
  // console.log('Detailきた', classID)
  // console.log('Detail', item)
  
  //Student List Fetch
  useEffect(() => {
    getStudentsByClass(classID)
    .then((data) => {
      setKids(data)
    })
  },[])
  useEffect(() => {
    console.log('みたい',kids)
  },[kids])

  return (
    <View style={styles.container}>
      <Text style={styles.title} fontFamily="Lexend_700">{item.title}</Text>

      <WeekCalender weektitle={weektitle}/>

      <HStack style={styles.timebox} alignItems="center" space={1}>
        <Text style={styles.time} fontFamily="Lexend_400">{moment(item.startTime).format('H:mm A')}</Text>
        <Icon size={4} as={<Ionicons name='arrow-forward' />} style={styles.icontime}/>
        <Text style={styles.time} fontFamily="Lexend_400">{moment(item.endTime).format('H:mm A')}</Text>
      </HStack>
      <HStack style={styles.locationbox}>
        <Icon size={4} as={<Ionicons name='location-outline' />} style={styles.iconlocation}/>
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
                  <Icon size={4} as={<Ionicons name='chevron-forward-outline' />} style={styles.iconarrow}/>
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
    paddingTop: 33,
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
  icontime:{
    marginHorizontal: 18,
    color: '#212427',
    fontSize: 20,
    lineHeight: 20,
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
  iconlocation:{
    width:24,
    height: 24,
    fontSize:22,
    color: '#212427',
    lineHeight: 24,
    marginRight: 8,
  },
  location:{
    fontSize: 16,
    lineHeight:24,
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