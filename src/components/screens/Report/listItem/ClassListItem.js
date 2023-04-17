import { Ionicons } from '@expo/vector-icons'
import { Icon, Box, HStack, VStack, Text, Button, Heading, View, Pressable } from 'native-base'
import moment from 'moment'
import AnimatedEntrance from 'react-native-animated-entrance';

const ClassListItem = ({ item, order, navigation, clickedClass }) => {

  const clickedSeeReport = (classid, className) => {
    clickedClass(classid, className)
  }

  return (
    <AnimatedEntrance
      axis={AnimatedEntrance.axis.horizontal}
      offset={20}
      duration={400}
      delay={200}
      order={order + 1}
    >
    <View mx={4} my={3}>
      <Box  mb={3} p={5} bg={item.color} width="100%" height="90%" borderRadius="md" shadow={9} position="absolute" top="5%"></Box>
      <Box ml={4} p={3} bg={item.cardColor} flex={1} height="100%" borderRadius="md" shadow={5}>
        <Pressable onPress={() => clickedSeeReport(item._id, item.title)}>
          <HStack alignItems="center" justifyContent="space-between">
            <VStack space={1} mb={2} ml={1} pt={1}>
              <Heading fontSize={24} fontFamily="Lexend_600" fontWeight="400">{item.title}</Heading>
              <HStack alignItems="center" space={1}>
                <Icon size={4} as={<Ionicons name='time' />} />
                <Text fontSize={16} fontFamily="Lexend_400" color="#737373">{moment(item.startTime).format('H:mm A')}</Text>
                <Icon size={4} as={<Ionicons name='arrow-forward' />} />
                <Text fontSize={16} fontFamily="Lexend_400" color="#737373">{moment(item.endTime).format('H:mm A')}</Text>
              </HStack>
              <HStack alignItems="center" space={1}>
                <Icon size={4} as={<Ionicons name='pin' />} />
                <Text fontSize={16} fontFamily="Lexend_400" color="#737373">{item.location}</Text>
              </HStack>
            </VStack>
            <Icon size={7} as={<Ionicons name='arrow-forward' />} />
          </HStack>
        </Pressable>
      </Box>
    </View>
    </AnimatedEntrance>
  )
}

export default ClassListItem