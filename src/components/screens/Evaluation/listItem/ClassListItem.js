import { useState, useEffect } from 'react'
import { Box, HStack, VStack, Text, Button, Heading, View } from 'native-base'
import moment from 'moment'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { getStudentsByClass } from '../../../../utils/queries'
import AnimatedEntrance from 'react-native-animated-entrance';

import Clock from '../../../svg/AttendanceIcons/Clock'
import MapPin from '../../../svg/AttendanceIcons/MapPin'
import RightArrow from '../../../svg/AttendanceIcons/RightArrow'

const ClassListItem = ({ item, order, navigation, calendarDate }) => {
  const [total, setTotal] = useState(0)
  const [pending, setPending] = useState(0)
  const [completed, setCompleted] = useState(0)
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    getStudentsByClass(item._id).then(
      data => {
        setTotal(data?.length)
        setPending(data?.filter(item => item.evaluated == 0).length)
        setCompleted(data?.filter(item => item.evaluated == 1).length)
        setPercentage(data?.filter(item => item.evaluated == 1).length / data?.length * 100)
      },
      error => {
        throw error
      }
    ).catch((error) => {
      throw error
    })
  }, [item])

  return (
    <AnimatedEntrance
      axis={AnimatedEntrance.axis.horizontal}
      offset={20}
      duration={500}
      delay={250}
      order={order + 1}
    >
    <View mx={4} my={4}>
      <Box  mb={3} p={5} bg={item.color} width="100%" height="90%" borderRadius="md" shadow={9} position="absolute" top="5%"></Box>
      <Box ml={4} p={3} bg={item.cardColor} flex={1} height="100%" borderRadius="md" shadow={5}>
        <VStack>
          <HStack borderBottomColor="#737373" borderBottomWidth={1} mb={3}>
            <Box pr={3} pb={3}>
              <AnimatedCircularProgress
                size={90}
                width={10}
                fill={percentage}
                duration={1000}
                tintColor={item.color}
                backgroundColor="#D0CFD4">
                {
                  (fill) => (
                    <Text style={{ fontSize: 20, fontFamily: 'Lexend_700' }}>{completed}/{total}</Text>
                  )
                }
              </AnimatedCircularProgress>
            </Box>
            <VStack space={1} mb={2} ml={1} pt={1}>
              <Heading fontSize={24} fontFamily="Lexend_600" fontWeight="400">{item.title}</Heading>
              <HStack alignItems="center" space={1}>
                <Clock/>
                <Text fontSize={16} fontFamily="Lexend_400" color="#737373">{moment(item.startTime).format('H:mm A')}</Text>
                <RightArrow/>
                <Text fontSize={16} fontFamily="Lexend_400" color="#737373">{moment(item.endTime).format('H:mm A')}</Text>
              </HStack>
              <HStack alignItems="center" space={1}>
                <MapPin/>
                <Text fontSize={16} fontFamily="Lexend_400" color="#737373">{item.location}</Text>
              </HStack>
            </VStack>
          </HStack>

          <HStack>
            <VStack flex={1} alignItems="center">
              <Text fontFamily="Lexend_700" fontSize={20} color="#F35242">{pending}</Text>
              <Text fontFamily="Lexend_400" fontSize={14} color="#737373">Pending</Text>
            </VStack>
            <VStack flex={1} alignItems="center">
              <Text fontFamily="Lexend_700" fontSize={20}>{completed}</Text>
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
                  className: item.title,
                  calendarDate: calendarDate
                })
              }}
            ><Text fontFamily="Lexend_700" fontSize={16} color="#ffffff">{pending > 0 ? 'Start' : 'View'}</Text></Button>
          </HStack>

        </VStack>
      </Box>
    </View>
    </AnimatedEntrance>
  )
}

export default ClassListItem