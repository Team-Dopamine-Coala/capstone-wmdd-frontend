import IndexScreen from "../screens/Report/IndexScreen"

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"

const Stack = createStackNavigator()

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};

const ReportStack = () => {
  return (
    <Stack.Navigator screenOptions={TransitionScreenOptions}>
      <Stack.Screen name="Report Index" component={IndexScreen}
        options={{
          title: 'Reports',
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerTintColor: '#ffffff'
        }}
      />
    </Stack.Navigator>
  )
}

export default ReportStack