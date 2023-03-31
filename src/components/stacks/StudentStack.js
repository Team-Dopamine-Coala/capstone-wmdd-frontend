import IndexScreen from "../screens/Students/IndexScreen"
import StudentDetail from "../screens/Students/studentDetails/StudentDetail"
import ViewProfileScreen from "../screens/Students/viewProfile/ViewProfileScreen"
import HeaderImage from "../layout/HeaderImage"

import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()

const StudentStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen 
        name="Student Index" 
        component={IndexScreen}
        options={({ navigation }) => ({
          headerTitleAlign: 'center',
          headerTransparent: true,
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
          headerTitleAlign: 'center',
          headerBackTitle: null,
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTintColor: '#FDFDFD',
          headerTitleStyle: {
            color: '#FDFDFD',
            fontFamily:"Lexend_700",
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen 
        name="Student Profile" 
        component={ViewProfileScreen}
        options={{
          title: 'Student Profile',
          headerTitleAlign: 'center',
          headerBackTitle: null,
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTintColor: '#FDFDFD',
          headerTitleStyle: {
            color: '#FDFDFD',
            fontFamily:"Lexend_700",
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  )
}
export default StudentStack