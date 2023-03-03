import { Box, Text, Heading, Button} from "native-base";
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

const WelcomeCard = () => {

  const { logout } = useContext(AuthContext)

  return (
    <>
      <Box mt="20" mb="4">

              <Text>Hello</Text>
              <Heading>Giancarlo</Heading>
              <Text>You have 3 classes today!</Text>
              <Button onPress={() => {logout()}}>Logout</Button>

      </Box>
    </>
  );
}

export default WelcomeCard