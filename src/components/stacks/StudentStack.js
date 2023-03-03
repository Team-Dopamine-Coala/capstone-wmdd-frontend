import IndexScreen from "../screens/students/IndexScreen"
import StudentDetail from "../screens/students/studentDetails/StudentDetail"
import ViewProfileScreen from "../screens/students/viewProfile/ViewProfileScreen"

import { createStackNavigator } from "@react-navigation/stack"


const Stack = createStackNavigator()


const StudentStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Student Index" component={IndexScreen} />
      <Stack.Screen 
        name="Student Detail" 
        component={StudentDetail}
        options={({ route }) => ({
          title: 'Student Profile',
          headerBackTitle: 'Student List',
          headerTitleAlign: 'center'
        })}
      />
      <Stack.Screen name="Student Profile" component={ViewProfileScreen}/>
    </Stack.Navigator>
  )
}

export default StudentStack