import { useState, useEffect } from "react"
import { Center, Heading, Text, View, Box, FlatList } from "native-base"
import { getEvaluationsByStudentId, getSkillsById } from "../../../utils/queries"
import SkillList from "./lists/SkillList"

const EvaluationIndividualStudent = ({ navigation, route, studentIndex }) => {
  const currentStudentIndex = studentIndex || 0 // get array index of current student or start from first student
  const { studentsList, className } = route.params
  const id = studentsList[currentStudentIndex]._id
  const firstname = studentsList[currentStudentIndex].firstname
  const lastname = studentsList[currentStudentIndex].lastname
  const classId = studentsList[currentStudentIndex].class_id

  const [evaluations, setEvaluations] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    getEvaluationsByStudentId(id).then(
      data => {
        setEvaluations(data.filter(evaluation => evaluation.classId === classId))
        setIsLoading(false)
      },
      error => {
        throw error
      }
    )
  }, [])

  return (
    <View py={2} bgColor="#FFFFFF" height="100%">
      <Box>
        <Center>
          {studentsList.length > 1 && (
          <Text fontWeight="bold">Student {currentStudentIndex + 1} of {studentsList.length}</Text>
          )}
          <Text fontWeight="bold" fontSize={20}>{firstname} {lastname}</Text>
          <Text fontWeight="bold">{className}</Text>
        </Center>
      </Box>

      <SkillList navigation={navigation} evalskills={evaluations} studentId={id} studentName={`${firstname} ${lastname}`} classId={classId} className={className} />
    </View>
  )
}

export default EvaluationIndividualStudent