import { Box, HStack, VStack, Text, Button, Heading } from 'native-base'

const StudentCard = ({ item }) => {
  return (
    <Box  p={3} >
      <Text>{item.studentId}</Text>
    </Box>
  )
}

export default StudentCard