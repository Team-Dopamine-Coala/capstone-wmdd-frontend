import LoginScreen from '../screens/Login/LoginScreen'
import SignUpScreenOne from '../screens/SignUp/SignUpScreenOne';
import SignUpScreenTwo from '../screens/SignUp/SignUpScreenTwo';

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"


const Stack = createStackNavigator()

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS
}

const LoginSignUpStack = () => {

  return (
        <Stack.Navigator screenOptions={TransitionScreenOptions}>
            <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false
            }}
            />
            <Stack.Screen
            name="Sign up one"
            component={SignUpScreenOne}
            options={{
              headerShown: false
            }}
            />
            <Stack.Screen 
            name=" "
            component={SignUpScreenTwo}
            options={{
              headerBackTitleVisible: false,
              headerTintColor: "#737373",
              headerTitleVisible: false,
              headerTransparent: true,
            }}
            />
        </Stack.Navigator>
  )
}

export default LoginSignUpStack
