import { useState, useEffect } from "react"
import { Center, Heading, Text, View, Box, FlatList } from "native-base"
import { getEvaluationsByStudentId, getSkillsById } from "../../../utils/queries"

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
        console.log(data.filter(evaluation => evaluation.classId === classId).length)
      },
      error => {
        throw error
      }
    )
  }, [])

  const ratingToText = (rating) => {
    if (rating <= 1) {
      return 'Not Started'
    } else if (rating === 2) {
      return 'Ongoing'
    } else {
      return 'Completed'
    }
  }

  // const getSkillName = (skillid) => {
  //   getSkillsById(skillid).then(
  //     data => {
  //       console.log(data.name)
  //       return data.name
  //     },
  //     error => {
  //       throw error
  //     }
  //   )
  // }

  const getSkillName = (skillid) => {
    // const data = await getSkillsById(skillid)
    // console.log(data.name)

    return "hey"
  }

  return (
    <View p={2}>
      <Box>
        <Center>
          {studentsList.length > 1 && (
          <Text fontWeight="bold">Student {currentStudentIndex + 1} of {studentsList.length}</Text>
          )}
          <Text fontWeight="bold" fontSize={20}>{firstname} {lastname}</Text>
          <Text fontWeight="bold">{className} {classId}</Text>
        </Center>
      </Box>

      <FlatList
        data={evaluations}
        renderItem={({ item }) => (
          <Box p={2}>
            <Text>Skill ID: {item.skillId}</Text>
            <Text>Rating: {ratingToText(item.rating)}</Text>
          </Box>
        )}
        keyExtractor={item => item._id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default EvaluationIndividualStudent