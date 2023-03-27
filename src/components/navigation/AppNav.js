import LoginSignUpStack from "../stacks/LoginSignUpStack";
import AppTabs from '../tabs/AppTabs'

import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { View } from 'react-native';
import Loading from "../layout/Loading";
import SettingStack from "../stacks/SettingStack";
import NewNav from "./PageNavs";
import PageNavs from "./PageNavs";


const AppNav = () => {

    const {isLoading, userToken} = useContext(AuthContext)

    if (isLoading){
        return(
            <View>
                <Loading />
            </View>
        )
    }

    return(
        <NavigationContainer>
            { userToken !== null ?  <AppTabs /> : <LoginSignUpStack /> }
            {/* { userToken !== null ?  <PageNavs /> : <LoginSignUpStack /> } */}
        </NavigationContainer>
    )
}

export default AppNav;