import React from 'react'
import AppTabs from '../tabs/AppTabs'

import { createStackNavigator } from "@react-navigation/stack"
import SettingIndexScreen from '../screens/Setting/SettingIndexScreen'
import ClassDetail from '../screens/Setting/Class/ClassDetail'
import ClassPage from '../screens/Setting/Class/ClassPage'
const Stack = createStackNavigator()

const PageNavs = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AppTab"
        component={AppTabs}
        options={{ headerShown: false }}
      />

      <Stack.Screen 
        name="Setting Index" 
        component={SettingIndexScreen}
        options={{
          title: 'Settings',
          headerTitleAlign: 'center',
          headerBackTitle: null,
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTintColor: '#FDFDFD',
          headerTitleStyle: {
            fontFamily: 'Lexend_700',
            fontSize: 20
          },
        }}
      />
      <Stack.Screen 
        name="Class Page" 
        component={ClassPage}
        options={{
          title: 'My Classes',
          headerTitleAlign: 'center',
          headerBackTitle: null,
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTintColor: '#FDFDFD',
          headerTitleStyle: {
            fontFamily: 'Lexend_700',
            fontSize: 20
          },
        }}
      />
      <Stack.Screen 
        name="Detailers" 
        component={ClassDetail}
        options={{
          title:null,
          headerTransparent: true,
          headerTintColor: '#000000',
          headerBackTitle: null,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default PageNavs