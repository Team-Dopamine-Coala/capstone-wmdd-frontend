import { Box, HStack, VStack, Text, Button, Heading } from 'native-base'

const StudentCard = ({ item }) => {
  return (
    <Box  p={3} >
      <Text>{`${item.firstname} ${item.lastname}`}</Text>
    </Box>
  )
}

export default StudentCard