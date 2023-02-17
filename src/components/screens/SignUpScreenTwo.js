import { Box, Container, Text, View, VStack, Center } from 'native-base';
import React from 'react';
import SignUpForm from '../forms/SignUpForm';

const SignUpScreenTwo = () => {
    return (
        <View>
            <Center>
                <Text fontSize="2xl" mt={100} bold>Create a Coala Account</Text>
            </Center>
            <SignUpForm />
        </View>
    )
}

export default SignUpScreenTwo;