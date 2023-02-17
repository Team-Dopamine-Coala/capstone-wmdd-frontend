import { Box, HStack, VStack, Text, Button, Heading } from 'native-base'

const StudentListItem = ({ item, navigation }) => {
  return (
    <Box p={3} bgColor="#EEF1F4">
      <Text>{item.firstname} {item.lastname}</Text>
    </Box>
  )
}

export default StudentListItem