import { FormControl, Input, Text, VStack, Icon, Pressable, Button, Box, Link } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


const LoginForm = ({navigation}) => {
    const [showPassword, setShowPassword] = useState(false);

    const {login} = useContext(AuthContext)

    return(
        <VStack justifyContent="center" space={2} py={30} px={15}>
            <Text fontSize="3xl" mt={100}>Welcome Back!</Text>
            <Text fontSize="xl">Log in to continue</Text>
            <FormControl isRequired>
                <Box py={2}>
                <Input 
                    placeholder="Email Address"
                    variant="underlined"
                />
                </Box>
                <Box py={2}>
                <Input 
                    placeholder="Password"
                    variant="underlined"
                    type={showPassword ? "text" : "password"} 
                    InputRightElement={<Pressable onPress={() => setShowPassword(!showPassword)}><Icon as={<MaterialIcons name={showPassword ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" /></Pressable>} 
                />
                </Box>
                <Button mt={5} onPress={() => {login()}}>Login</Button>
                <Link mt={5}>Forgot your password?</Link>
                <Text bold fontSize="sm" mt={7}>OR</Text>
                <Button mt={7}>Google</Button>
                <Text mt={5}>New to Coala? <Link onPress={() => navigation.navigate('Sign up one') }> Sign up now</Link></Text>
            </FormControl>
        </VStack>
    )
}

export default LoginForm