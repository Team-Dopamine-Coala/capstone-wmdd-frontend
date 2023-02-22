import { View, Text, Box } from "native-base"
import ReportView from "./ReportView"
import CurrentLevelView from "./CurrentLevelView"
import SkillsAchievementView from "./SkillsAchievementView"
import AttendanceListView from "./AttendanceListView"
import { StyleSheet } from "react-native"

const StudentDetail = ({route, navigation}) => {
const { trainee } = route.params
console.log('到着',trainee)
  return (
    <View style={styles.container}>
        <ReportView student={trainee}/>
        <CurrentLevelView student={trainee} />
        <SkillsAchievementView student={trainee} />
        <AttendanceListView student={trainee} />
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