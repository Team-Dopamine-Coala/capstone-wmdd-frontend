import { Box, HStack, VStack, Text, Button, Heading, View } from 'native-base'
import moment from 'moment'

const ClassListItem = ({ item, navigation, clickedClass }) => {

  const clickedSeeReport = (classid) => {
    clickedClass(classid)
  }

  return (
    <View mx={3} my={3}>
      <Box  mb={3} p={5} bg={item.color} width="100%" height="90%" borderRadius="md" shadow={9} position="absolute" top="5%"></Box>
      <Box ml={4} p={3} bg="#ffffff" flex={1} height="100%" borderRadius="md" shadow={5}>
        <VStack>
          <HStack>
            <VStack space={1} mb={2}>
              <Heading fontFamily="Lexend_400" fontSize={22}>{item.title}</Heading>
              <Text fontFamily="Lexend_400">{moment(item.startTime).format('H:mm A')} - {moment(item.endTime).format('H:mm A')}</Text>
            </VStack>
          </HStack>

          <Button
            bgColor="#404142"
            onPress={() => clickedSeeReport(item._id)}
          ><Text fontFamily="Lexend_700" color="#ffffff">See Report</Text></Button>
        </VStack>
      </Box>
    </View>
  )
}

export default ClassListItem