import { Text, Heading, View, VStack, Input, Icon, Button, Checkbox, HStack } from "native-base"
import { Ionicons } from "@expo/vector-icons"
import { useState, useEffect } from 'react'
import { getStudentsByClass } from '../../../../utils/queries'
import { getAllAttendance } from '../../../../utils/queries'
import { DrawerLayoutAndroidBase } from "react-native"
import { AWS_BACKEND_BASE_URL } from "../../../../utils/static"
// import StudentList from "../ClassList/StudentList"



const AttendanceStudentList = ({ navigation, route }) => {
  const {classId, classTitle, classStartTime, classEndTime} = route.params
  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [attendance, setAttendance] = useState({})
  const [allAttendance, setAllAttendance] = useState([])
  useEffect(() => {
    setIsLoading(true)
    getStudentsByClass(classId).then(
      data => {
        setStudents(data)
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          // console.log(element)
          const curr = attendance
          curr[element._id] = false;
          setAttendance(curr)
          // console.log("attendance", attendance)
        }
        // console.log(attendance)
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
        classId: classId,
        studentId: element,
        present: true,
        date: "2023-03-01T20:00:00.000Z",
      }
      const curr = attendance
      curr[element] = true
      setAttendance(curr)
      newAllAttendance.push(newAttendance)
    });
    setAllAttendance(newAllAttendance)
  }



  const addAllAttendance = () => {
    // console.log(allAttendance)
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
const addAttendance = async (newAttendance) => {
    await fetch(`${AWS_BACKEND_BASE_URL}/api/attendance`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newAttendance),
  });
};

const newClass = {
  userId: "63fcf0bd354e8150f45dd4d2",
  startTime: classStartTime,
  endTime: classEndTime,
  title: classTitle,
  completed: true,
  date: "2023-03-01T20:00:00.000Z"
}


 // Update Class
const updateClassAttendance = async () => {
 
    await fetch(`${AWS_BACKEND_BASE_URL}/api/class/${classId}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newClass),
  });
};


  return (
    <VStack width="100%" space={1} p={3} pb={20} bgColor="#ffffff" flex={1}>
          <Input m="1" placeholder="Search" fontSize="16" fontFamily="Lexend_400" variant="filled" width="100%" borderRadius="35" py="2" px="3" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
        {/* <StudentList students={students} navigation={navigation} checkboxHandler={checkboxHandler}/> */}
        <Checkbox.Group fontFamily="Lexend_400" fontSize="16" onChange={checkboxHandler}>
        {students.map((item) => {
            return <Checkbox fontFamily="Lexend_400" fontSize="16" m="2" value={item._id} key= {item._id} colorScheme="orange" accessibilityLabel="This is a checkbox of a student" >{`${item.firstname} ${item.lastname}`}</Checkbox>
        })}
        </Checkbox.Group>
        <Button m="5"
        bgColor="#404142"
        onPress={() => {
          // addAttendance()
          addAllAttendance(); updateClassAttendance(); navigation.navigate('Completed Attendance', {
            allAttendance: allAttendance,
            classId: classId
          });
        }}
      ><Text fontFamily="Lexend_600" fontSize="16" color="#ffffff">Save Attendance</Text></Button>

      </VStack>
  )
}

export default AttendanceStudentList 