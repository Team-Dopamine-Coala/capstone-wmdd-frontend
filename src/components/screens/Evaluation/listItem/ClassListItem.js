import { Ionicons } from '@expo/vector-icons'
import { Box, HStack, VStack, Text, Button, Heading, View, Icon } from 'native-base'
import moment from 'moment'
import ProgressCircle from 'react-native-progress-circle'

const ClassListItem = ({ item, navigation }) => {
  return (
    <View mx={4} my={4}>
      <Box  mb={3} p={5} bg={item.color} width="100%" height="90%" borderRadius="md" shadow={9} position="absolute" top="5%"></Box>
      <Box ml={4} p={3} bg={item.cardColor} flex={1} height="100%" borderRadius="md" shadow={5}>
        <VStack>
          <HStack borderBottomColor="#737373" borderBottomWidth={1} mb={3}>
            <Box pr={3} pb={3}>
              <ProgressCircle
                  percent={80}
                  radius={50}
                  borderWidth={10}
                  color={item.color}
                  shadowColor="#D0CFD4"
                  bgColor={item.cardColor}
              >
                <Text style={{ fontSize: 20, fontFamily: 'Lexend_700' }}>3/8</Text>
              </ProgressCircle>
            </Box>
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
          </HStack>

          <HStack>
            <VStack flex={1} alignItems="center">
              <Text fontFamily="Lexend_700" fontSize={20} color="#F35242">5</Text>
              <Text fontFamily="Lexend_400" fontSize={14} color="#737373">Pending</Text>
            </VStack>
            <VStack flex={1} alignItems="center">
              <Text fontFamily="Lexend_700" fontSize={20}>3</Text>
              <Text fontFamily="Lexend_400" fontSize={14} color="#737373">Completed</Text>
            </VStack>
            <Button
              flex={1}
              ml={3}
              borderRadius="60px"
              bgColor="#404142"
              onPress={() => {
                navigation.navigate('Evaluation Student List', {
                  classId: item._id,
                  className: item.title
                })
              }}
            ><Text fontFamily="Lexend_700" fontSize={16} color="#ffffff">Start</Text></Button>
          </HStack>

        </VStack>
      </Box>
    </View>
  )
}

export default ClassListItem