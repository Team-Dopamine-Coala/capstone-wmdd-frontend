import { Box, FlatList, Text, VStack, Button } from "native-base"
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
    <VStack>
    <Box>
       <StudentList
        present={presentList.length}
        absent={absentList.length}
        presentList={presentList}
        absentList={absentList}
       />
    </Box>
     <Button
     bgColor="#404142"
     onPress={() => {
       navigation.navigate('Attendance Index', {
        ready: Math.floor(Math.random() * 1000000)
      });
     }}
   ><Text fontWeight="700" color="#ffffff">Done</Text></Button>
   </VStack>
        


  )
}

export default CompletedAttendance