import { StyleSheet } from "react-native"
import { Text, VStack, Box, HStack } from "native-base"
import { useEffect, useContext, useState } from "react"
import { Ionicons } from '@expo/vector-icons'
import moment from "moment"

import {getAllAttendance} from '../../../../utils/queries'
import { AuthContext } from '../../../context/AuthContext';

const AttendanceListView = ({ student }) => {
  const [myAttendance, setMyAttendance] = useState([])
  const {userToken} = useContext(AuthContext)
  const MyStudentID = student._id
  const classid = student.class_id

  useEffect(() => {
    getAllAttendance(classid,userToken)
      .then((data) => {
        setMyAttendance(data.filter(one => one.studentId === MyStudentID))
      })
  },[])
  
  return (
    <VStack style={styles.container} bg="#FDFDFD" shadow={5}>
        <Text style={styles.title}>Attendance</Text>
        <HStack space={1} borderBottomWidth=".2" justifyContent="space-between" color="#BBBBBB" />
        {myAttendance.map((attend, i) => (
          <Box key={i} style={styles.datebox}>
            <Text style={styles.date}>{moment(attend.date).format('ddd, D MMM YYYY')}</Text>
            {(attend.present == true ? <Text style={styles.present}>Present</Text> : <Text style={styles.absent}>Absent</Text>)}
          </Box>
            // {(attend !== myAttendance.length -1)  ? <HStack space={1} mb={2} borderBottomWidth=".2" pb={2} justifyContent="space-between" /> : null }  
        ))}
    </VStack>
  )
}
const styles = StyleSheet.create ({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginTop: 20,
    marginHorizontal: 5,
  },
  title: {
    // fontFamily: 'Lexend',
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 30,
    marginBottom: 8,
  },
  datebox:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 12,
    paddingRight: 10,
  },
  absent: {
    // fontFamily: 'Lexend',
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22,
    color: 'red'
  },
  present: {
    // fontFamily: 'Lexend',
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22,
    color: '#000000'
  }
})
export default AttendanceListView