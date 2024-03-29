import { Text, VStack, Button, ScrollView, Box } from "native-base"
import StudentList from "../ClassList/StudentList"
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext';
import { getAllAttendance, getStudentById } from '../../../../utils/queries';

const CompletedAttendance = ({ route, students, navigation, checkboxHandler, allAttendance  }) => {
  const { classId } = route.params
  const { userToken } = useContext(AuthContext)
  const [presentList, setPresentList] = useState([]);
  const [absentList, setAbsentList] = useState([]);
  const [ready, setReady] = useState(false)

  useEffect(() => {
    getAllAttendance(classId, userToken).then(
      data => {
        let presentListArray = [];
        let absentListArray = [];
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          getStudentById( classId, element.studentId).then(
            studentData => {
              element.firstname = studentData.firstname
              element.lastname = studentData.lastname
              if(element.present==true){
                presentListArray.push(element)
              } else {
                absentListArray.push(element)
              }

            }
          ).finally(() => {
            if (presentListArray.length + absentListArray.length == data.length){
              setPresentList(presentListArray)
              setAbsentList(absentListArray)
            }
          })

        }
        
      },
      error => {
        throw error
      }
    ).finally(() => {
      setReady(true)
    })
    
  }, [])

  return (
    <VStack height="100%" bgColor="#FFFFFF" paddingX="18px" paddingTop="31px" justifyContent="space-between">
      <ScrollView paddingX="2px" height="70%">
        <StudentList
          present={presentList.length}
          absent={absentList.length}
          presentList={presentList}
          absentList={absentList}
        />
      </ScrollView>   
      <Box bgColor="#FFFFFF" width="100%">
    <Button
      m="5"
      bgColor="#404142"
      onPress={() => {
        navigation.navigate('Attendance Index', {
          ready: Math.floor(Math.random() * 1000000)
        });
      }}
    ><Text fontFamily="Lexend_600" fontSize="16" color="#ffffff">Done</Text></Button>
    </Box>
   </VStack>
  )
}

export default CompletedAttendance