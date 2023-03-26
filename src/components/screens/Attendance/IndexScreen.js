import { Text, VStack, Box } from 'native-base'
import CalendarStrip from 'react-native-calendar-strip';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect, useContext } from 'react'
import ClassList from "./ClassList/ClassList"
import Calendar from "./Calendar/Calendar"
import WelcomeCard from "./Card/WelcomeCard"
import Loading from '../../layout/Loading'
import { AuthContext } from '../../context/AuthContext';
import { useFocusEffect } from '@react-navigation/native';

import { getClassesOfCoach, getAllAttendance } from '../../../utils/queries';
import moment from 'moment';


const IndexScreen = ({ navigation, route }) => {
  const {ready} = route.params ? route.params : {ready: 100000}
  const {userToken} = useContext(AuthContext)
  const [classes, setClasses] = useState([]);
  const [classNumber, setClassNumber] = useState(0);
  const [dateSelected, setSelectedDate] = useState(new Date())
  const [isLoading, setIsLoading] = useState(true)
  // const ready = Math.floor(Math.random() * 1000000)

  useEffect(() => {
    setIsLoading(true)
    getClassesOfCoach('63fcf0bd354e8150f45dd4d2', userToken).then(
      data => {
        let currentClassArray = [];
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          if(moment(dateSelected).isSame(element.startTime, "day")){
            currentClassArray.push(element)
          }
        }
        setClasses(currentClassArray)
        setClassNumber(currentClassArray.length)
        setIsLoading(false)
      },
      error => {
        throw error
      }
    )
    
  }, [dateSelected, ready])

  const onDateClick = (date) => {
    setSelectedDate(date)
  }

  return (
    <LinearGradient colors={['#F4903F', '#F4903F', '#FC8634', '#FC8634', '#FC8634', '#F69B43', '#F69B43', '#F3AA6A', '#F3AA6A', '#F9D5B4']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} flex={1}>
    <VStack  flex={1}  >
       <VStack p={3} >
       <WelcomeCard classNumber={classNumber}/>
      </VStack>
       <Box pt="2" height="100%" bgColor="#FDFDFD" borderTopLeftRadius={28} borderTopRightRadius={28}>
      <CalendarStrip   
        scrollable
        style={{height: 130, paddingTop: 20, paddingBottom: 0, paddingHorizontal: 15}}
        calendarHeaderStyle={{
          fontSize: 20,
          fontFamily: "Lexend_700",
          alignSelf: 'flex-start',
        }}
        selectedDate={dateSelected}
        onDateSelected={onDateClick}
        minDate="2023-01-01"
        maxDate="2023-12-31"
        dayContainerStyle={{
          paddingBottom: 4
        }}
        dateNameStyle={{
          marginBottom: 6,
          fontSize: 14,
          textTransform: 'capitalize',
          fontFamily: "Lexend_400",
        }}
        dateNumberStyle={{
          paddingBottom: 4,
          fontSize: 16,
          fontFamily: "Lexend_600"
        }}
        highlightDateNameStyle={{
          color: '#F4903F',
          marginBottom: 6,
          fontSize: 14,
          textTransform: 'capitalize'
        }}
        highlightDateNumberStyle={{
          color: '#F4903F',
          fontSize: 16
        }}
        highlightDateNumberContainerStyle={{
          // backgroundColor: '#40506A',
          borderRadius: 40,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          minWidth: 25,
          minHeight: 25
        }}
      />
      {isLoading ? <Loading /> : <ClassList classes={classes} navigation={navigation} dateSelected={dateSelected} ready={ready}/>}
       </Box>
    </VStack>
    </LinearGradient>
  )
}

export default IndexScreen