import { Box, Text } from 'native-base'

const StudentCard = ({ item, index, arraylength }) => {

  return (
    <Box  
          p={3}
          pl={0}
          borderBottomWidth={arraylength !== index + 1 ? .5 : null}
          borderBottomColor={arraylength !== index + 1 ? "#BBBBBB" : null}
          justifyContent="flex-start"
    >
      <Text fontFamily="Lexend_400" fontSize="16" color="#000000">{`${item.firstname} ${item.lastname}`}</Text>
    </Box>
  )
}

export default StudentCard