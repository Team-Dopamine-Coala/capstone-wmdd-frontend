import { Box, Container, Text, View, VStack, Center } from 'native-base';
import React from 'react';
import CreateAccountForm from '../forms/CreateAccountForm';

const SignUpScreenOne = (props) => {
    return (
        <View>
            <Center>
                <Text fontSize="2xl" mt={100} bold>Create a Coala Account</Text>
            </Center>
            <CreateAccountForm navigation={props.navigation}/>
        </View>
    )
}

export default SignUpScreenOne;