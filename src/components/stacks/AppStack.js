import React from 'react'
import { View } from 'native-base'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUpScreenTwo from '../screens/SignUpScreenTwo';


const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUpFormTwo" component={SignUpScreenTwo} />
    </Stack.Navigator>
    // <View>Hey</View>
  )
}

export default AppStack