import { Box, Container, Text, View, VStack, Center } from 'native-base';
import React from 'react';
import SignUpForm from '../../forms/signup/SignUpForm';

const SignUpScreenTwo = ({ navigation, route }) => {
    return (
        <View>
            <Center>
                <Text fontSize="2xl" mt={100} bold>Create a Coala Account</Text>
            </Center>
            <SignUpForm navigation={navigation} route={route}/>
        </View>
    )
}

export default SignUpScreenTwo;