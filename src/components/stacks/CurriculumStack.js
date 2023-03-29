import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import CurriculumScreen from '../screens/Curriculum/CurriculumScreen'
import SkillList from "../screens/Curriculum/lists/SkillList";
  
const Stack = createStackNavigator()

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};

const CurriculumStack = ({route}) => {
    return (
      <Stack.Navigator screenOptions={TransitionScreenOptions}>
        <Stack.Screen name="Curriculum Index" component={CurriculumScreen}       
        options={{
          title: 'Curriculum',
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerTintColor: '#FDFDFD',
          headerTitleStyle: {
            fontFamily: 'Lexend_700',
            fontSize: 20
          },
        }} />
        <Stack.Screen name="Skill List" component={SkillList}
          options={({ route }) => ({
            title: `${route.params.name}`,
            skills: route.params.skills,
            headerTitleAlign: 'center',
            headerTransparent: true,
            headerTintColor: '#FDFDFD',
            headerTitleStyle: {
              fontFamily: 'Lexend_700',
              fontSize: 20
            },
          })} />
      </Stack.Navigator>
      
    )
  }
  
  export default CurriculumStack