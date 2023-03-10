import { Box, HStack, VStack, Text, Button, Heading } from 'native-base'
import { AWS_BACKEND_BASE_URL } from '../../../../utils/static'

const StudentListItem = ({ item, selectedClass }) => {

  const sendEmail = () => {
    fetch(`${AWS_BACKEND_BASE_URL}/api/pdf/${selectedClass}/${item._id}`)
  }

  return (
    <Button
      onPress={() => sendEmail()}
      p={4}
      bgColor="#ffffff"
    >
      <Text>{item.firstname} {item.lastname}</Text>
    </Button>
  )
}

export default StudentListItem