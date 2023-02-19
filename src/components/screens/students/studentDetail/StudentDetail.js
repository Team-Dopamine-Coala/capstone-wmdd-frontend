import { View, Text, Box } from "native-base"
import ReportView from "./ReportView"
import CurrentLevelView from "./CurrentLevelView"
import SkillsAchievementView from "./SkillsAchievementView"
import AttendanceListView from "./AttendanceListView"

const StudentDetail = ({trainee, navigation}) => {
// const student = trainee
console.log('到着',trainee)
  return (
    <View>
        <ReportView student={trainee}/>
        <CurrentLevelView student={trainee} />
        <SkillsAchievementView student={trainee} />
        <AttendanceListView student={trainee} />
    </View>
  )
}

export default StudentDetail