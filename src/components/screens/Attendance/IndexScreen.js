import { Text, VStack, Center } from 'native-base'
import CalendarStrip from 'react-native-calendar-strip';

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
    <VStack p={3} bgColor="#ffffff" flex={1}>

      {/* <Text>This is index screen of Attendance</Text> */}
      <WelcomeCard classNumber={classNumber}/>
      <CalendarStrip
        scrollable
        style={{height: 130, paddingTop: 20, paddingBottom: 10}}
        calendarHeaderStyle={{
          fontSize: 18,
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
          fontSize: 13,
          textTransform: 'capitalize'
        }}
        dateNumberStyle={{
          paddingBottom: 4,
          fontSize: 16,
          fontWeight: '300'
        }}
        highlightDateNameStyle={{
          marginBottom: 6,
          fontSize: 13,
          textTransform: 'capitalize'
        }}
        highlightDateNumberStyle={{
          color: '#ffffff',
          fontSize: 16
        }}
        highlightDateNumberContainerStyle={{
          backgroundColor: '#40506A',
          borderRadius: 40,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          minWidth: 25,
          minHeight: 25
        }}
      />
      {isLoading ? <Loading /> : <ClassList classes={classes} navigation={navigation} dateSelected={dateSelected} ready={ready}/>}
    </VStack>
  )
}

export default IndexScreen