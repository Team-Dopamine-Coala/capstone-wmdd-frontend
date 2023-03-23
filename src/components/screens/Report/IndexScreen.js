import { useState, useEffect, useContext, useRef } from 'react'
import { Dimensions } from 'react-native'
import { AWS_BACKEND_BASE_URL } from '../../../utils/static';
import { View, Box, Center, Heading, VStack, Text } from 'native-base'
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

  const openDialog = (studentId) => {
    setIsDialogVisible(true)
    setSelectedStudent(studentId)
  }

  const handleSend = () => {
    fetch(`${AWS_BACKEND_BASE_URL}/api/pdf/${selectedClass}/${selectedStudent}`)
    setIsDialogVisible(false)
  }

  const handleCancel = () => {
    setIsDialogVisible(false)
  }

  return (
    <>
      <VStack pt="50px" flex={1} bgColor="#F4903F">
        <Box pt={2} height="100%" bgColor="#ffffff" borderTopLeftRadius={20} borderTopRightRadius={20}>
        
          {isLoading ? <Loading /> : <ClassList classes={classes.sort((a, b) => a.title.localeCompare(b.title))} navigation={navigation} clickedClass={clickedClass} />}
        </Box>
      </VStack>

      <Box style={{ backgroundColor: '#000000', position: 'absolute', bottom: `${isDialogVisible ? 0 : '-100%'}`, opacity: .7, left: 0, width: '100%', height: '100%' }}>
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
      
      <Dialog.Container visible={isDialogVisible}>
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
      </Dialog.Container>
    </>
  )
}

export default IndexScreen
