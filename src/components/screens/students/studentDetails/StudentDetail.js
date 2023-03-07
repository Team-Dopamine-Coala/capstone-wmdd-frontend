import { View, Text } from "native-base"
import { StyleSheet } from "react-native"
import { useContext, useState, useEffect} from "react"

import ReportView from "./ReportView"
import CurrentLevelView from "./CurrentLevelView"
import SkillsAchievementView from "./SkillsAchievementView"
import AttendanceListView from "./AttendanceListView"
import ViewReport from "./ViewReport"

import { AuthContext } from '../../../context/AuthContext'
import {getSingleClass} from '../../../../utils/queries'

const StudentDetail = ({route, navigation }) => {
const { trainee } = route.params
const {userToken} = useContext(AuthContext)
const [classTitle, setClassTitle] = useState('')
const [classData, setClassData] = useState('')

//class ID
const classid = trainee.class_id
//user ID
const userid = '63fcf0bd354e8150f45dd4d2'

//Fetch Class for ClassTab & CurrentLevelView
useEffect(() => {
  getSingleClass(userid,classid,userToken)
    .then((data) => {
      console.log('class',data)
      setClassTitle(data.title)
      setClassData(data)
    })
},[])

  return (
    <View style={styles.container}>
        {<Text>{classTitle}</Text>}
        <ReportView student={trainee} navigation={navigation}/>
        <CurrentLevelView student={trainee} classData={classData} classTitle={classTitle}/>
        {/* <SkillsAchievementView student={trainee} /> */}
        <AttendanceListView student={trainee} /> 
        <ViewReport student={trainee}/>
    </View>
  )
}
const styles = StyleSheet.create ({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  }
})
export default StudentDetail