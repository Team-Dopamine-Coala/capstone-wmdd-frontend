import { Box, HStack, VStack, Text, Button, Heading } from 'native-base'
import { AWS_BACKEND_BASE_URL } from '../../../../utils/static'

const StudentListItem = ({ item, selectedClass, openDialog }) => {
  return (
    <Button
      onPress={() => openDialog(item._id)}
      p={4}
      bgColor="#ffffff"
    >
      <Text>{item.firstname} {item.lastname}</Text>
    </Button>
  )
}

export default StudentListItem