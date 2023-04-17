import { View, FlatList } from "native-base"
import EvalCompleteListItem from "../listItem/EvalCompleteListItem"

const EvalCompleteList = ({ navigation, students }) => {
  return (
    <View bgColor="#FCF6F8" pl={4} borderRadius="12px">
      <FlatList
        data={students}
        renderItem={({ item, index }) => (
          <EvalCompleteListItem item={item} isLastItem={index == students.length - 1 ? true : false} order={index} />
        )}
        keyExtractor={item => item._id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default EvalCompleteList