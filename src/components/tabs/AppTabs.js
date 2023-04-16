import AttendanceStack from '../stacks/AttendanceStack'
import EvaluationStack from '../stacks/EvaluationStack';
import ReportStack from '../stacks/ReportStack';
import StudentStack from '../stacks/StudentStack';
import CurriculumStack from '../stacks/CurriculumStack';
import SettingStack from '../stacks/SettingStack';
import AttendanceOutline from '../svg/AttendanceOutline';
import EvaluationOutline from '../svg/EvaluationOutline';
import ReportOutline from '../svg/ReportOutline';
import CurriculumOutline from '../svg/CurriculumOutline';
import StudentsOutline from '../svg/StudentsOutline';
import AttendanceFilled from '../svg/AttendanceFilled';
import EvaluationFilled from '../svg/EvaluationFilled';
import ReportFilled from '../svg/ReportFilled';
import CurriculumFilled from '../svg/CurriculumFilled';
import StudentsFilled from '../svg/StudentsFilled';

import { Ionicons, createIconSetFromFontello } from '@expo/vector-icons'
import { Image, Icon, View, Box, Text } from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import HeaderImage from '../layout/HeaderImage';

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
                tabBarStyle:{ height: 105, backgroundColor: '#EFF8F8' }
            })}
      >
        <Tab.Screen name="Attendance" component={AttendanceStack} options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon size={5} mt={5} ml={2} color={color} as={ focused ? <AttendanceFilled /> : <AttendanceOutline />} />
          )
        }} />
        <Tab.Screen name="Evaluation" component={EvaluationStack} options={{
          tabBarIcon: ({ color, focused  }) => (
            <Icon size={5} mt={5} ml={2} color={color} as={ focused ? <EvaluationFilled /> : <EvaluationOutline />} />
          )
        }} />
        <Tab.Screen name="Reports" component={ReportStack} options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon size={5} mt={5} ml={2} color={color} as={ focused ? <ReportFilled /> : <ReportOutline />} />
          )
        }} />
        <Tab.Screen name="Curriculum" component={CurriculumStack} options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon size={5} mt={5} ml={2} color={color} as={ focused ? <CurriculumFilled /> : <CurriculumOutline />} />
          )
        }} />
        <Tab.Screen name="Students" component={StudentStack} options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon size={5} mt={5} ml={2} color={color} as={ focused ? <StudentsFilled /> : <StudentsOutline />} />
          )
        }} />
      </Tab.Navigator>
    </>
  )
}

export default AppTabs