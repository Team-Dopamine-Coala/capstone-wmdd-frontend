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
          headerBackTitle: null,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default PageNavs
