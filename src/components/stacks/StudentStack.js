import IndexScreen from "../screens/Students/IndexScreen"
import StudentDetail from "../screens/Students/studentDetails/StudentDetail"
import ViewProfileScreen from "../screens/Students/viewProfile/ViewProfileScreen"
import HeaderImage from "../layout/HeaderImage"

import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()


const StudentStack = ({navigation}) => {
  return (
    <Stack.Navigator >
      <Stack.Screen 
        name="Student Index" 
        component={IndexScreen}
        options={({ navigation }) => ({
          headerTitleAlign: 'center',
          // headerTransparent: true,
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTitleStyle: {
            color: '#FDFDFD',
            fontFamily:"Lexend_700",
            fontSize: 20,
          },
          headerTitle: 'Students',
          headerRight: () => ( 
            <HeaderImage navigations={navigation} />
          ),
        })}
      />
      <Stack.Screen 
        name="Student Detail" 
        component={StudentDetail}
        options={{
          title: 'Student Profile',
          headerStyle: {
            backgroundColor: 'orange'
          },
          headerTitleStyle: {
            color: '#FDFDFD',
            fontFamily:"Lexend_700",
            fontSize: 20,
          },
          headerTitleAlign: 'center',
          headerBackTitle: null,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen 
        name="Student Profile" 
        component={ViewProfileScreen}
        options={{
          title: 'Student Profile',
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerBackTitle: null,
          headerBackTitleVisible: false,
          headerTitleStyle: {
            color: '#FDFDFD',
            fontFamily:"Lexend_700",
            fontSize: 20,
          },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  )
}

export default StudentStack