import { Text, Heading, View, VStack, Input, Icon, Button, Checkbox, HStack, Box } from "native-base"
import { Ionicons } from "@expo/vector-icons"
import { useState, useEffect } from 'react'
import { getStudentsByClass } from '../../../../utils/queries'
import { getAllAttendance } from '../../../../utils/queries'
import { DrawerLayoutAndroidBase } from "react-native"
import { AWS_BACKEND_BASE_URL } from "../../../../utils/static"
import { printType } from "graphql"
import StudentsSearch from "../../Students/myStudents/StudentsSearch"
// import StudentList from "../ClassList/StudentList"


const AttendanceStudentList = ({ navigation, route }) => {
  const {classId, classTitle, classStartTime, classEndTime, dateSelected} = route.params
  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [attendance, setAttendance] = useState({})
  const [allAttendance, setAllAttendance] = useState([])
  const [chkboxGrpValues, setChkboxGrpValues] = useState([])


  useEffect(() => {
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

      },
      error => {
        throw error
      }
    )
  }, [])


  const checkboxHandler = (checkboxVal) => {
    const newAllAttendance = []
    checkboxVal.forEach(element => {
      const newAttendance = {
        classId: classId,
        studentId: element,
        present: true,
        date: dateSelected,
      }
      const curr = attendance
      curr[element] = true
      setAttendance(curr)
      newAllAttendance.push(newAttendance)
    });
    setAllAttendance(newAllAttendance)
  }

  const selectAllCheckbox = () => {
    let checkboxGroupValues = []
    for (let index = 0; index < students.length; index++) {
      const element = students[index];
      checkboxGroupValues.push(element._id)
      
    }
    console.log("checkboxGroupValues", checkboxGroupValues)
  }

  const addAllAttendance = () => {
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
    <VStack width="100%" paddingTop="16px" bgColor="#ffffff" height="100%" justifyContent="space-between">
        <Box paddingRight="20px" paddingLeft="20px">
          <StudentsSearch/>
          <Checkbox.Group fontFamily="Lexend_400" fontSize="16" onChange={checkboxHandler} marginTop="20px">
          {students.map((item, i) => (
              <VStack key={i} >
                <Checkbox fontFamily="Lexend_400" 
                          width="350px" 
                          fontSize="16" 
                          mb={3}
                          mt={3}
                          value={item._id} 
                          key={item._id} 
                          colorScheme="orange"
                          borderRadius="50%" 
                          accessibilityLabel="This is a checkbox of a student" 
                >
                  {`${item.firstname} ${item.lastname}`}
                </Checkbox>
                <HStack space={1}  borderBottomWidth=".5" borderColor="#BBBBBB" justifyContent="space-between"/>                  
              </VStack>             
          ))}
          </Checkbox.Group>
        </Box>  
          {/* <Button onPress={selectAllCheckbox}>select all</Button> */}
        <Button m="5"
        bgColor="#404142"
        onPress={() => {
          // addAttendance()
          addAllAttendance(); updateClassAttendance(); navigation.navigate('Completed Attendance', {
            allAttendance: allAttendance,
            classId: classId,
            classTitle: classTitle
          });
        }}
      >
        <Text fontFamily="Lexend_600" fontSize="16" color="#ffffff">Save Attendance</Text>
      </Button>

      </VStack>
  )
}

export default AttendanceStudentList 