import { useState, useEffect } from 'react'
import { Text, View, VStack, Input, Icon, Button, Box } from "native-base"
import { LinearGradient } from 'expo-linear-gradient'

import StudentList from './lists/StudentList'
import Loading from "../../layout/Loading"

import { getStudentsByClass } from '../../../utils/queries'

const EvaluationStudentListScreen = ({ navigation, route }) => {
  const {classId} = route.params
  const [students, setStudents] = useState([])
  const [dateSelected, setDateSelected] = useState(new Date())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    getStudentsByClass(classId).then(
      data => {
        setStudents(data)
        setIsLoading(false)
      },
      error => {
        throw error
      }
    )
  }, [dateSelected])

  return (
    <LinearGradient colors={['#F4903F', '#F4903F', '#FC8634', '#FC8634', '#FC8634', '#F69B43', '#F69B43', '#F3AA6A', '#F3AA6A', '#F9D5B4']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} flex={1}>
      <VStack flex={1} mt="60px" p={4} pb={2} bgColor="#fdfdfd" borderTopLeftRadius={20} borderTopRightRadius={20}>

        {isLoading ? <Loading /> : <StudentList students={students} navigation={navigation} className={route.params.className} />}

        <Box px={4} py={3}>
        <Button
          bgColor="#404142"
          onPress={() => {
            navigation.navigate('Evaluation Individual Student', {
              studentsList: students,
              className: route.params.className
            })
          }}
        ><Text fontFamily="Lexend_600" color="#ffffff">Start Evaluation</Text></Button>
        </Box>
      </VStack>
    </LinearGradient>
  )
}

export default EvaluationStudentListScreen