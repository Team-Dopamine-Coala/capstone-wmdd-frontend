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
        options={{
          // title: 'Students',
          headerTitleAlign: 'center',
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: 'orange'
          },
          headerTitle: () => ( 
            <HeaderImage/>
          ),
        }}
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
            color: '#fff'
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
            backgroundColor: 'orange'
          },
          headerBackTitle: null,
          headerBackTitleVisible: false,
          headerTitleStyle: {
            color: '#fff'
          },
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  )
}

export default StudentStack