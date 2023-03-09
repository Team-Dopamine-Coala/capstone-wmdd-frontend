import IndexScreen from "../screens/Attendance/IndexScreen"
import AttendanceStudentList from "../screens/Attendance/Screens/AttendanceStudentList"
import CompletedAttendance from "../screens/Attendance/Screens/CompletedAttendance"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const AttendanceStack = () => {
  return (
    <Stack.Navigator screenOptions={TransitionScreenOptions}>
      <Stack.Screen name="Attendance Index" component={IndexScreen} options={{ headerShown: false }} />
      <Stack.Screen 
        name="Attendance Student List"
        component={AttendanceStudentList}
        options={({ route }) => ({
          title: 'Gymnastics',
          // headerBackTitle: 'Attendance',
          headerTitleAlign: 'center'
        })}
      />
       <Stack.Screen 
        name="Completed Attendance"
        component={CompletedAttendance}
        options={({ route }) => ({
          title: 'Gymnastics',
          // headerBackTitle: 'Attendance',
          headerTitleAlign: 'center'
        })}
      />
    </Stack.Navigator>
  )
}

export default AttendanceStack