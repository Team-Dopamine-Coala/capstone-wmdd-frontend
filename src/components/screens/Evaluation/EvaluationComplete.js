import { Center, Heading, Text, VStack, View, HStack, Button, Image, ScrollView } from 'native-base'
import { useState, useEffect } from 'react'
import EvalCompleteList from './lists/EvalCompleteList'
import Loading from '../../layout/Loading'

import { getStudentsByClass } from '../../../utils/queries'

const EvaluationComplete = ({ navigation, route}) => {
  const { classId, className, calendarDate } = route.params
  const [ students, setStudents ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getStudentsByClass(classId).then(
      data => {
        setStudents(data)
        setIsLoading(false)
      },
      error => {
        throw error
      }
    )
  }, [classId])

  return (
    <ScrollView bgColor="#FFFFFF" flex={1} p="20px" pt={0}>
      <VStack height="100%" flex={1}>
        <Center>
          <Image source={{uri: "https://res.cloudinary.com/dp53wf7gb/image/upload/v1680252154/coala-blurb_emuuey.png"}} alt="Coala Blurb" size={260} />

          <Text mb={3} fontFamily="Lexend_700" fontSize={24}>Evaluation Complete!</Text>
        </Center>
      
        <View flex={1}>
          <HStack justifyContent="space-between" p="15px">
            <Text fontFamily="Lexend_500" fontSize={16}>Student</Text>
            <Text fontFamily="Lexend_500" fontSize={16}>Skill Accomplishment</Text>
          </HStack>

            {isLoading ? <Loading /> : <EvalCompleteList students={students} />}
          
          <Button
            mx="20px"
            mt="45px"
            mb={5}
            bgColor="#404142"
            onPress={() => {
              navigation.navigate('Evaluation Index')
            }}
          >
            <Text fontFamily="Lexend_600" color="#ffffff">Done</Text>
          </Button>
        </View>
      </VStack>
    </ScrollView>
  )
}

export default EvaluationComplete