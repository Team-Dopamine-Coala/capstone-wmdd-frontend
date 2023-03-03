import { Box, Icon, HStack, Text, VStack, Button, Heading } from "native-base";
import { Ionicons } from "@expo/vector-icons"

const Card = ({ title, startTime, endTime, id, navigation }) => {
  // const {  title, startTime, endTime, id, navigation } = props;

  return (
    <>
      {/* <Box mb={3} p={5} bgColor="#EEF1F4" borderRadius="lg"> */}
        <VStack  mb={5} >  
          <Box  mb={3} p={5} bg="#ffc0cb" width="100%" height="90%" borderRadius="md" shadow={9} position="absolute" top="5%"></Box>
          <Box ml={4} p={3} bg="#ffffff" flex={1} height="100%" borderRadius="md" shadow={5}>
            <HStack space={1} mb={2}>      
              <VStack >
                <Heading fontSize={22}>{title}</Heading>
                <Text>{startTime} - {endTime}</Text>
                <Text>Venue</Text>
              </VStack>
              <Icon ml="2" size="70" color="gray.200" as={<Ionicons name="checkmark-circle-outline"/>} />         
            </HStack>
          
            <Button
              borderRadius="61"
              variant="solid"
              bgColor="#404142"
              onPress={() => {
                navigation.navigate('Attendance Student List')
              }}
            >
               <Text fontWeight="700" color="#ffffff">Start</Text>
            </Button>
          </Box>
        </VStack>
      {/* </Box> */}
    </>
  );
}

export default Card