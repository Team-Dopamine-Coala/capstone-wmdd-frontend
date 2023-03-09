import LoginScreen from '../screens/Login/LoginScreen'
import SignUpScreenOne from '../screens/SignUp/SignUpScreenOne';
import SignUpScreenTwo from '../screens/SignUp/SignUpScreenTwo';

import { createStackNavigator } from "@react-navigation/stack"


const Stack = createStackNavigator()

const LoginSignUpStack = () => {

  return (
        <Stack.Navigator
            screenOptions={{
            headerShown: false,
            }}
        >
            <Stack.Screen
            name="Login"
            component={LoginScreen}
            />
            <Stack.Screen
            name="Sign up one"
            component={SignUpScreenOne}
            />
            <Stack.Screen 
            name="Sign up two"
            component={SignUpScreenTwo}
            />
        </Stack.Navigator>
  )
}

export default LoginSignUpStack
