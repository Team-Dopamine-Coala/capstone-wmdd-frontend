import IndexScreen from "../screens/Attendance/IndexScreen"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const AttendanceStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Attendance Index" component={IndexScreen} />
    </Stack.Navigator>
  )
}

export default AttendanceStack