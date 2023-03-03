import IndexScreen from "../screens/Attendance/IndexScreen"
import AttendanceStudentList from "../screens/Attendance/Screens/AttendanceStudentList"

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"

const Stack = createStackNavigator()

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};

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
    </Stack.Navigator>
    
  )
}

export default AttendanceStack