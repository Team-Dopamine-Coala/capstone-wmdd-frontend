import { FormControl, Input, Text, VStack, Icon, Pressable, Button, Box } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from 'react';


const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    return(
        <VStack justifyContent="center" space={2} py={30} px={15}>
            <Text fontSize="3xl" mt={100}>Welcome Back!</Text>
            <Text fontSize="xl">Sign in to continue</Text>
            <FormControl isRequired>
                <Box py={2}>
                <FormControl.Label>Email</FormControl.Label>
                <Input 
                    placeholder="example@email.com"
                    variant="underlined"
                />
                </Box>
                <Box py={2}>
                <FormControl.Label>Password</FormControl.Label>
                <Input 
                    placeholder="Enter password"
                    variant="underlined"
                    type={showPassword ? "text" : "password"} 
                    InputRightElement={<Pressable onPress={() => setShowPassword(!showPassword)}><Icon as={<MaterialIcons name={showPassword ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" /></Pressable>} 
                />
                </Box>
                <Button mt={5}>Login</Button>
            </FormControl>
        </VStack>
    )
}

export default LoginForm