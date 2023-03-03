import { Box, Container, Text, View, VStack, Center } from 'native-base';
import React from 'react';
import CreateAccountForm from '../../forms/signup/CreateAccountForm';

const SignUpScreenOne = ({ navigation, route }) => {
    return (
        <View>
            <Center>
                <Text fontSize="2xl" mt={100} bold>Create a Coala Account</Text>
            </Center>
            <CreateAccountForm navigation={navigation} route={route}/>
        </View>
    )
}

export default SignUpScreenOne;