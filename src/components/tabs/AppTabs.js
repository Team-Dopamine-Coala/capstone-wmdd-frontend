import AttendanceScreen from '../screens/AttendanceScreen'
import EvaluationStack from '../stacks/EvaluationStack';
import ReportsScreen from '../screens/ReportsScreen';
import CurriculumScreen from '../screens/CurriculumScreen';
import StudentsScreen from '../screens/StudentsScreen';

import { Ionicons } from '@expo/vector-icons'
import { Icon } from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        {/* <Tab.Screen name="Attendance" component={AttendanceScreen} options={{
          tabBarIcon: ({ color }) => (
            <Icon size={5} ml={2} color={color} as={<Ionicons name='ios-search' />} />
          )
        }} /> */}
        <Tab.Screen name="Evaluation" component={EvaluationStack} />
        <Tab.Screen name="Reports" component={ReportsScreen} />
        <Tab.Screen name="Curriculum" component={CurriculumScreen} />
        <Tab.Screen name="Students" component={StudentsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppTabs