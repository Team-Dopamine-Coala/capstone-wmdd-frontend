import { Box, HStack, VStack, Text, Button, Heading } from 'native-base'

const StudentCard = ({ item }) => {
  return (
    <Box   p={4}
    pl={0}
    borderRadius={0}
    borderBottomWidth={.5}
    borderBottomColor="#BBBBBB"
    justifyContent="flex-start">
      <Text fontFamily="Lexend_400" fontSize="16" color="#000000">{`${item.firstname} ${item.lastname}`}</Text>
    </Box>
  )
}

export default StudentCard