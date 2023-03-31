import { useState, useEffect } from 'react'
import { Text, Box, HStack } from 'native-base'
import { getEvaluationsByStudentId } from '../../../../utils/queries'

const EvalCompleteListItem = ({ item, isLastItem }) => {
  const [evaluations, setEvaluations] = useState([])

  const boxWidth = 30
  const boxHeight = 17
  const colorFilled = '#FE7F2D'
  const colorEmpty = '#FDD3BB'

  useEffect(() => {
    getEvaluationsByStudentId(item._id).then(
      data => {
        setEvaluations(data.filter(evaluation => evaluation.classId == item.class_id))
      },
      error => {
        throw error
      }
    )
  }, [])

  return (
    <HStack py={4} pl={0} pr={3} justifyContent="space-between" alignItems="center" borderBottomWidth={isLastItem ? 0 : 1} borderBottomColor="#cccccc">
      <Text fontFamily="Lexend_400" fontSize={16}>{item.firstname} {item.lastname}</Text>
      <HStack>
        <Box w={boxWidth} h={boxHeight} bgColor={evaluations.length >= 1 ? colorFilled : colorEmpty} ml="1px" borderTopLeftRadius={8} borderBottomLeftRadius={8} />
        <Box w={boxWidth} h={boxHeight} bgColor={evaluations.length >= 2 ? colorFilled : colorEmpty} ml="1px" />
        <Box w={boxWidth} h={boxHeight} bgColor={evaluations.length >= 3 ? colorFilled : colorEmpty} ml="1px" />
        <Box w={boxWidth} h={boxHeight} bgColor={evaluations.length >= 4 ? colorFilled : colorEmpty} ml="1px" />
        <Box w={boxWidth} h={boxHeight} bgColor={evaluations.length >= 5 ? colorFilled : colorEmpty} ml="1px" borderTopRightRadius={8} borderBottomRightRadius={8} />
      </HStack>
    </HStack>
  )
}

export default EvalCompleteListItem