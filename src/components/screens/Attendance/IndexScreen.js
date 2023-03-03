import { Text, VStack, Center } from 'native-base'
import { useState, useEffect } from 'react'
import ClassList from "./ClassList/ClassList"
import Calendar from "./Calendar/Calendar"
import WelcomeCard from "./Card/WelcomeCard"
import Loading from '../../layout/Loading'

import { getClassesOfCoach } from '../../../utils/queries';

const IndexScreen = ({ navigation }) => {
  const [classes, setClasses] = useState([]);
  const [dateSelected, setSelectedDate] = useState(new Date())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    getClassesOfCoach('63fcf0bd354e8150f45dd4d2').then(
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
      {isLoading ? <Loading /> : <ClassList classes={classes} navigation={navigation} />}
    </VStack>
  )
}

export default IndexScreen