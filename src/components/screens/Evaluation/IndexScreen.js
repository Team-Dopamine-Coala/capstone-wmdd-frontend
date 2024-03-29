import { useState, useEffect, useContext } from 'react'
import { Box, Center, Heading, VStack, View, Text } from 'native-base'
import { useIsFocused } from '@react-navigation/core';
import CalendarStrip from 'react-native-calendar-strip';
import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment';

import { AuthContext } from '../../context/AuthContext';
import ClassList from './lists/ClassList';
import Loading from '../../layout/Loading'

import { getClassesOfCoach } from '../../../utils/queries';

const IndexScreen = ({ navigation }) => {
  const {userToken} = useContext(AuthContext)
  const [classes, setClasses] = useState([])
  const [dateSelected, setSelectedDate] = useState(new Date())
  const [isLoading, setIsLoading] = useState(true)

  const isFocused = useIsFocused()

  useEffect(() => {
    setIsLoading(true)
    getClassesOfCoach('63fcf0bd354e8150f45dd4d2', userToken).then(
      data => {
        setClasses(data)
        setIsLoading(false)
      },
      error => {
        throw error
      }
    )
  }, [dateSelected, isFocused])
  

  const onDateClick = (date) => {
    setSelectedDate(date)
  }

  return (
    <LinearGradient colors={['#F4903F', '#F4903F', '#FC8634', '#FC8634', '#FC8634', '#F69B43', '#F69B43', '#F3AA6A', '#F3AA6A', '#F9D5B4']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} flex={1}>
    <VStack mt="110px">
      <Box pt={2} height="100%" bgColor="#FDFDFD" borderTopLeftRadius={20} borderTopRightRadius={20}>
        <CalendarStrip
        scrollable
        style={{height: 130, paddingTop: 20, paddingHorizontal: 15, fontFamily: 'Lexend_400'}}
        calendarHeaderStyle={{
          fontSize: 20,
          fontFamily: 'Lexend_700',
          alignSelf: 'flex-start',
        }}
        calendarHeaderContainerStyle={{
          fontSize: 20,
          fontFamily: 'Lexend_700',
        }}
        selectedDate={new Date()}
        onDateSelected={onDateClick}
        minDate="2023-04-01"
        maxDate="2023-04-30"
        dayContainerStyle={{
          paddingBottom: 4
        }}
        dateNameStyle={{
          marginBottom: 4,
          fontSize: 14,
          textTransform: 'capitalize',
          fontFamily: 'Lexend_400'
        }}
        dateNumberStyle={{
          paddingBottom: 3,
          fontSize: 16,
          fontFamily: 'Lexend_500'
        }}
        highlightDateContainerStyle={{
          borderRadius: 0,
          borderBottomColor: '#F4903F',
          borderBottomWidth: 2
        }}
        highlightDateNameStyle={{
          color: '#F4903F',
          marginBottom: 4,
          fontSize: 14,
          textTransform: 'capitalize',
          fontFamily: 'Lexend_400'
        }}
        highlightDateNumberStyle={{
          color: '#F4903F',
          paddingBottom: 1,
          fontSize: 16,
          fontFamily: 'Lexend_500'
        }}
      />
      
      {isLoading ? <Loading /> : <ClassList classes={classes.filter((current) => moment(current.startTime).format('YYYY-MM-DD') == moment(dateSelected).format('YYYY-MM-DD')).sort((a, b) => a.startTime > b.startTime)} navigation={navigation} calendarDate={moment(dateSelected).format('YYYY-DD-MM')} />}
    </Box>

    </VStack>
    </LinearGradient>
  )
}

export default IndexScreen