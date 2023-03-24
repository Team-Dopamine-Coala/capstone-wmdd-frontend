import { Ionicons } from '@expo/vector-icons'
import {Text, Icon, HStack, Pressable } from 'native-base'

const StudentListItem = ({ item, navigation, className }) => {
  return (
    <Pressable
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
    >
      <HStack justifyContent="space-between" alignItems="center">
        <Text textAlign="left">{item.firstname} {item.lastname}</Text>

        <Icon size={5} as={<Ionicons name='arrow-forward' />} />
      </HStack>
    </Pressable>
  )
}

export default StudentListItem