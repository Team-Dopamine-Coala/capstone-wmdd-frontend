import IndexScreen from "../screens/Evaluation/IndexScreen"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const EvaluationStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Evaluation Index" component={IndexScreen} />
    </Stack.Navigator>
  )
}

export default EvaluationStack
