import { Box, HStack, VStack, Text, Button, Heading } from 'native-base'

const ClassListItem = ({ item, navigation, openSheet, clickedClass }) => {

  const clickedSeeReport = (classid) => {
    clickedClass(classid)
    setTimeout(() => {
      openSheet()
    }, 500)
  }

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
          onPress={() => clickedSeeReport(item._id)}
        ><Text fontWeight="700" color="#ffffff">See Report</Text></Button>
      </VStack>
    </Box>
  )
}

export default ClassListItem