import { Box, FlatList, Text, View, VStack } from "native-base"
import StudentListItem from "../listItem/StudentListItem"

const StudentList = ({ students, navigation, className }) => {
  return (
    <View flex={1} my={3}>
      <VStack>
        {students.filter(student => student.evaluated == 0).length >= 1 && (
        <>
          <Text mb={2} fontFamily="Lexend_500" fontSize={16}>Pending</Text>
          <Box mb={7} pl="16px" borderWidth="1" bgColor="#FDFDFD" borderColor="#cccccc" borderRadius="12px" shadow={5} overflow="hidden">
          <FlatList
            data={students.filter(student => student.evaluated == 0)}
            renderItem={({ item }) => (
              <StudentListItem item={item} navigation={navigation} className={className} />
            )}
            keyExtractor={item => item._id}
            showsHorizontalScrollIndicator={false}
          />
          </Box>
        </>
        )}

        {students.filter(student => student.evaluated == 1).length >= 1 && (
        <>
          <Text mb={2} fontFamily="Lexend_500" fontSize={16}>Completed</Text>
          <Box pl="16px" borderWidth="1" bgColor="#FFFFFF" borderColor="#cccccc" borderRadius="12px" shadow={5} overflow="hidden">
          <FlatList
            data={students.filter(student => student.evaluated != 0)}
            renderItem={({ item }) => (
              <StudentListItem item={item} navigation={navigation} className={className} />
            )}
            keyExtractor={item => item._id}
            showsHorizontalScrollIndicator={false}
          />
          </Box>
        </>
        )}
      </VStack>
    </View>
  )
}

export default StudentList