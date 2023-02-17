import CurriculumScreen from "./CurriculumScreen";
import StudentsScreen from "./students/StudentsScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

const AttendanceScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Test 1" component={CurriculumScreen} />
      <Stack.Screen name="Test 2" component={StudentsScreen} />
    </Stack.Navigator>
  )
}

export default AttendanceScreen