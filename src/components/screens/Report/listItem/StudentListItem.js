import { Ionicons } from '@expo/vector-icons'
import { Box, HStack, VStack, Text, Button, Heading, Icon, Pressable } from 'native-base'
import { AWS_BACKEND_BASE_URL } from '../../../../utils/static'

const StudentListItem = ({ item, selectedClass, openDialog }) => {
  return (
    <Pressable
      onPress={() => openDialog(item._id)}
      ml="20px"
      p={4}
      pl={0}
      bgColor="#FFFFFF"
      borderRadius={0}
      borderTopWidth={1}
      borderTopColor="#cccccc"
    >
      <HStack justifyContent="space-between" alignItems="center">
        <Text fontFamily="Lexend_400" fontSize={16} textAlign="left">{item.firstname} {item.lastname}</Text>
        <Icon size={5} as={<Ionicons name='arrow-forward' />} />
      </HStack>
    </Pressable>
  )
}

export default StudentListItem