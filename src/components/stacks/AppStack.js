import React from 'react'
import { View } from 'native-base'
import StudentDetailScreen from '../screens/Students/StudentDetailScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StudentDetail from '../screens/Students/studentDetail/StudentDetail'

const Stack = createNativeStackNavigator()
const AppStack = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
            name="StudentDetailStack"
            component={StudentDetailScreen}
            options={{
                title: 'Student Detail',
                headerStyle: {
                    backgroundColor: '#00264d'
                },
                headerTitleStyle: {
                    color: 'white'
                }
            }}
        />
    </Stack.Navigator>
</NavigationContainer>
  )
}

export default AppStack