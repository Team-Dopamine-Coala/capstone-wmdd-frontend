import IndexScreen from "../screens/Students/IndexScreen"
import StudentDetail from "../screens/Students/studentDetails/StudentDetail"
import ViewProfileScreen from "../screens/Students/viewProfile/ViewProfileScreen"

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
      <Stack.Screen 
        name="Student Profile" 
        component={ViewProfileScreen}
        options={({ route }) => ({
          title: 'Student Profile',
          headerBackTitle: 'Student List',
          headerTitleAlign: 'center'
        })}
      />

    </Stack.Navigator>
  )
}

export default StudentStack