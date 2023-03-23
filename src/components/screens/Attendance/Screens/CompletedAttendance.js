import { Box, FlatList, Text, VStack, Button } from "native-base"
import StudentList from "../ClassList/StudentList"
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext';
import { getAllAttendance } from '../../../../utils/queries';

const CompletedAttendance = ({ route, students, navigation, checkboxHandler, allAttendance  }) => {
  const { classId } = route.params
  const { userToken } = useContext(AuthContext)
  const [presentList, setPresentList] = useState([]);
  const [absentList, setAbsentList] = useState([]);
  console.log( classId )

  useEffect(() => {
    getAllAttendance(classId, userToken).then(
      data => {
        let presentListArray = [];
        let absentListArray = [];
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          console.log(element.present)
          if(element.present==true){
            presentListArray.push(element)
          } else {
            absentListArray.push(element)
          }
        }
        setPresentList(presentListArray)
        setAbsentList(absentListArray)
      },
      error => {
        throw error
      }
    )
    
  }, [])

  
  
  return (
    <VStack>
    <Box>
       <StudentList
        present={present}
        absent={absent}
        presentList={presentList}
        absentList={absentList}
       />
    </Box>
     <Button
     bgColor="#404142"
     onPress={() => {
       navigation.navigate('Attendance Index', {
        // allAttendance: allAttendance,
        ready: Math.floor(Math.random() * 1000000)
      });
     }}
   ><Text fontWeight="700" color="#ffffff">Done</Text></Button>
   </VStack>
        


  )
}

export default CompletedAttendance