import IndexScreen from "../screens/Attendance/IndexScreen"
import AttendanceStudentList from "../screens/Attendance/Screens/AttendanceStudentList"
import CompletedAttendance from "../screens/Attendance/Screens/CompletedAttendance"
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
// import { useFocusEffect } from '@react-navigation/native';
// import * as React from 'react';
import { getClassesOfCoach, getAllAttendance } from '../../utils/queries';


const Stack = createStackNavigator()
// const {userToken} = useContext(AuthContext)
const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};

const AttendanceStack = () => {

    // useFocusEffect(
    //   React.useCallback(() => {
    //     alert('Screen was focused');
    //     // Do something when the screen is focused
    //     console.log("Screen was focused")
    //     getAllAttendance()
    //     // getClassesOfCoach('63fcf0bd354e8150f45dd4d2', userToken)
    //     return () => {
    //       alert('Screen was unfocused');
    //       // Do something when the screen is unfocused
    //       // Useful for cleanup functions
    //     };
    //   }, [])
    // );
  
 
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