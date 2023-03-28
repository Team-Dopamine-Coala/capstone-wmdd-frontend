import SettingIndexScreen from "../screens/Setting/SettingIndexScreen"
import ClassPage from "../screens/Setting/Class/ClassPage"
import ClassDetail from "../screens/Setting/Class/ClassDetail"

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"

const Stack = createStackNavigator()

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};

const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={TransitionScreenOptions}>
      <Stack.Screen 
        name="Setting Index" 
        component={SettingIndexScreen}
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
            backgroundColor: 'purple'
          },
          // header: null,
          headerBackTitle: null,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default SettingStack