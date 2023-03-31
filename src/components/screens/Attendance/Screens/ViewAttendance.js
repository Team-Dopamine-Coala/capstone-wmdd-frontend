import { Box, FlatList, Text, VStack, Button } from "native-base"
import StudentList from "../ClassList/StudentList"
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext';
import { getAllAttendance, getStudentById } from '../../../../utils/queries';

const ViewAttendance = ({ route, students, navigation, checkboxHandler, allAttendance  }) => {
  const { viewclassId, present, absent } = route.params
  const { userToken } = useContext(AuthContext)
  const [presentList, setPresentList] = useState([]);
  const [absentList, setAbsentList] = useState([]);
  const [ready, setReady] = useState(false)

  useEffect(() => {
    getAllAttendance(viewclassId, userToken).then(
      data => {
        let presentListArray = [];
        let absentListArray = [];
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          getStudentById(viewclassId, element.studentId).then(
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
    <VStack bgColor="#FFFFFF" height="100%"  >
    <Box>
       <StudentList
       present={present}
       absent={absent}
       presentList={presentList}
       absentList={absentList}
       />
    </Box>
   </VStack>
        


  )
}

export default ViewAttendance