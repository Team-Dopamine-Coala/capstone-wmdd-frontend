import { useState, useEffect, useContext, useRef } from 'react'
import { Dimensions } from 'react-native'
import { AWS_BACKEND_BASE_URL } from '../../../utils/static';
import { Ionicons } from '@expo/vector-icons';
import { View, Box, Center, Heading, VStack, Text, Icon, Button } from 'native-base'
import RBSheet from "react-native-raw-bottom-sheet";
import { LinearGradient } from 'expo-linear-gradient';
import Dialog from 'react-native-dialog'

import { AuthContext } from '../../context/AuthContext';
import ClassList from './lists/ClassList';
import Loading from '../../layout/Loading'
import StudentList from './lists/StudentList';

import { getClassesOfCoach, getStudentsByClass } from '../../../utils/queries';

const IndexScreen = ({ navigation }) => {
  const {userToken} = useContext(AuthContext)
  const [classes, setClasses] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedClass, setSelectedClass] = useState(null)
  const [selectedClassName, setSelectedClassName] = useState(null)
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [selectedStudentName, setSelectedStudentName] = useState(null)
  const [students, setStudents] = useState(null)
  const [totalStudents, setTotalStudents] = useState(null)
  const [isDialogVisible, setIsDialogVisible] = useState(false)
  const [isSentVisible, setIsSentVisible] = useState(false)
  const [isSending, setIsSending] = useState(true)

  const RBSheetRef = useRef()

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
    ).catch((error) => {
      throw error
    })
  }, [])

  const clickedClass = (classid, className) => {
    setSelectedClass(classid)
    setSelectedClassName(className)
    getStudentsByClass(classid).then(
      data => {
        setStudents(data)
        if (data) {
          setTotalStudents(data.length)
        }
        RBSheetRef.current?.open()
      },
      error => {
        throw error
      }
    ).catch((error) => {
      throw error
    })
  }

  const openDialog = (studentId, studentName) => {
    RBSheetRef.current?.close()
    setSelectedStudent(studentId)
    setSelectedStudentName(studentName)

    setTimeout(() => {
      setIsDialogVisible(true)
    }, 500)
  }

  const handleSend = () => {
    setIsDialogVisible(false)
    setTimeout(() => {
      setIsSentVisible(true)
    }, 500)

    fetch(`${AWS_BACKEND_BASE_URL}/api/pdf/${selectedClass}/${selectedStudent}`).then(() => {
      setIsSending(false)
      setTimeout(() => {
        setIsSentVisible(false)
        RBSheetRef.current?.close()
      }, 2000)
    })
  }

  const handleCancel = () => {
    setIsDialogVisible(false)
    setTimeout(() => {
      RBSheetRef.current?.open()
    }, 500)
  }

  return (
    <LinearGradient colors={['#F4903F', '#F4903F', '#FC8634', '#FC8634', '#FC8634', '#F69B43', '#F69B43', '#F3AA6A', '#F3AA6A', '#F9D5B4']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} flex={1}>
      <VStack mt="60px">
        <Box pt={7} height="100%" bgColor="#fdfdfd" borderTopLeftRadius={20} borderTopRightRadius={20}>
        
          {isLoading ? <Loading /> : <ClassList classes={classes.sort((a, b) => a.title.localeCompare(b.title))} navigation={navigation} clickedClass={clickedClass} />}

        </Box>
      </VStack>

      <RBSheet
        ref={RBSheetRef}
        height={500}
        animationType="fade"
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,.5)"
          },
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30
          },
          draggableIcon: {
            width: 75,
            backgroundColor: "#9F9F9F"
          }
        }}
      >
        <View pb={5}>
          <Center>
            <Text fontFamily="Lexend_600" fontSize={20} mb="30px">{selectedClassName} Report</Text>
          </Center>
          <StudentList students={students} selectedClass={selectedClass} openDialog={openDialog} />
          <Box mt={5} py="24px" borderTopColor="#EEEEEE" borderTopWidth="4px">
            <Button
              mx="40px"
              bgColor="#404142"
            ><Text fontFamily="Lexend_600" fontSize={16} color="#ffffff">Send Report</Text></Button>
          </Box>
        </View>
      </RBSheet>

      <Dialog.Container visible={isDialogVisible}>
        <Dialog.Title>
          <Text fontFamily="Lexend_600" fontSize={17}>Send {selectedStudentName}&apos;s Report?</Text>
        </Dialog.Title>
        <Dialog.Description>
          <Text fontFamily="Lexend_400" fontSize={14}>You cannot undo this action.</Text>
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Send"  onPress={handleSend} />
      </Dialog.Container>

      <Dialog.Container visible={isSentVisible} contentStyle={{ minWidth: 120, height: 'auto', padding: 0, alignItems: 'center', boxShadow: 0 }}>
        <Dialog.Description>
          <View w="100%" justifyContent="center" alignItems="center">
          <VStack alignItems="center">
            {!isSending ? (
              <>
              <Icon mb={1} size={75} as={<Ionicons name="checkmark-circle-outline"/>} color="#404142" />
              <Text pb={1} fontFamily="Lexend_600" fontSize={17}>Sent</Text>
              </>
            )
            :
            (
              <Text pb={1} fontFamily="Lexend_600" fontSize={17}>Sending...</Text>
            )}
          </VStack>
          </View>
        </Dialog.Description>
      </Dialog.Container>
    </LinearGradient>
  )
}

export default IndexScreen
