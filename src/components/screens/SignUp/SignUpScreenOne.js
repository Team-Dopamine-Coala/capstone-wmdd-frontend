import { Box, Container, Text, View, VStack, Center } from 'native-base';
import React from 'react';
import CreateAccountForm from '../../forms/signup/CreateAccountForm';
import CoalaNoText from '../../svg/CoalaNoText';

const SignUpScreenOne = ({ navigation, route }) => {
    return (
        <View style={{backgroundColor: '#FCFCFC', height:'100%'}}>
            <Center>
                <Box mt={150}>
                    <CoalaNoText alignItem='center' />
                </Box>
                <Text fontFamily="Lexend_700" fontSize={28} mt={5}>Create a Coala Account</Text>
            </Center>
            <CreateAccountForm navigation={navigation} route={route}/>
        </View>
    )
}

export default SignUpScreenOne;