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
          // headerStyle: {
          //   backgroundColor: 'orange'
          // },
        }}
      />
      <Stack.Screen 
        name="Class Page" 
        component={ClassPage}
        options={{
          title: 'My Classes',
          headerShown: false,
          // headerStyle: {
          //   backgroundColor: 'orange'
          // },
          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'Lexend_700',
            fontSize: 20
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
          headerTitleStyle:{
            fontFamily: 'Lexend_700',
            fontSize: 20
          },
          headerBackTitle: null,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default SettingStack