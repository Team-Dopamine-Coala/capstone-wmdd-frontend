import IndexScreen from "../screens/Evaluation/IndexScreen"
import EvaluationStudentListScreen from "../screens/Evaluation/EvaluationStudentListScreen"
import EvaluationIndividualStudent from "../screens/Evaluation/EvaluationIndividualStudent"

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"

const Stack = createStackNavigator()

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};

const EvaluationStack = () => {
  return (
    <Stack.Navigator screenOptions={TransitionScreenOptions}>
      <Stack.Screen name="Evaluation Index" component={IndexScreen}
        options={{
          title: 'Evaluation',
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerTintColor: '#ffffff'
        }}
      />
      <Stack.Screen
        name="Evaluation Student List"
        component={EvaluationStudentListScreen}
        options={({ route }) => ({
          title: `${route.params.className} Evaluation`,
          headerBackTitle: '',
          headerTitleAlign: 'center',
          classId: route.params.classId,
          className: route.params.className
        })}
      />
      <Stack.Screen
        name="Evaluation Individual Student"
        component={EvaluationIndividualStudent}
        options={({ route }) => ({
          title: '',
          headerBackTitle: '',
          studentsList: route.params.students,
          className: route.params.className
        })}
      />
    </Stack.Navigator>
  )
}

export default EvaluationStack

// const EvaluationStack = () => {
//   return (
//     <View p={5}>
//       <Box width="100%" height="100px" position="relative">
//         <Box bg="#ffc0cb" width="100%" height="90%" borderRadius="md" shadow={9} position="absolute" top="5%">
//         </Box>
//         <Box ml={4} p={3} bg="#ffffff" flex={1} height="100%" borderRadius="md" shadow={5}>
//           <Text>Hello World</Text>
//         </Box>
//       </Box>
//     </View>
//   )
// }