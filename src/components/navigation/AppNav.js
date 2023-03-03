import LoginSignUpStack from "../stacks/LoginSignUpStack";
import AppTabs from '../tabs/AppTabs'

import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { View, ActivityIndicator } from 'react-native';


const AppNav = () => {

    const {isLoading, userToken} = useContext(AuthContext)
    console.log(userToken);

    if (isLoading){
        return(
            <View>
                <ActivityIndicator size={'large'}/>
            </View>
        )
    }

    return(
        <NavigationContainer>
            {/* { userToken !== null ? <AppTabs /> : <LoginSignUpStack /> } */}
            <LoginSignUpStack />
        </NavigationContainer>
    )
}

export default AppNav;