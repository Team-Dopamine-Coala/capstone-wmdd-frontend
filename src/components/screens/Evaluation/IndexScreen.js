import { useState, useEffect } from 'react'
import { Center, Heading, VStack } from 'native-base'
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

import ClassList from './lists/ClassList';
import Loading from '../../layout/Loading'

import { getClassesOfCoach } from '../../../utils/queries';

const IndexScreen = ({ navigation }) => {
  const [classes, setClasses] = useState([])
  const [dateSelected, setSelectedDate] = useState(new Date())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log(dateSelected)

    setIsLoading(true)
    setClasses([{"classDay":[],"_id":"63e065e53e54d66c36ab24ec","title":"Gymnastics 1","programId":"","startTime":"9:00AM","endTime":"10:00AM","userId":"63e9fcf20386d6f0fd9053b3"},{"_id":"63e066913e54d66c36ab24f0","title":"Gymnastics 3","programId":"63e065093e54d66c36ab24e8","startTime":"2:00PM","endTime":"3:00PM","userId":"63e9fcf20386d6f0fd9053b3","classDay":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]}])
    setIsLoading(false)
    // getClassesOfCoach('63e9fcf20386d6f0fd9053b3').then(
    //   data => {
    //     setClasses(data)
    //     setIsLoading(false)
    //   },
    //   error => {
    //     throw error
    //   }
    // )
  }, [dateSelected])
  

  const onDateClick = (date) => {
    setSelectedDate(date)
  }

  return (
    <VStack p={3} bgColor="#ffffff" flex={1}>
      <Center>
        <Heading>Evaluation</Heading>
      </Center>
      
      <CalendarStrip
      scrollable
      style={{height: 130, paddingTop: 20, paddingBottom: 10}}
      calendarHeaderStyle={{
        fontSize: 18,
        alignSelf: 'flex-start',
      }}
      startingDate={moment().subtract(3, 'days')}
      selectedDate={moment()}
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
    
    {isLoading ? <Loading /> : <ClassList classes={classes} navigation={navigation} />}

    </VStack>
  )
}

export default IndexScreen