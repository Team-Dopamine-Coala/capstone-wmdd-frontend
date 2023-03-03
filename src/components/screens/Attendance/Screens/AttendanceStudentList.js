import { Text, Heading, View, VStack, Input, Icon, Button, Checkbox, HStack } from "native-base"
import { Ionicons } from "@expo/vector-icons"
import { useState, useEffect } from 'react'
import { getStudentsByClass } from '../../../../utils/queries'
import { getAllAttendance } from '../../../../utils/queries'
import { DrawerLayoutAndroidBase } from "react-native"
// import StudentList from "../ClassList/StudentList"



const AttendanceStudentList = ({ navigation, route }) => {
  const {classId, classTitle, classStartTime, classEndTime} = route.params
  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [attendance, setAttendance] = useState({})
  const [allAttendance, setAllAttendance] = useState([])
  useEffect(() => {
    // console.log("date", dateSelected)
    setIsLoading(true)
    getStudentsByClass(classId).then(
      data => {
        setStudents(data)
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          const curr = attendance
          curr[element._id] = false;
          setAttendance(curr)
        }
        console.log(attendance)
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
        class_id: "63e066913e54d66c36ab24f0",
        student_id: element,
        present: true,
        date: "2023-03-01T20:00:00.000Z",
      }
      const curr = attendance
      curr[element] = true
      setAttendance(curr)
      newAllAttendance.push(newAttendance)
    });
    // const completedClass = 
    setAllAttendance(newAllAttendance)
  }

  const test = {
      class_id: "63e066913e54d66c36ab24f0",
      student_id: "63e066913e54d66c36ab24f0",
      present: true,
      date: "2023-03-01T20:00:00.000Z"
    }

  const addAllAttendance = () => {
    console.log(allAttendance)
    for (let index = 0; index < students.length; index++) {
      const element = students[index];
      if (!attendance[element._id]) {
        const newAttendance = {
          classId: classId,
          studentId: element._id,
          present: false,
          date: "2023-03-01T20:00:00.000Z",
        }
        addAttendance(newAttendance)
      }
    }
    allAttendance.forEach(element => {
      addAttendance(element)
    })
    
  }

  // Add Attendance
const addAttendance = async () => {
    await fetch(`${AWS_BACKEND_BASE_URL}/api/attendance`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(test),
  });

};

 // Update Attendance
const updateAttendance = async () => {
    await fetch(`${AWS_BACKEND_BASE_URL}/api/attendance/6402297a9fc5d5a0790ae9fc`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(test),
  });
};


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
          addAllAttendance(); updateClassAttendance(); navigation.navigate('Completed Attendance');
        }}
      ><Text fontWeight="700" color="#ffffff">Save Attendance</Text></Button>

      </VStack>
  )
}

export default AttendanceStudentList 