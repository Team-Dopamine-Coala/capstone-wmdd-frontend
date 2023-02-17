import { Box, HStack, Text, VStack, Button, Heading } from "native-base";

const Card = props => {
  const {  title, startTime, endTime, id, } = props;

  return (
    <>
      <Box mb={3} p={5} bgColor="#EEF1F4" borderRadius="lg">
        <VStack >
          <HStack space={1} mb={2}>
          <VStack >
            <Heading fontSize={22}>{title}</Heading>
              <Text>{startTime} - {endTime}</Text>
              <Text>Venue</Text>
              </VStack>
          </HStack>
            <Button
              borderRadius="4"
              variant="solid"
              bgColor="#667080"
            >
            <Text fontWeight="700" color="#ffffff">Take Attendance</Text>
            </Button>
          
        </VStack>
      </Box>
    </>
  );
}

export default Card