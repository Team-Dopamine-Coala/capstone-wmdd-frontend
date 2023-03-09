import { FormControl, Input, Text, VStack, Icon, Pressable, Button, Box, Link } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState, useContext } from 'react';
import { useRoute } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';


const SignUpForm = ({navigation}) => {

    const route = useRoute();
    const { firstName, lastName } = route.params;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const {createAccount} = useContext(AuthContext)

    
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
                <Button mt={5} onPress={() => {createAccount(firstName, lastName, email, password)}}>Create New Account</Button>
                <Text mt={5}>Already have an account? <Link onPress={() => navigation.navigate('Login') }> Sign in</Link></Text>
            </FormControl>
        </VStack>
    )
}

export default SignUpForm;