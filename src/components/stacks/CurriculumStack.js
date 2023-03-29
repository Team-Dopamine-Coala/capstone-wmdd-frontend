import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import CurriculumScreen from '../screens/Curriculum/CurriculumScreen'
import SkillList from "../screens/Curriculum/lists/SkillList";
<<<<<<< HEAD
import HeaderImage from "../layout/HeaderImage";
=======
>>>>>>> 79c27b5 (updated styles)
  
const Stack = createStackNavigator()

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};

const CurriculumStack = ({route}) => {
    return (
      <Stack.Navigator screenOptions={TransitionScreenOptions}>
        <Stack.Screen name="Curriculum Index" component={CurriculumScreen}    
        options={({ navigation }) => ({
          title: 'Curriculum',
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerTintColor: '#FDFDFD',
          headerTitleStyle: {
            fontFamily: 'Lexend_700',
            fontSize: 20
          },
          headerRight: () => (
            <HeaderImage navigations={navigation}/>
          )
        })} />
        <Stack.Screen name="Skill List" component={SkillList}
          options={({ route, navigation }) => ({
            title: `${route.params.name}`,
            skills: route.params.skills,
            headerTitleAlign: 'center',
            headerTransparent: true,
            headerTintColor: '#ffffff'
          })} />
      </Stack.Navigator>
      
    )
  }
  
  export default CurriculumStack