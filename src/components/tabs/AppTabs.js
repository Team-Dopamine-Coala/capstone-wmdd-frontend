import AttendanceStack from '../stacks/AttendanceStack'
import EvaluationStack from '../stacks/EvaluationStack';
import ReportStack from '../stacks/ReportStack';
import StudentStack from '../stacks/StudentStack';
import CurriculumStack from '../stacks/CurriculumStack';

import { Ionicons, createIconSetFromFontello } from '@expo/vector-icons'
import { Image, Icon, View, Box, Text } from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <>
      <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#FE7F2D',
                tabBarInactiveTintColor: '#404142',
                tabBarLabelStyle:{ paddingBottom: 6, fontFamily: 'Lexend_400', fontSize: 12, marginBottom: 5 },
                tabBarStyle:{ height: 100, backgroundColor: '#EFF8F8' }
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
        <Tab.Screen name="Curriculum" component={CurriculumStack} options={{
          tabBarIcon: ({ color }) => (
            <Icon size={5} color={color} as={<Ionicons name='ios-bookmarks' />} />
          )
        }} />
        <Tab.Screen name="Students" component={StudentStack} options={{
          tabBarIcon: ({ color }) => (
            <Icon size={5} color={color} as={<Ionicons name='ios-people' />} />
          )
        }} />
      </Tab.Navigator>
    </>
  )
}

export default AppTabs