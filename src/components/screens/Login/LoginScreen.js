import { Box, Container, Text, View, VStack } from 'native-base';
import React from 'react';
import LoginForm from '../../forms/login/LoginForm';

const LoginScreen = ({navigation}) => {

    return (
        <View style={{backgroundColor: '#FCFCFC', height:'100%'}}>
            <LoginForm navigation={navigation}/>
        </View>
    )
}

export default LoginScreen;