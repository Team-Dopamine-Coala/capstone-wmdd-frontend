import { Box, FlatList, Text } from "native-base"
import ClassListItem from "../listItem/ClassListItem"

const ClassList = ({ classes, navigation }) => {
  return (
    <FlatList
      data={classes}
      renderItem={({ item }) => (
        <ClassListItem item={item} navigation={navigation} />
      )}
      keyExtractor={item => item._id}
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default ClassList