import { Box, Container, Text, View, VStack, Center } from 'native-base';
import React from 'react';
import SignUpForm from '../../forms/signup/SignUpForm';
import CoalaNoText from '../../svg/CoalaNoText';

const SignUpScreenTwo = ({ navigation, route }) => {
    return (
        <View>
            <Center>
            <   Box mt={20}>
                    <CoalaNoText alignItem='center' />
                </Box>
                <Text fontFamily="Lexend_700" fontSize={28} mt={10}>Create a Coala Account</Text>
            </Center>
            <SignUpForm navigation={navigation} route={route}/>
        </View>
    )
}

export default SignUpScreenTwo;