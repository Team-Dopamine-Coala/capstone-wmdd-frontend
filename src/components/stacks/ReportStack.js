import IndexScreen from "../screens/Report/IndexScreen"

import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()

const ReportStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Report Index" component={IndexScreen} />
    </Stack.Navigator>
  )
}

export default ReportStack