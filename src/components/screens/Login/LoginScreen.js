import { Box, Container, Text, View, VStack } from 'native-base';
import React from 'react';
import LoginForm from '../../forms/login/LoginForm';

const LoginScreen = ({navigation}) => {

    return (
        <View>
            <LoginForm navigation={navigation}/>
        </View>
    )
}

export default LoginScreen;