import IndexScreen from "../screens/Students/IndexScreen"
import StudentDetail from "../screens/Students/studentDetails/StudentDetail"
import ViewProfileScreen from "../screens/Students/viewProfile/ViewProfileScreen"

import { createStackNavigator } from "@react-navigation/stack"


const Stack = createStackNavigator()


const StudentStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="Student Index" 
        component={IndexScreen}
        options={{
          title: 'Student List',
          headerStyle: {
            backgroundColor: '#2c3e50'
          },
          headerTitleStyle: {
            color: '#fff'
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen 
        name="Student Detail" 
        component={StudentDetail}
        options={{
          title: 'Student Profile',
          headerStyle: {
            backgroundColor: '#2c3e50'
          },
          headerTitleStyle: {
            color: '#fff'
          },
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen 
        name="Student Profile" 
        component={ViewProfileScreen}
        options={{
          title: 'Student Profile',
          headerStyle: {
            backgroundColor: '#2c3e50'
          },
          headerTitleStyle: {
            color: '#fff'
          },
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  )
}

export default StudentStack