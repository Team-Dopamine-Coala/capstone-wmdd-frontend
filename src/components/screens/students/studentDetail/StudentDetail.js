import { View, Text, Box } from "native-base"
import ReportView from "./ReportView"
import CurrentLevelView from "./CurrentLevelView"
import SkillsAchievementView from "./SkillsAchievementView"
import AttendanceListView from "./AttendanceListView"

const StudentDetail = ({item, navigation}) => {
// const student = item.
console.log('到着',student)
  return (
    <View>
        <ReportView student={student}/>
        <CurrentLevelView student={student} />
        <SkillsAchievementView student={student} />
        <AttendanceListView student={student} />
    </View>
  )
}

export default StudentDetail