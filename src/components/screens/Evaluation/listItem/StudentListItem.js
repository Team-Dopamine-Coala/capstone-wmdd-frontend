import { Ionicons } from '@expo/vector-icons'
import {Text, Icon, HStack, Pressable } from 'native-base'

const StudentListItem = ({ item, navigation, className, calendarDate }) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Evaluation Individual Student', {
          studentsList: [item],
          className: className,
          calendarDate: calendarDate
        })
      }}
      p={4}
      pl={0}
      bgColor="#FFFFFF"
      borderRadius={0}
      borderBottomWidth={1}
      borderBottomColor="#cccccc"
    >
      <HStack justifyContent="space-between" alignItems="center">
        <Text fontFamily="Lexend_400" fontSize={16} textAlign="left">{item.firstname} {item.lastname}</Text>
        <Icon size={5} as={<Ionicons name='arrow-forward' />} />
      </HStack>
    </Pressable>
  )
}

export default StudentListItem