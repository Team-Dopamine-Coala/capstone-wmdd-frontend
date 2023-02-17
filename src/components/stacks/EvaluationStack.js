import IndexScreen from "../screens/Evaluation/IndexScreen"
import EvaluationStudentListScreen from "../screens/Evaluation/EvaluationStudentListScreen"

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"

const Stack = createStackNavigator()

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};

const EvaluationStack = () => {
  return (
    <Stack.Navigator screenOptions={TransitionScreenOptions}>
      <Stack.Screen name="Evaluation Index" component={IndexScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Evaluation Student List"
        component={EvaluationStudentListScreen}
        options={({ route }) => ({
          title: 'Gymnastics Evaluation',
          headerBackTitle: 'Evaluation',
          headerTitleAlign: 'center'
        })}
      />
    </Stack.Navigator>
  )
}

export default EvaluationStack
