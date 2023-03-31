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
        <VStack justifyContent="center" space={2} py={30} pl={7} pr={7}>
            <FormControl>
                <Box py={2}>
                <Input 
                    placeholder="example@email.com"
                    variant="underlined"
                    onChangeText={(e) => setEmail(e)}
                    value={email}
                    style={{
                        fontFamily:"Lexend_400",
                        color:"#737373"
                    }}
                />
                </Box>
                <Box py={2}>
                <Input 
                    placeholder="Enter password"
                    variant="underlined"
                    type={showPassword ? "text" : "password"} 
                    InputRightElement={<Pressable onPress={() => setShowPassword(!showPassword)}><Icon as={<MaterialIcons name={showPassword ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" /></Pressable>} 
                    onChangeText={(e) => setPassword(e)}
                    value={password}
                    style={{
                        fontFamily:"Lexend_400",
                        color:"#737373"
                    }}
                />
                </Box>
                <Button 
                    bg="#FE7F2D"
                    mt={20} 
                    onPress={() => {createAccount(firstName, lastName, email, password)}}  
                    _text={{
                    fontFamily:"Lexend_700",
                    }}
                    _pressed={{backgroundColor:"#E57229"}}>Create New Account</Button>
                <Text fontFamily="Lexend_300" textAlign="center" mt={5} color="#667080">Already have an account? <Link onPress={() => navigation.navigate('Login')} _text={{fontFamily:"Lexend_500", color:"#667080"}}> Sign in</Link></Text>
            </FormControl>
        </VStack>
    )
}

export default SignUpForm;