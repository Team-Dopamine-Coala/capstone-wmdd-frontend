import { Text, VStack, Center } from 'native-base'
import { useState, useEffect, useContext } from 'react'
import ClassList from "./ClassList/ClassList"
import Calendar from "./Calendar/Calendar"
import WelcomeCard from "./Card/WelcomeCard"
import Loading from '../../layout/Loading'
import { AuthContext } from '../../context/AuthContext';
import { useFocusEffect } from '@react-navigation/native';

import { getClassesOfCoach, getAllAttendance } from '../../../utils/queries';


const IndexScreen = ({ navigation }) => {
  const {userToken} = useContext(AuthContext)
  const [classes, setClasses] = useState([]);
  const [dateSelected, setSelectedDate] = useState(new Date())
  const [isLoading, setIsLoading] = useState(true)
  const ready = Math.floor(Math.random() * 1000000)

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
    
  }, [dateSelected])

  const onDateClick = (date) => {
    setSelectedDate(date)
  }

  return (
    <VStack p={3} pb={20} bgColor="#ffffff" flex={1}>

      {/* <Text>This is index screen of Attendance</Text> */}
      <WelcomeCard/>
      <Calendar />
      {isLoading ? <Loading /> : <ClassList classes={classes} navigation={navigation} dateSelected={dateSelected} ready={ready}/>}
    </VStack>
  )
}

export default IndexScreen