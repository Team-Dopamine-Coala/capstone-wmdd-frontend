import React from 'react'
import {StyleSheet} from 'react-native'
import {Icon} from 'native-base'
import AppTabs from '../tabs/AppTabs'
import { Ionicons } from '@expo/vector-icons'

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
          headerRight: () => (
            <Icon size={4} as={<Ionicons name='create-outline' />} style={styles.icon}/>
          )
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
const styles = StyleSheet.create ({
  icon:{
    color: '#FDFDFD',
    marginRight: 21.68,
    width: 19.32,
    height: 20.64,
    fontSize:20,
    lineHeight: 20,
  },

})
export default PageNavs