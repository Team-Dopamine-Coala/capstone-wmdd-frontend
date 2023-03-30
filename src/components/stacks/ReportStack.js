import IndexScreen from "../screens/Report/IndexScreen"
import HeaderImage from "../layout/HeaderImage";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"

const Stack = createStackNavigator()

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};

const ReportStack = () => {
  return (
    <Stack.Navigator screenOptions={TransitionScreenOptions}>
      <Stack.Screen name="Report Index" component={IndexScreen}
        options={({ navigation }) => ({
          title: 'Reports',
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontFamily: 'Lexend_700',
            fontSize: 20
          },
          headerRight: () => (
            <HeaderImage navigations={navigation}/>
          )
        })}
      />
    </Stack.Navigator>
  )
}

export default ReportStack