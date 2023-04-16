import { Box, Text, Button, Center, Pressable, HStack, VStack} from "native-base";
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import HeaderImage  from '../../../layout/HeaderImage'

const WelcomeCard = ({navigation, classNumber}) => {
  const [attendance] = useState(true)
  const { userInfo } = useContext(AuthContext)
  const fname = userInfo.firstName
  const lname = userInfo.lastName

  return (
    <>
      <Box mt="7" mb="2" ml="2" mr="2">
          <HStack justifyContent="space-between" alignItems="center">
            <VStack>
              <Text color="#FFFFFF" fontSize="24" fontFamily="Lexend_600">Hello,</Text>
              <Text color="#FFFFFF" fontSize="40" fontFamily="Lexend_700">{fname} {lname}</Text>
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