import { Pressable, Image } from 'native-base'
import IndexScreen from "../screens/Evaluation/IndexScreen"
import EvaluationStudentListScreen from "../screens/Evaluation/EvaluationStudentListScreen"
import EvaluationIndividualStudent from "../screens/Evaluation/EvaluationIndividualStudent"
import EvaluationIndividualStudentComment from "../screens/Evaluation/EvaluationIndividualStudentComment"

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
          headerTintColor: '#FDFDFD',
          headerTitleStyle: {
            fontFamily: 'Lexend_700',
            fontSize: 20
          },
          // headerRight: () => (
          //   <Image />
          // )
        }}
      />
      <Stack.Screen
        name="Evaluation Student List"
        component={EvaluationStudentListScreen}
        options={({ route }) => ({
          title: `${route.params.className} Evaluation`,
          headerBackTitle: '',
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerTintColor: '#FDFDFD',
          headerTitleStyle: {
            fontFamily: 'Lexend_700',
            fontSize: 20
          },
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
      <Stack.Screen
        name="Evaluation Individual Student Comment"
        component={EvaluationIndividualStudentComment}
        options={({ route }) => ({
          title: 'Add Feedback',
          headerTitleAlign: 'center',
          headerBackTitle: '',
          headerTitleStyle: {
            fontFamily: 'Lexend_500',
            fontSize: 20
          },
          studentId: route.params.studentId,
          studentName: route.params.studentName,
          classId: route.params.classId,
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