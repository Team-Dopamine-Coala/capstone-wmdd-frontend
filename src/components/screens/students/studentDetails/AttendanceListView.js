import { StyleSheet } from "react-native"
import { Text, VStack, Box } from "native-base"
import { useEffect, useContext, useState } from "react"
import moment from "moment"

import {getAllAttendance} from '../../../../utils/queries'
import { AuthContext } from '../../../context/AuthContext';

const AttendanceListView = ({student, navigation}) => {
  const [myAttendance, setMyAttendance] = useState([])
  const {userToken} = useContext(AuthContext)
  const MyStudentID = student._id
  const classid = student.class_id
  // console.log(student._id)
  
  //日付の通常表示 attend.date.toDateString()
  // moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  // moment(attend.date).format('ddd, D MMM YYYY')

  useEffect(() => {
    getAllAttendance(classid,userToken)
      .then((data) => {
        setMyAttendance(data.filter(one => one.studentId === MyStudentID))
      })
  },[])
  
  return (
    <VStack style={styles.container} bg="#ffffff" borderRadius="md" shadow={5}>
        <Text style={styles.title}>Attendance</Text>
        {myAttendance.map((attend, i) =>(
          <Box key={i} style={styles.date}>
            <Text>{moment(attend.date).format('ddd, D MMM YYYY')}</Text>
            {(attend.present == true ? <Text>Present</Text> : <Text style={styles.absent}>Absent</Text>)}
          </Box>
          
        ))}
    </VStack>
  )
}
const styles = StyleSheet.create ({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical:24,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  absent: {
    color: 'red',
  },
  date:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
export default AttendanceListView