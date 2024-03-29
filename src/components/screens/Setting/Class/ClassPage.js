import { View, Box, Text, ScrollView, VStack, Heading, HStack } from 'native-base'
import { TouchableOpacity, StyleSheet} from "react-native"
import { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Loading from '../../../layout/Loading';
import moment from 'moment'

import MapPin from '../../../svg/SettingIcons/MapPin'
import Clock from '../../../svg/SettingIcons/Clock'
import RightArrow from '../../../svg/SettingIcons/RightArrow'
import RightChevron from '../../../svg/SettingIcons/RightChevron'

import StudentsSearch from "../../Students/myStudents/StudentsSearch"
import { getClassesOfCoach } from '../../../../utils/queries'

const ClassPage = ({navigation, route}) => {
  const {userID, userToken} = route.params;
  const [isLoading, setIsLoading] = useState(false)
  const [weeklyLists, setWeeklyLists] = useState([])
  
  const Sun = []
  const Mon = []
  const Tue = []
  const Wed = []
  const Thu = []
  const Fri = []
  const Sat= []

  //Fetch all class this user has
  useEffect(() => {
    getClassesOfCoach(userID, userToken)
    .then((data) => {
      data.map((item, l) => {
        item.classDay.map((week, s) => {
          switchWeek(week, item)
        })
      })
      storeWeek(Mon,Tue,Wed,Thu,Fri,Sat,Sun)
      setIsLoading(true)
    })  
  },[])
  useEffect(() => {
    setIsLoading(true)
  },[weeklyLists])

  //=== FUNCTIONS =============
  const switchWeek = (week, item) => {
    switch (week){
      case 'Sunday':
        Sun.push(item)
        break;
      case 'Monday':
        Mon.push(item)
        break;
      case 'Tuesday':
        Tue.push(item)
        break;
      case 'Wednesday':
        Wed.push(item)
        break;
      case 'Thursday':
        Thu.push(item)
        break;
      case 'Friday':
        Fri.push(item)
        break;
      case 'Saturday':
        Sat.push(item)
      break;
    }
  }
  
  const storeWeek = (Mon,Tue,Wed,Thu,Fri,Sat,Sun) => {
      setWeeklyLists([
      {id: 1,title: "Monday",class: Mon},
      {id: 2,title: "Tuesday",class: Tue},
      {id: 3,title: "Wednesday",class: Wed},
      {id: 4,title: "Thursday",class: Thu},
      {id: 5,title: "Friday",class: Fri},
      {id: 6,title: "Saturday",class: Sat},
      {id: 7,title: "Sunday",class: Sun}
      ])
  }

  const clickClass = (item) => {
      navigation.navigate('Class Detail',{item})
  }
  
  return (
    <LinearGradient colors={['#F4903F', '#F4903F', '#FC8634', '#FC8634', '#FC8634', '#F69B43', '#F69B43', '#F3AA6A', '#F3AA6A', '#F9D5B4']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} flex={1}>
        <View style={styles.background}>
          <StudentsSearch/>
          <ScrollView>
            { !weeklyLists ? <Loading/> : 
              <View style={styles.container}>
                {weeklyLists.map((week,j) => (
                  <>
                    <Text key={j} fontFamily="Lexend_500"  style={styles.week}>{week.title}</Text>
                    {week.class.map((item, i) => (
                      <TouchableOpacity key={i} onPress={() => { navigation.navigate('Detailers',{item:item, weektitle:week.title})}}>  
                        <HStack alignItems="center" justifyContent="space-between" mb={14}>
                          <Box  style={styles.vivid} bg={item.color} width="100%" borderRadius={12} shadow={9} position="absolute" top="5%"></Box>
                          <Box  style={styles.maincard} bg={item.cardColor} flex={1} height="100%" borderRadius={12} shadow={5} >
                            <HStack alignItems="center" justifyContent="space-between">    
                              <VStack style={styles.contents}>
                                <Heading style={styles.classtitle} fontSize={24} fontFamily="Lexend_600" fontWeight="400">{item.title}</Heading>
                                <HStack alignItems="center" space={1} style={styles.classtitle}>
                                  <Clock/>
                                  <Text fontSize={16} fontFamily="Lexend_400" lineHeight={24} color="#737373" >{moment(item.startTime).format('H:mm A')}</Text>
                                  <RightArrow/>
                                  <Text fontSize={16} fontFamily="Lexend_400" lineHeight={24} color="#737373" >{moment(item.endTime).format('H:mm A')}</Text>
                                </HStack>
                                <HStack alignItems="center" space={1}>
                                  <MapPin/>
                                  <Text fontSize={16} fontFamily="Lexend_400" color="#737373">{item.location}</Text>
                                </HStack>
                              </VStack>
                              <RightChevron/>
                            </HStack>  
                          </Box>
                        </HStack>
                      </TouchableOpacity>   
                    ))} 
                  </>
                ))}
              </View>
            } 
          </ScrollView>
        </View>
    </LinearGradient>
  )
}
const styles = StyleSheet.create ({
  container: {
      paddingVertical: 10,
      marginHorizontal: 5,
  },
  background: {
    backgroundColor: '#FDFDFD',
    paddingVertical:24,
    paddingHorizontal: 20,
    borderTopRightRadius:28,
    borderTopLeftRadius:28,
    height: '100%',
    marginTop: 110,
  },
  week:{
    color:"#212427",
    fontSize: 16,
    marginBottom: 9,
    marginTop:16,
  },
  maincard:{
    padding: 16,
    marginLeft: 20,
  },
  vivid:{
    height:'80%',
    marginTop: 8,
  },
  classtitle:{
    marginBottom: 6,
    color: '#212427',
  },
  title: {
   textAlign: 'center',
  }
})
export default ClassPage