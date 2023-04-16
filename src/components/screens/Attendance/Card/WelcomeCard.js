import { Box, Text, Heading, Button, Image, Center, Pressable, HStack, VStack} from "native-base";
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import HeaderImage  from '../../../layout/HeaderImage'

const WelcomeCard = ({navigation, classNumber}) => {
  const [attendance] = useState(true)
  const { logout } = useContext(AuthContext)

  return (
    <>
      <Box mt="10" mb="2" ml="3" mr="3">
          <HStack justifyContent="space-between">
            <VStack>
              <Text color="#FFFFFF" fontSize="24" fontFamily="Lexend_600">Hello,</Text>
              <Heading color="#FFFFFF" fontSize="36" fontFamily="Lexend_700" pb="3">Coach Coala</Heading>
            </VStack>
            <HeaderImage navigations={navigation} attendance={attendance}/>
          </HStack>
              <Center pt="3" borderTopWidth="1" borderTopColor="rgba(255, 255, 255, .5)">
                <Text color="#FFFFFF" fontSize="20" fontFamily="Lexend_500">You have {classNumber} classes today!</Text>
              </Center>
              <Pressable >
          
            
        </Pressable>
            
              {/* <Button onPress={() => {logout()}}>Logout</Button> */}

      </Box>

    </>
  );
}

export default WelcomeCard