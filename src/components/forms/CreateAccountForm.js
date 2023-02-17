import { FormControl, Input, Text, VStack, Icon, Pressable, Button, Box, Center } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from 'react';

const CreateAccountForm = props => {

    const {navigation} = props

    return(
        <VStack justifyContent="center" space={2} py={30} px={15}>
            <FormControl>
                <Box py={2}>
                <FormControl.Label>First Name</FormControl.Label>
                <Input 
                    placeholder="First Name"
                    variant="underlined"
                />
                </Box>
                <Box py={2}>
                <FormControl.Label>Last Name</FormControl.Label>
                <Input 
                    placeholder="Last Name"
                    variant="underlined"
                />
                </Box>
                <Button 
                    mt={5}
                    onPress={() => {navigation.navigate('Sign Up Form')}}
                >Next</Button>
            </FormControl>
        </VStack>
    )
}

export default CreateAccountForm;