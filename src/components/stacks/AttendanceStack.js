import IndexScreen from "../screens/Attendance/IndexScreen"
import AttendanceStudentList from "../screens/Attendance/Screens/AttendanceStudentList"
import CompletedAttendance from "../screens/Attendance/Screens/CompletedAttendance"
import ViewAttendance from "../screens/Attendance/Screens/ViewAttendance"
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"


const Stack = createStackNavigator()
// const {userToken} = useContext(AuthContext)
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
          title: 'Jump',
          headerBackTitle: '',
          headerTitleAlign: 'center'
        })}
      />
       <Stack.Screen 
        name="Completed Attendance"
        component={CompletedAttendance}
        options={({ route }) => ({
          title: 'Jump',
          headerBackTitle: '',
          headerTitleAlign: 'center'
        })}
      />
        <Stack.Screen 
      name="View Attendance"
      component={ViewAttendance}
      options={({ route }) => ({
        title: 'Jump',
        headerBackTitle: '',
        headerTitleAlign: 'center'
      })}
      />
    </Stack.Navigator>
    
  )
}

export default AttendanceStack