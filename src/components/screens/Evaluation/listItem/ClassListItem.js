import { Box, HStack, VStack, Text, Button, Heading, View } from 'native-base'
import moment from 'moment'

const ClassListItem = ({ item, navigation }) => {
  return (
    <View mx={3} my={3}>
      <Box  mb={3} p={5} bg="#ffc0cb" width="100%" height="90%" borderRadius="md" shadow={9} position="absolute" top="5%"></Box>
      <Box ml={4} p={3} bg="#ffffff" flex={1} height="100%" borderRadius="md" shadow={5}>
        <VStack>
          <HStack>
            <VStack space={1} mb={2}>
              <Heading fontSize={22}>{item.title}</Heading>
              <Text>{moment(item.startTime).format('H:mm A')} - {moment(item.endTime).format('H:mm A')}</Text>
            </VStack>
          </HStack>

          <Button
            bgColor="#404142"
            onPress={() => {
              navigation.navigate('Evaluation Student List', {
                classId: item._id,
                className: item.title
              })
            }}
          ><Text fontWeight="700" color="#ffffff">Start Evaluation</Text></Button>
        </VStack>
      </Box>
    </View>
  )
}

export default ClassListItem