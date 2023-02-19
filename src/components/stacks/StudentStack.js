import StudentDetail from "../screens/students/studentDetail/StudentDetail"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const StudentStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StudentDetail" component={StudentDetail}/>
    </Stack.Navigator>
  )
}

export default StudentStack