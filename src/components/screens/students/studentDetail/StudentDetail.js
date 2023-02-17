import { View, Text, Box } from "native-base"
import ReportView from "./ReportView"
import CurrentLevelView from "./CurrentLevelView"
import SkillsAchievementView from "./SkillsAchievementView"
import AttendanceListView from "./AttendanceListView"

const StudentDetail = () => {
const student = item.props
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