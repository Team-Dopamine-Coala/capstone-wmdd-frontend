import { useState, useEffect, useContext, useRef } from 'react'
import { Dimensions } from 'react-native'
import { AWS_BACKEND_BASE_URL } from '../../../utils/static';
import { Ionicons } from '@expo/vector-icons';
import { View, Box, Center, Heading, VStack, Text, Icon } from 'native-base'
import BottomSheet from 'react-native-simple-bottom-sheet';
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
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [students, setStudents] = useState(null)
  const [totalStudents, setTotalStudents] = useState(null)
  const [isDialogVisible, setIsDialogVisible] = useState(false)
  const [isSentVisible, setIsSentVisible] = useState(false)

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
    ).catch((error) => {
      throw error
    })
  }, [])

  useEffect(() => {
    getStudentsByClass(selectedClass).then(
      data => {
        setStudents(data)
        if (data) {
          setTotalStudents(data.length)
        }
      },
      error => {
        throw error
      }
    ).catch((error) => {
      throw error
    })
  }, [selectedClass])

  const clickedClass = (classid) => {
    setSelectedClass(classid)
    setTimeout(() => {
      panelRef.current.togglePanel()
    }, 1000)
  }

  const openDialog = (studentId) => {
    setIsDialogVisible(true)
    setSelectedStudent(studentId)
  }

  const handleSend = () => {
    fetch(`${AWS_BACKEND_BASE_URL}/api/pdf/${selectedClass}/${selectedStudent}`)
    .then(() => {
      setIsDialogVisible(false)
      setIsSentVisible(true)

      setTimeout(() => {
        setIsSentVisible(false)
      }, 2000)
    })
  }

  const handleCancel = () => {
    setIsDialogVisible(false)
  }

  return (
    <LinearGradient colors={['#F4903F', '#F4903F', '#FC8634', '#FC8634', '#FC8634', '#F69B43', '#F69B43', '#F3AA6A', '#F3AA6A', '#F9D5B4']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} flex={1}>
      <VStack mt="60px">
        <Box pt={7} height="100%" bgColor="#fdfdfd" borderTopLeftRadius={20} borderTopRightRadius={20}>
        
          {isLoading ? <Loading /> : <ClassList classes={classes.sort((a, b) => a.title.localeCompare(b.title))} navigation={navigation} clickedClass={clickedClass} />}

        </Box>
      </VStack>

      {/* <Box style={{ backgroundColor: '#000000', position: 'absolute', bottom: 0, opacity: .5, zIndex: 0, left: 0, width: '100%', height: '100%' }}>
        <Text>Hello</Text>
      </Box> */}
      
      <BottomSheet
        style={{ zIndex: 999999, position: 'relative' }}
        isOpen={true}
        ref={ref => panelRef.current = ref}
        animationDuration={300}
        sliderMinHeight={0}
        sliderMaxHeight={Dimensions.get('window').height * 0.9}
      >
        <View>
          <StudentList students={students} selectedClass={selectedClass} openDialog={openDialog} />
        </View>
      </BottomSheet>

      <Dialog.Container visible={isDialogVisible}>
        <Dialog.Title>
          <Text fontFamily="Lexend_600" fontSize={17}>Send Report?</Text>
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
            <Icon mb={1} size={75} as={<Ionicons name="checkmark-circle-outline"/>} color="#404142" />
            <Text pb={1} fontFamily="Lexend_600" fontSize={17}>Sent</Text>
          </VStack>
          </View>
        </Dialog.Description>
      </Dialog.Container>
    </LinearGradient>
      
      /* <Dialog.Container visible={isDialogVisible}>
        <Dialog.Title>Send Report?</Dialog.Title>
        <Dialog.Description>
          <Center>
            <Text>You cannot undo this action.</Text>
          </Center>
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Send" onPress={handleSend} />
      </Dialog.Container>

      <Dialog.Container visible={isSentVisible}>
        <Dialog.Description>
          <Center>
            <Text>Sent</Text>
          </Center>
        </Dialog.Description>
      </Dialog.Container> */
  )
}

export default IndexScreen
