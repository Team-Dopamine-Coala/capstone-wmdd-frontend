import { FormControl, Input, Text, VStack, Icon, Pressable, Button, Box, Center } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from 'react';

const CreateAccountForm = ({navigation, route }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const nextPage = () => {
        console.log(firstName, lastName)
        navigation.navigate('Sign up two', {
            firstName: firstName,
            lastName: lastName
        })
    }

    return(
        <VStack justifyContent="center" space={2} py={30} px={15}>
            <FormControl>
                <Box py={2}>
                <FormControl.Label>First Name</FormControl.Label>
                <Input 
                    placeholder="First Name"
                    variant="underlined"
                    onChangeText={(e) => setFirstName(e)}
                    value={firstName}
                />
                </Box>
                <Box py={2}>
                <FormControl.Label>Last Name</FormControl.Label>
                <Input 
                    placeholder="Last Name"
                    variant="underlined"
                    onChangeText={(e) => setLastName(e)}
                    value={lastName}
                />
                </Box>
                <Button 
                    mt={5}
                    onPress={nextPage}
                >Next</Button>
            </FormControl>
        </VStack>
    )
}

export default CreateAccountForm;