import { Box, FlatList, Text } from "native-base"
import StudentListItem from "../listItem/StudentListItem"

const StudentList = ({ students, navigation }) => {
  return (
    <FlatList
      data={students}
      renderItem={({ item }) => (
        <StudentListItem item={item} navigation={navigation} />
      )}
      keyExtractor={item => item._id}
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default StudentList