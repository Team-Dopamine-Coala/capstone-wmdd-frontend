import { Text, Heading, View, VStack, Input, Icon, Button, Checkbox, HStack } from "native-base"
import { Ionicons } from "@expo/vector-icons"
import { useState, useEffect } from 'react'
import { getStudentsByClass } from '../../../../utils/queries'
import { getAllAttendance } from '../../../../utils/queries'
import { DrawerLayoutAndroidBase } from "react-native"
import { AWS_BACKEND_BASE_URL } from "../../../../utils/static"
// import StudentList from "../ClassList/StudentList"


const AttendanceStudentList = ({ navigation, dateSelected }) => {

  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [attendance, setAttendance] = useState([])
  const [allAttendance, setAllAttendance] = useState([])
  
  useEffect(() => {
    setIsLoading(true)
    getStudentsByClass('63e066913e54d66c36ab24f0').then(
      data => {
        setStudents(data)
        // console.log(students)
      },
      error => {
        throw error
      }
    )
    // console.log("allAttendance State:", allAttendance)
    // getAllAttendance().then(
    //   data => {
    //     setAllAttendance(data)
    //     console.log("attendance"+ allAttendance)
    //   },
    //   error => {
    //     throw error
    //   }
    // )
  }, [])

  const checkboxHandler = (checkboxVal) => {
    const newAllAttendance = []
    checkboxVal.forEach(element => {
      const newAttendance = {
        classId: "63e066913e54d66c36ab24f0",
        studentId: element,
        present: true,
        date: "2023-03-01T20:00:00.000Z"
      }
      newAllAttendance.push(newAttendance)
    });
    setAllAttendance(newAllAttendance)
  }

  // const test = {
  //     classId: "63e066913e54d66c36ab24f0",
  //     studentId: "63e066913e54d66c36ab24f0",
  //     present: true,
  //     date: "2023-03-01T20:00:00.000Z"
  //   }

  const addAllAttendance = () => {
    allAttendance.forEach(element => {
      console.log(element)
      addAttendance(element)
    })
  }

  // Add Attendance
const addAttendance = async (newAttendance) => {
    await fetch(`${AWS_BACKEND_BASE_URL}/api/attendance`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newAttendance),
  });

};

 // Update Attendance
// const updateAttendance = async () => {
//     await fetch(`${AWS_BACKEND_BASE_URL}/api/attendance/6402297a9fc5d5a0790ae9fc`, {
//     method: 'PATCH',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(test),
//   });
// };

  return (
    <VStack width="100%" space={1} p={3} pb={20} bgColor="#ffffff" flex={1}>
          <Input placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
        {/* <StudentList students={students} navigation={navigation} checkboxHandler={checkboxHandler}/> */}
        <Checkbox.Group onChange={checkboxHandler}>
        {students.map((item) => {
            return <Checkbox  value={item._id} key= {item._id} colorScheme="orange" accessibilityLabel="This is a checkbox of a student" >{item.firstname+item.lastname}</Checkbox>
        })}
    
    </Checkbox.Group>
        <Button
        bgColor="#404142"
        onPress={() => {
          // addAttendance()
          addAllAttendance()
        }}
      ><Text fontWeight="700" color="#ffffff">Save Attendance</Text></Button>

      </VStack>
  )
}

export default AttendanceStudentList 