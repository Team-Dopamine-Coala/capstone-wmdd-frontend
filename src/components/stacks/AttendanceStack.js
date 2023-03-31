import IndexScreen from "../screens/Attendance/IndexScreen"
import AttendanceStudentList from "../screens/Attendance/Screens/AttendanceStudentList"
import CompletedAttendance from "../screens/Attendance/Screens/CompletedAttendance"
import ViewAttendance from "../screens/Attendance/Screens/ViewAttendance"
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import HeaderImage from '../layout/HeaderImage'
import { Text} from "native-base";


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
          title: `${route.params.classTitle}`,
          headerBackTitle: '',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Lexend_700',
            fontSize: 20
          },
          headerRight: () => (
            <Text >Select All   </Text>
          )
        })}
      />
       <Stack.Screen 
        name="Completed Attendance"
        component={CompletedAttendance}
        options={({ route }) => ({
          title: `${route.params.classTitle}`,
          headerBackTitle: '',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Lexend_700',
            fontSize: 20
          }
        })}
      />
        <Stack.Screen 
      name="View Attendance"
      component={ViewAttendance}
      options={({ route }) => ({
        title: `${route.params.classTitle}`,
        headerBackTitle: '',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'Lexend_700',
          fontSize: 20
        }
        
      })}
      />
    </Stack.Navigator>
    
  )
}

export default AttendanceStack