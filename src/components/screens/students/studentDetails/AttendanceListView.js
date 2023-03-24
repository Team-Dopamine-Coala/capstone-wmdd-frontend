import { StyleSheet } from "react-native"
import { Text, VStack, Box, HStack } from "native-base"
import { useEffect, useContext, useState } from "react"
import moment from "moment"

import {getAllAttendance} from '../../../../utils/queries'
import { AuthContext } from '../../../context/AuthContext';

const AttendanceListView = ({student, navigation}) => {
  const [myAttendance, setMyAttendance] = useState([])
  const {userToken} = useContext(AuthContext)
  const MyStudentID = student._id
  const classid = student.class_id
  
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
    <VStack style={styles.container} bg="#FDFDFD" shadow={5}>
        <Text style={styles.title} fontFamily="Lexend_500">Attendance</Text>
        <HStack space={1} borderBottomWidth=".2" justifyContent="space-between" color="#BBBBBB" />
        {myAttendance.map((attend, i) => (
          <Box key={i} style={styles.datebox}>
            <Text style={styles.date} fontFamily="Lexend_400">{moment(attend.date).format('ddd, D MMM YYYY')}</Text>
            {(attend.present == true ? <Text style={styles.present} fontFamily="Lexend_400">Present</Text> : <Text style={styles.absent} fontFamily="Lexend_400">Absent</Text>)}
          </Box>
            // {(attend !== myAttendance.length -1)  ? <HStack space={1} mb={2} borderBottomWidth=".2" pb={2} justifyContent="space-between" /> : null }  
        ))}
    </VStack>
  )
}
const styles = StyleSheet.create ({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginTop: 20,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 18,
    lineHeight: 30,
    marginVertical: 8,
  },
  datebox:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 12,
    paddingRight: 10,
  },
  date:{
    fontSize: 16,
  },  
  absent: {
    fontSize: 16,
    lineHeight: 22,
    color: 'red'
  },
  present: {
    fontSize: 16,
    lineHeight: 22,
    color: '#000000'
  }
})
export default AttendanceListView