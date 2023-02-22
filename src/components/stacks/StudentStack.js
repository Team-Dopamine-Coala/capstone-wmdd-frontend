import IndexScreen from "../screens/Students/IndexScreen"
import StudentDetail from "../screens/Students/studentDetails/StudentDetail"
// import StudentsScreen from "../screens/Students/StudentsScreen"

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
          title: 'Student Page',
          headerBackTitle: 'Student List',
          headerTitleAlign: 'center'
        })}
      />
    </Stack.Navigator>
  )
}

export default StudentStack