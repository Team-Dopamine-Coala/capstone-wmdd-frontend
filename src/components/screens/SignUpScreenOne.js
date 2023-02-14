import { Box, Container, Text, View, VStack, Center } from 'native-base';
import React from 'react';
import CreateAccountForm from '../forms/CreateAccountForm';

const Stack = createNativeStackNavigator()

const SignUpScreenOne = ({ navigation }) => {
    return (
        <View>
            <Center>
                <Text fontSize="2xl" mt={100} bold>Create a Coala Account</Text>
            </Center>
            <CreateAccountForm navigation={navigation} />
        </View>
    )
}

export default SignUpScreenOne;