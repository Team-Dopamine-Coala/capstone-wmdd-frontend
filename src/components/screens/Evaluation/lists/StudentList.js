import { Box, FlatList, Text } from "native-base"
import StudentListItem from "../listItem/StudentListItem"

const StudentList = ({ students, navigation, className }) => {
  return (
    <FlatList
      contentContainerStyle={{ paddingTop: 10 }}
      data={students}
      renderItem={({ item }) => (
        <StudentListItem item={item} navigation={navigation} className={className} />
      )}
      keyExtractor={item => item._id}
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default StudentList