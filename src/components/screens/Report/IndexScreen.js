import { useState, useEffect, useContext } from 'react'
import { View, Box, Center, Heading, VStack, Text } from 'native-base'
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import BottomSheet from 'react-native-simple-bottom-sheet';

import { AuthContext } from '../../context/AuthContext';
import ClassList from './lists/ClassList';
import Loading from '../../layout/Loading'

import { getClassesOfCoach } from '../../../utils/queries';

const IndexScreen = ({ navigation }) => {
  const {userToken} = useContext(AuthContext)
  const [classes, setClasses] = useState([])
  const [dateSelected, setSelectedDate] = useState(new Date())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log(dateSelected)

    setIsLoading(true)
    getClassesOfCoach('63fcf0bd354e8150f45dd4d2', userToken).then(
      data => {
        setClasses(data)
        setIsLoading(false)
      },
      error => {
        throw error
      }
    )
  }, [dateSelected])
  

  const onDateClick = (date) => {
    setSelectedDate(date)
  }

  return (
    <>
      <VStack pt="50px" pb={20} flex={1} bgColor="#F4903F" height="100%">

        <Box bgColor="#ffffff" borderTopLeftRadius={20} borderTopRightRadius={20} height="100%">
          <CalendarStrip
          scrollable
          style={{height: 130, paddingTop: 20, paddingBottom: 10}}
          calendarHeaderStyle={{
            fontSize: 18,
            alignSelf: 'flex-start',
          }}
          startingDate={moment().subtract(3, 'days')}
          selectedDate={moment()}
          onDateSelected={onDateClick}
          minDate="2023-01-01"
          maxDate="2023-12-31"
          dayContainerStyle={{
            paddingBottom: 4
          }}
          dateNameStyle={{
            marginBottom: 6,
            fontSize: 13,
            textTransform: 'capitalize'
          }}
          dateNumberStyle={{
            paddingBottom: 4,
            fontSize: 16,
            fontWeight: '300'
          }}
          highlightDateNameStyle={{
            color: '#F4903F',
            marginBottom: 6,
            fontSize: 13,
            textTransform: 'capitalize'
          }}
          highlightDateNumberStyle={{
            color: '#F4903F',
            fontSize: 16
          }}
          highlightDateNumberContainerStyle={{
          }}
        />
        
        {isLoading ? <Loading /> : <ClassList classes={classes} navigation={navigation} />}
      </Box>

      </VStack>
      
      <BottomSheet
        isOpen
        sliderMinHeight={120}
      >
        <View>
          <Text>Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world</Text>
        </View>
      </BottomSheet>
      </>
  )
}

export default IndexScreen

      {/* <VStack  mb={5} >  
          <Box  mb={3} p={5} bg="#ffc0cb" width="100%" height="90%" borderRadius="md" shadow={9} position="absolute" top="5%"></Box>
          <Box ml={4} p={3} bg="#ffffff" flex={1} height="100%" borderRadius="md" shadow={5}>
            <HStack space={1} mb={2}>      
              <VStack >
                <Heading fontSize={22}>{title}</Heading>
                <Text>{startTime} -{'>'} {endTime}</Text>
                <Text>Venue</Text>
              </VStack>
              <Icon ml="2" size="70" color="gray.200" as={<Ionicons name="checkmark-circle-outline"/>} />         
            </HStack>
          
            <Button
              dateSelected = {dateSelected}
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
        </VStack> */}
