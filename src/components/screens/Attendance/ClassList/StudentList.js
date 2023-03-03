import { Box, FlatList, Text, Checkbox } from "native-base"
import StudentCard from "../Card/StudentCard"

const StudentList = ({ students, navigation, checkboxHandler }) => {
  return (
    <FlatList
      contentContainerStyle={{ paddingTop: 10 }}
      data={students}
      renderItem={({ item }) => (
        <Checkbox onChange={checkboxHandler} value="hello" colorScheme="orange" accessibilityLabel="This is a checkbox of a student" ><StudentCard item={item} navigation={navigation} /></Checkbox>
      )}
      keyExtractor={item => item._id}
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default StudentList