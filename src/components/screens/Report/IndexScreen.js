import { useState, useEffect, useContext, useRef } from 'react'
import { Dimensions } from 'react-native'
import { AWS_BACKEND_BASE_URL } from '../../../utils/static';
import { View, Box, Center, Heading, VStack, Text } from 'native-base'
import moment from 'moment';
import BottomSheet from 'react-native-simple-bottom-sheet';
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';

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
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [students, setStudents] = useState(null)
  const [totalStudents, setTotalStudents] = useState(null)
  const [isDialogVisible, setIsDialogVisible] = useState(false)

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
        setTotalStudents(data.length)
      },
      error => {
        throw error
      }
    )
  }, [selectedClass])

  const clickedClass = (classid) => {
    setSelectedClass(classid)
    setTimeout(() => {
      panelRef.current.togglePanel()
    }, 1000)
  }

  const sendEmail = (studentId) => {
    fetch(`${AWS_BACKEND_BASE_URL}/api/pdf/${selectedClass}/${studentId}`)
  }

  const openDialog = (studentId) => {
    setIsDialogVisible(true)
    setSelectedStudent(studentId)
    sendEmail(studentId)
  }

  const closeDialog = () => {
    setIsDialogVisible(false)
  }

  return (
    <>
      <VStack pt="50px" flex={1} bgColor="#F4903F">
        <Box pt={2} height="100%" bgColor="#ffffff" borderTopLeftRadius={20} borderTopRightRadius={20}>
        
          {isLoading ? <Loading /> : <ClassList classes={classes} navigation={navigation} clickedClass={clickedClass} />}
        </Box>
      </VStack>

      <Box style={{ backgroundColor: '#000000', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <Text>Hello</Text>
      </Box>
      
      <BottomSheet
        isOpen={false}
        ref={ref => panelRef.current = ref}
        animationDuration={300}
        sliderMinHeight={0}
        sliderMaxHeight={Dimensions.get('window').height * 0.9}
      >
        <View>
          <StudentList students={students} selectedClass={selectedClass} openDialog={openDialog} />
        </View>
      </BottomSheet>

      {/* <Dialog
        visible={true}
        footer={
          <DialogFooter>
            <DialogButton
              text="CANCEL"
              onPress={closeDialog}
            />
            <DialogButton
              text="OK"
              onPress={sendEmail}
            />
          </DialogFooter>
        }
      >
        <DialogContent>
          <Text>Hey</Text>
        </DialogContent>
      </Dialog> */}
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
