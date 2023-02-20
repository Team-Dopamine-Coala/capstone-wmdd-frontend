import StudentDetail from "../screens/students/studentDetails/StudentDetail"

import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()


const StudentStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Student Detail" component={StudentDetail}/>
    </Stack.Navigator>
  )
}

export default StudentStack