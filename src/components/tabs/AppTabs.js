import AttendanceStack from '../stacks/AttendanceStack'
import EvaluationStack from '../stacks/EvaluationStack';
import ReportStack from '../stacks/ReportStack';
import CurriculumScreen from '../screens/Curriculum/CurriculumScreen';
import StudentsScreen from '../screens/StudentsScreen';

import { Ionicons } from '@expo/vector-icons'
import { Icon, View, Box, Text } from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
      <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#655AE9',
                tabBarInactiveTintColor: '#667080',
                tabBarStyle:{ position: 'absolute', height: 80 },
                tabBarLabelStyle:{ paddingBottom: 6, fontSize: 12 }
            })}
      >
        <Tab.Screen name="Attendance" component={AttendanceStack} options={{
          tabBarIcon: ({ color }) => (
            <Icon size={5} color={color} as={<Ionicons name='ios-calendar' />} />
          )
        }} />
        <Tab.Screen name="Evaluation" component={EvaluationStack} options={{
          tabBarIcon: ({ color }) => (
            <Icon size={5} color={color} as={<Ionicons name='ios-list' />} />
          )
        }} />
        <Tab.Screen name="Reports" component={ReportStack} options={{
          tabBarIcon: ({ color }) => (
            <Icon size={5} color={color} as={<Ionicons name='ios-copy' />} />
          )
        }} />
        <Tab.Screen name="Curriculum" component={CurriculumScreen} options={{
          tabBarIcon: ({ color }) => (
            <Icon size={5} color={color} as={<Ionicons name='ios-bookmarks' />} />
          )
        }} />
        <Tab.Screen name="Students" component={StudentsScreen} options={{
          tabBarIcon: ({ color }) => (
            <Icon size={5} color={color} as={<Ionicons name='ios-people' />} />
          )
        }} />
      </Tab.Navigator>
  )
}

export default AppTabs