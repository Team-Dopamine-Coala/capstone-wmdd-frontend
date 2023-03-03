import { Box, HStack, VStack, Text, Button, Heading } from 'native-base'

const ClassListItem = ({ item, navigation }) => {
  return (
    <Box mb={3} p={5} bgColor="#EEF1F4" borderRadius="lg">
      <VStack>
        <HStack>
          <VStack space={1} mb={2}>
            <Heading fontSize={22}>{item.title}</Heading>
            <Text>{item.startTime} - {item.endTime}</Text>
          </VStack>
        </HStack>

        <Button
          bgColor="#667080"
          onPress={() => {
            navigation.navigate('Evaluation Student List', {
              classId: item._id,
              className: item.title
            })
          }}
        ><Text fontWeight="700" color="#ffffff">Start Evaluation</Text></Button>
      </VStack>
    </Box>
  )
}

export default ClassListItem