import { Box, HStack, VStack, Text, Button, Heading } from 'native-base'

const StudentListItem = ({ item, navigation, className }) => {
  return (
    <Button
      onPress={() => {
        navigation.navigate('Evaluation Individual Student', {
          studentsList: [item],
          className: className
        })
      }}
      p={4}
      pl={0}
      bgColor="#FFFFFF"
      borderRadius={0}
      borderBottomWidth={1}
      borderBottomColor="#cccccc"
      justifyContent="flex-start"
    >
      <Text textAlign="left">{item.firstname} {item.lastname}</Text>
    </Button>
  )
}

export default StudentListItem