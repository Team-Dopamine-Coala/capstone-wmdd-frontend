import { useState, useEffect, useContext, useRef } from 'react'
import { Dimensions } from 'react-native'
import { View, Box, Center, Heading, VStack, Text } from 'native-base'
import moment from 'moment';
import BottomSheet from 'react-native-simple-bottom-sheet';

import { AuthContext } from '../../context/AuthContext';
import ClassList from './lists/ClassList';
import Loading from '../../layout/Loading'
import StudentList from './lists/StudentList';

import { getClassesOfCoach } from '../../../utils/queries';
import { getStudentsByClass } from "../../../utils/queries"

const IndexScreen = ({ navigation }) => {
  const {userToken} = useContext(AuthContext)
  const [classes, setClasses] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedClass, setSelectedClass] = useState(null)
  const [students, setStudents] = useState(null)
  const panelRef = useRef(null)

  useEffect(() => {
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
  }, [])

  useEffect(() => {
    getStudentsByClass(selectedClass).then(
      data => {
        setStudents(data)
      },
      error => {
        throw error
      }
    )
  }, [selectedClass])

  const clickedClass = (classid) => {
    setSelectedClass(classid)
  }

  return (
    <>
      <VStack pt="50px" pb={20} flex={1} bgColor="#F4903F" height="100%">

        <Box bgColor="#ffffff" borderTopLeftRadius={20} borderTopRightRadius={20} height="100%">
        
        {isLoading ? <Loading /> : <ClassList classes={classes} navigation={navigation} openSheet={() => panelRef.current.togglePanel()} clickedClass={clickedClass} />}
      </Box>

      </VStack>
      
      <BottomSheet
        isOpen={false}
        ref={ref => panelRef.current = ref}
        animationDuration={300}
        sliderMaxHeight={Dimensions.get('window').height * 0.9}
      >
        <View mb={100}>
          <StudentList students={students} selectedClass={selectedClass} />
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
