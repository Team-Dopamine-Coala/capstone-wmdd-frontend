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
      bgColor="#EEF1F4"
    >
      <Text>{item.firstname} {item.lastname}</Text>
    </Button>
  )
}

export default StudentListItem