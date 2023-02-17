import AttendanceScreen from '../screens/AttendanceScreen'
import EvaluationStack from '../stacks/EvaluationStack';
import ReportsScreen from '../screens/ReportsScreen';
import CurriculumScreen from '../screens/CurriculumScreen';
import StudentsScreen from '../screens/students/StudentsScreen';

import { Ionicons } from '@expo/vector-icons'
import { Icon, View, Box, Text } from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { BlurView } from 'expo-blur';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Attendance" component={AttendanceScreen} options={{
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
        <Tab.Screen name="Students" component={StudentStack} options={{
          tabBarIcon: ({ color }) => (
            <Icon size={5} color={color} as={<Ionicons name='ios-people' />} />
          )
        }} />
        <Tab.Screen name="Evaluation" component={EvaluationStack} />
        <Tab.Screen name="Reports" component={ReportsScreen} />
        <Tab.Screen name="Curriculum" component={CurriculumScreen} />
        <Tab.Screen name="Students" component={StudentsScreen} />
      </Tab.Navigator>
  )
}

export default AppTabs