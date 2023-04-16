import { FormControl, Input, Text, VStack, Icon, Pressable, Box, Button, Link, HStack, Center } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Google from '../../svg/Google';


const LoginForm = ({navigation}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {login} = useContext(AuthContext)

    return(
        <VStack justifyContent="center" pl={8} pr={8} mt={200}>
            <Text fontFamily="Lexend_700" fontSize={28}>Welcome Back!</Text>
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
                    _pressed={{backgroundColor:"#E57229"}}
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
                <Box style={{ position: 'relative', borderTopWidth: '1px', borderTopColor: 'black', marginTop: 30 }}>
                    <Center>
                        <Text fontFamily="Lexend_700" fontSize={15} textAlign='center' mt={-3} color="black" style={{ position: 'relative', backgroundColor: '#FCFCFC', width: 35 }}>OR</Text>
                    </Center>
                </Box>
                <Button 
                    mt={7}
                    bg="#FCFCFC"
                    variant="outline"
                    _text={{
                        fontFamily: "Lexend_700",
                        color:"#212427"
                    }}
                    leftIcon={<Google />}
                >Sign Up with Google</Button>
                <Box>
                    <Text mt={5} fontFamily="Lexend_300" textAlign="center" color="#667080">New to Coala? 
                        <Link 
                            onPress={() => navigation.navigate('Sign up one')}
                                _text={{
                                    fontFamily:"Lexend_700",
                                    color:"#667080"
                                }}
                        > Sign up now</Link>
                    </Text>
                </Box>
            </FormControl>
        </VStack>
    )
}

export default LoginForm