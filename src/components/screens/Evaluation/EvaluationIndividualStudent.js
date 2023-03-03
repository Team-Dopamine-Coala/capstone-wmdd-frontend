import { Center, Heading, Text, View, Box } from "native-base"

const EvaluationIndividualStudent = ({ navigation, route, studentIndex }) => {
  const currentStudentIndex = studentIndex || 0 // get array index of current student or start from first student
  const { studentsList, className } = route.params
  const id = studentsList[currentStudentIndex]._id
  const firstname = studentsList[currentStudentIndex].firstname
  const lastname = studentsList[currentStudentIndex].lastname
  const classId = studentsList[currentStudentIndex].class_id

  return (
    <View>
      <Box p={2}>
        <Center>
          {studentsList.length > 1 && (
          <Text fontWeight="bold">Student {currentStudentIndex + 1} of {studentsList.length}</Text>
          )}
          <Text fontWeight="bold" fontSize={20}>{firstname} {lastname}</Text>
          <Text fontWeight="bold">{className}</Text>
        </Center>
      </Box>

    </View>
  )
}

export default EvaluationIndividualStudent