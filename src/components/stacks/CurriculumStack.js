import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import CurriculumScreen from '../screens/Curriculum/CurriculumScreen'

const Stack = createStackNavigator()

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};

const CurriculumStack = () => {
    return (
      <Stack.Navigator screenOptions={TransitionScreenOptions}>
        <Stack.Screen name="Curriculum Index" component={CurriculumScreen}       
        options={{
          title: 'Curriculum',
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerTintColor: '#ffffff'
        }} />
        {/* <Stack.Screen 
          name="Attendance Student List"
          component={AttendanceStudentList}
          options={({ route }) => ({
            title: 'Gymnastics',
            // headerBackTitle: 'Attendance',
            headerTitleAlign: 'center'
          })}
        /> */}
      </Stack.Navigator>
      
    )
  }
  
  export default CurriculumStack