import { View, Text, VStack, Box } from "native-base"
import { StyleSheet } from "react-native"
import { useEffect, useContext, useState } from "react"

import {getAllAttendance} from '../../../../utils/queries'
import { AuthContext } from '../../../context/AuthContext';


const AttendanceListView = ({student, navigation}) => {
  const [myAttendance, setMyAttendance] = useState([])
  const {userToken} = useContext(AuthContext)
  const MyStudentID = student._id
  const classid = student.class_id
  // console.log(student._id)

  useEffect(() => {
    getAllAttendance(classid,userToken)
      .then((data) => {
        setMyAttendance(data.filter(one => one.studentId === MyStudentID))
      })
  },[])

  return (
    <VStack style={styles.container}>
        <Text style={styles.title}>Attendance</Text>
        {myAttendance.map((attend, i) =>(
          <Box key={i}>
            <Text>{attend.date}</Text>
            {/* <Text>{(attend.present == true ? 'Present' : 'Absent')}</Text> */}
            {(attend.present == true ? <Text>Present</Text> : <Text style={styles.absent}>Absent</Text>)}
          </Box>
          
        ))}
    </VStack>
  )
}
const styles = StyleSheet.create ({
  container: {
    paddingVertical: 10,
    backgroundColor: '#bbb',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  absent: {
    color: 'red',
  }
})
export default AttendanceListView