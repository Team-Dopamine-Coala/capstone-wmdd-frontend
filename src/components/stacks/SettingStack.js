import IndexScreen from "../screens/Setting/IndexScreen"
import ClassPage from "../screens/Setting/Class/ClassPage"
import ClassDetail from "../screens/Setting/Class/ClassDetail"
import { createStackNavigator } from "@react-navigation/stack"


const Stack = createStackNavigator()


const StudentStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen 
        name="Setting Index" 
        component={IndexScreen}
        options={{
          title: 'Settings',
          headerTitleAlign: 'center',
          // headerTransparent: true,
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: 'orange'
          },
        }}
      />
      <Stack.Screen 
        name="Class Page" 
        component={ClassPage}
        options={{
          title: 'My Classes',
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
        name="Class Detail" 
        component={ClassDetail}
        options={{
          headerStyle: {
            backgroundColor: 'pulple'
          },
          headerBackTitle: null,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default StudentStack