import { FormControl, Input, Text, VStack, Icon, Pressable, Button, Box } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';


const SignUpForm = () => {
    
    const route = useRoute();
    const { firstName, lastName } = route.params;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const createAccount = () => {
        console.log(firstName, lastName, email, password);
    }


    return(
        <VStack justifyContent="center" space={2} py={30} px={15}>
            <FormControl>
                <Box py={2}>
                <FormControl.Label>Email address</FormControl.Label>
                <Input 
                    placeholder="example@email.com"
                    variant="underlined"
                    onChangeText={(e) => setEmail(e)}
                    value={email}
                />
                </Box>
                <Box py={2}>
                <FormControl.Label>Password</FormControl.Label>
                <Input 
                    placeholder="Enter password"
                    variant="underlined"
                    type={showPassword ? "text" : "password"} 
                    InputRightElement={<Pressable onPress={() => setShowPassword(!showPassword)}><Icon as={<MaterialIcons name={showPassword ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" /></Pressable>} 
                    onChangeText={(e) => setPassword(e)}
                    value={password}
                />
                </Box>
                <Button mt={5} onPress={createAccount}>Create New Account</Button>
            </FormControl>
        </VStack>
    )
}

export default SignUpForm;