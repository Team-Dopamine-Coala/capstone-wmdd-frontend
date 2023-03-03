import { Text, Heading, View, VStack, Input, Icon, Button, Checkbox, HStack } from "native-base"
import { Ionicons } from "@expo/vector-icons"
import { useState, useEffect } from 'react'
import { getStudentsByClass } from '../../../../utils/queries'
import StudentList from "../ClassList/StudentList"


const AttendanceStudentList = ({ navigation }) => {

  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [attendance, setAttendance] = useState({})

  useEffect(() => {
    setIsLoading(true)
    getStudentsByClass('63e066913e54d66c36ab24f0').then(
      data => {
        setStudents(data)
        console.log(students)
      },
      error => {
        throw error
      }
    )
  }, [])

  const checkboxHandler = (checkboxVal, item) => {
    console.log(checkboxVal, item);
  }

  return (
    <VStack width="100%" space={1} p={3} pb={20} bgColor="#ffffff" flex={1}>
          <Input placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
        <StudentList students={students} navigation={navigation} checkboxHandler={checkboxHandler}/>

        <Button
        bgColor="#404142"
        onPress={() => {
        }}
      ><Text fontWeight="700" color="#ffffff">Save Attendance</Text></Button>

      </VStack>
  )
}

export default AttendanceStudentList 