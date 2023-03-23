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
    <View h="100%" space={1} pt="50px" bgColor="#F4903F" flex={1}>
      <VStack height="100%" p={3} bgColor="#ffffff" borderTopLeftRadius={20} borderTopRightRadius={20}>

        {isLoading ? <Loading /> : <StudentList students={students} navigation={navigation} className={route.params.className} />}

        <Button
          bgColor="#404142"
          onPress={() => {
            navigation.navigate('Evaluation Individual Student', {
              studentsList: students,
              className: route.params.className
            })
          }}
        ><Text fontWeight="700" color="#ffffff">Start Evaluation</Text></Button>
      </VStack>
    </View>
  )
}

export default EvaluationStudentListScreen