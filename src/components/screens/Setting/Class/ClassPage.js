import { View, Img, Box, Text, Title, ScrollView, VStack, Heading, Icon, HStack, Pressable } from 'native-base'
import { TouchableOpacity, SafeAreaView, StyleSheet} from "react-native"
import { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Loading from '../../../layout/Loading';
import { Ionicons } from '@expo/vector-icons'
import moment from 'moment'


import StudentsSearch from "../../Students/myStudents/StudentsSearch"
import { getClassesOfCoach } from '../../../../utils/queries'

const ClassPage = ({navigation, route}) => {
  const {userID, userToken} = route.params;
  const [isLoading, setIsLoading] = useState(false)
  const [weeklyLists, setWeeklyLists] = useState([])
  // console.log('クラスページ', navigation, userID, userToken)
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
      data.map((item) => {
        item.classDay.map((week) => {
          switchWeek(week, item)
        })
      })
      // console.log('みたい',Mon)
      storeWeek(Mon,Tue,Wed,Thu,Fri,Sat,Sun)
      console.log('中身',Mon)
      setIsLoading(true)
    })  
  },[])
  useEffect(() => {
    setIsLoading(true)
    console.log('入ったかな',weeklyLists)
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
          { !weeklyLists ? <Loading/> : 
            <View mx={4} my={3}>
              {weeklyLists.map((week,j) => (
               <>
               <Text key={j} fontSize={16} fontFamily="Lexend_500" color="#212427">{week.title}</Text>
                {week.class.map((item, i) => (
              <TouchableOpacity key={i} onPress={() => { navigation.navigate('Detailers',{item:item, weektitle:week.title})}}>  
                <HStack alignItems="center" justifyContent="space-between">
                <Box mb={3} p={5} bg={item.color} width="100%" height="90%" borderRadius={12} shadow={9} position="absolute" top="5%"></Box>
                <Box ml={4} p={3} bg={item.cardColor} flex={1} height="100%" borderRadius={12} shadow={5}>
                  <HStack alignItems="center" justifyContent="space-between">    
                    <VStack space={1} mb={2} ml={1} pt={1}>
                      <Heading fontSize={24} fontFamily="Lexend_600" fontWeight="400">{item.title}</Heading>
                      <HStack alignItems="center" space={1}>
                        <Icon size={4} as={<Ionicons name='time' />} />
                        <Text fontSize={16} fontFamily="Lexend_400" color="#737373">{moment(item.startTime).format('H:mm A')}</Text>
                        <Icon size={4} as={<Ionicons name='arrow-forward' />} />
                        <Text fontSize={16} fontFamily="Lexend_400" color="#737373">{moment(item.endTime).format('H:mm A')}</Text>
                      </HStack>
                      <HStack alignItems="center" space={1}>
                        <Icon size={4} as={<Ionicons name='pin' />} />
                        <Text fontSize={16} fontFamily="Lexend_400" color="#737373">{item.location}</Text>
                      </HStack>
                    </VStack>
                    <Icon size={7} as={<Ionicons name='arrow-forward' />} />
                  </HStack>  
                </Box>
                </HStack>
              </TouchableOpacity>  
                  
                ))} 
              </>
              ))}
            </View>
          } 
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
  },
  contents: {
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  title: {
   textAlign: 'center',
  }
  
})
export default ClassPage