import { FormControl, Input, Text, VStack, Icon, Pressable, Button, Box, Center, Link } from 'native-base';
import React, { useState } from 'react';
import Google from '../../svg/Google'

const CreateAccountForm = ({navigation, route }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const nextPage = () => {
        console.log(firstName, lastName)
        navigation.navigate(' ', {
            firstName: firstName,
            lastName: lastName
        })
    }

    return(
        <VStack justifyContent="center" space={2} py={30} pl={7} pr={7}>
            <FormControl>
                <Box py={2}>
                <Input 
                    placeholder="First Name"
                    variant="underlined"
                    onChangeText={(e) => setFirstName(e)}
                    value={firstName}
                    style={{
                        fontFamily:"Lexend_400",
                        color:"#737373"
                    }}
                />
                </Box>
                <Box py={2} mb={5}>
                <Input 
                    placeholder="Last Name"
                    variant="underlined"
                    onChangeText={(e) => setLastName(e)}
                    value={lastName}
                    style={{
                        fontFamily:"Lexend_400",
                        color:"#737373"
                    }}
                />
                </Box>
                <Button 
                    bg="#FE7F2D"
                    _text={{
                        fontFamily:"Lexend_700"
                    }}
                    mt={20}
                    onPress={nextPage}
                    _pressed={{backgroundColor:"#E57229"}}
                >Next</Button>
                <Text fontFamily="Lexend_700" fontSize={15} textAlign='center' mt={7}>OR</Text>
                <Button mt={7}>Google</Button>
                <Text fontFamily="Lexend_300" textAlign="center" mt={5} color="#667080">Already have an account? <Link onPress={() => navigation.navigate('Login')} _text={{fontFamily:"Lexend_500", color:"#667080"}}> Sign in</Link></Text>
            </FormControl>
        </VStack>
    )
}

export default CreateAccountForm;