import IndexScreen from "../screens/Attendance/IndexScreen"
import AttendanceStudentList from "../screens/Attendance/Screens/AttendanceStudentList"
import CompletedAttendance from "../screens/Attendance/Screens/CompletedAttendance"
import ViewAttendance from "../screens/Attendance/Screens/ViewAttendance"
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import HeaderImage from '../layout/HeaderImage'
import { Text, Button} from "native-base";
import { selectAllCheckbox } from "../screens/Attendance/Screens/AttendanceStudentList"


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
          headerTitleAlign: 'center',
          headerTintColor: '#667080',
          headerBackTitle: null,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Lexend_500',
            fontSize: 16,
            color:'#000000'
          },
          headerRight: () => (
            <Button bgColor= "#ffffff" onPress={selectAllCheckbox} ><Text color="#737373" fontFamily="Lexend_400" fontSize="14">Select All</Text></Button>
          )
        })}
      />
       <Stack.Screen 
        name="Completed Attendance"
        component={CompletedAttendance}
        options={({ route }) => ({
          title: `${route.params.classTitle}`,
          headerTitleAlign: 'center',
          headerTintColor: '#667080',
          headerBackTitle: null,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Lexend_500',
            fontSize: 16,
            color:'#000000'
          },
          headerRight: () => (
            <Text color="#000000" fontFamily="Lexend_400" fontSize="16" marginRight="16px">Edit</Text>
          )
        })}
      />
        <Stack.Screen 
      name="View Attendance"
      component={ViewAttendance}
      options={({ route }) => ({
        title: `${route.params.classTitle}`,
        headerTitleAlign: 'center',
        headerTintColor: '#667080',
        headerBackTitle: null,
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontFamily: 'Lexend_500',
          fontSize: 16,
          color:'#000000'
        },
        headerRight: () => (
          <Text color="#000000" fontFamily="Lexend_400" fontSize="16" marginRight="16px">Edit</Text>
        )
      })}
      />
    </Stack.Navigator>
    
  )
}

export default AttendanceStack