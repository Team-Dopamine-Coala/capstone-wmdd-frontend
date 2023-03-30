import { FormControl, Input, Text, VStack, Icon, Pressable, Box, Button, Link } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


const LoginForm = ({navigation}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {login} = useContext(AuthContext)

    return(
        <VStack justifyContent="center" pl={8} pr={8}>
            <Text fontFamily="Lexend_700" fontSize={28} mt={20}>Welcome Back!</Text>
            <Text fontFamily="Lexend_500" fontSize={12}>Log In to continue</Text>
            <FormControl isRequired>
                <Box py={2} mt={20}>
                <Input 
                    placeholder="Email Address"
                    variant="underlined"
                    onChangeText={(e) => setEmail(e)}
                    value={email}
                    style={{
                        fontFamily:"Lexend_400",
                        color:"#667080"
                    }}
                />
                </Box>
                <Box py={2} mt={4}>
                <Input 
                    placeholder="Password"
                    variant="underlined"
                    type={showPassword ? "text" : "password"} 
                    InputRightElement={<Pressable onPress={() => setShowPassword(!showPassword)}><Icon as={<MaterialIcons name={showPassword ? "visibility" : "visibility-off"} />} size={5} mr="2" color="#667080" /></Pressable>} 
                    onChangeText={(e) => setPassword(e)}
                    value={password}
                    style={{
                        fontFamily:"Lexend_400",
                        color:"#737373"
                    }}
                />
                </Box>
                <Button onPress={() => {login(email, password)}}
                    bg="#FE7F2D"
                    mt={5}
                    _text={{
                    fontFamily:"Lexend_700",
                    }}
                >Login</Button>
                <Link 
                    mt={5} 
                    justifyContent='flex-end'
                    _text={{
                        textAlign:"left",
                        fontFamily:"Lexend_500",
                        color:"#667080",
                    }}
                >Forgot your password?</Link>
                <Text bold fontSize="sm" mt={7}>OR</Text>
                <Button 
                    mt={7}
                    bg="#FE7F2D"
                >Google</Button>
                <Text mt={5}>New to Coala? <Link onPress={() => navigation.navigate('Sign up one') }> Sign up now</Link></Text>
            </FormControl>
        </VStack>
    )
}

export default LoginForm