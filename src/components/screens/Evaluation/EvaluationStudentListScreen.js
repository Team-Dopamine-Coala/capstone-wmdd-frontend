import { useState, useEffect } from 'react'
import { Text, View, VStack, Input, Icon, Button } from "native-base"
import { Ionicons } from "@expo/vector-icons"

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
    <VStack width="100%" space={1} p={3} pb={20} bgColor="#ffffff" flex={1}>
      <Input placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />

      {isLoading ? <Loading /> : <StudentList students={students} navigation={navigation} className={route.params.className} />}

      <Button
        bgColor="#667080"
        onPress={() => {
          navigation.navigate('Evaluation Individual Student', {
            studentsList: students,
            className: route.params.className
          })
        }}
      ><Text fontWeight="700" color="#ffffff">Start Evaluation</Text></Button>
    </VStack>
  )
}

export default EvaluationStudentListScreen