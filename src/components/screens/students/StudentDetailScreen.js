import { View, Button, Text } from "native-base"
import StudentDetail from "./studentDetail/StudentDetail"

const StudentDetailScreen = ({navigation}) => {
  return (
    <View>
      <StudentDetail navigation={navigation}/>
    </View>
  )
}

export default StudentDetailScreen

