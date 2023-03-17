import { useState, useEffect } from "react"
import { Center, Heading, Text, View, Box, FlatList, TextArea, Button, VStack } from "native-base"
import { AWS_BACKEND_BASE_URL } from "../../../utils/static"
import { getEvaluationComment, getEvaluationsByStudentId } from "../../../utils/queries"

const EvaluationIndividualStudentComment = ({ navigation, route }) => {
  const { studentId, classId, studentName, className } = route.params
  const [comment, setComment] = useState('')
  const [commentId, setCommentId] = useState(null)
  const [incompleteEval, setIncompleteEval] = useState([])

  useEffect(() => {
    getEvaluationComment(classId, studentId).then(
      data => {
        setComment(data[0].comment)
        setCommentId(data[0]._id)
      },
      error => {
        throw error
      }
    )

    getEvaluationsByStudentId(studentId).then(
      data => {
        setIncompleteEval(data.filter(evaluation => evaluation.classId == classId && evaluation.rating <= 2))
      },
      error => {
        throw error
      }
    )
  }, [])

  const updateComment = () => {
    fetch(`${AWS_BACKEND_BASE_URL}/api/evaluationcomment/${commentId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        comment: comment,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        console.log(incompleteEval.length)
        if (incompleteEval.length == 0) {
          updateStudentEvaluatedStatus(1)
        } else {
          updateStudentEvaluatedStatus(0)
        }
      }
    })
  }

  const updateStudentEvaluatedStatus = (evaluatedStatus) => {
    fetch(`${AWS_BACKEND_BASE_URL}/api/student/${studentId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        evaluated: evaluatedStatus,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        navigation.navigate('Evaluation Index', {
          classId: classId,
          className: className
        })
      } else {
        console.log('Response error')
      }
    })
  }

  return (
    <VStack bgColor="#FFFFFF" height="100%">
      <View p={2}>
        <Box mb={5}>
          <Center>
            <Text fontWeight="bold" fontSize={20}>{studentName}</Text>
            <Text fontWeight="bold">{className}</Text>
          </Center>
        </Box>

        <Box alignItems="center" w="100%">
          <TextArea value={comment} onChangeText={text => setComment(text)} w="100%" h="200px" placeholder="Tap here to add a feedback" p={4} />
        </Box>
      </View>

      <View mt={5} p={5}>
        <Button
          bgColor="#404142"
          onPress={updateComment}
        >
          <Text fontWeight="700" color="#ffffff">Next Student</Text>
        </Button>
      </View>
    </VStack>
  )
}

export default EvaluationIndividualStudentComment