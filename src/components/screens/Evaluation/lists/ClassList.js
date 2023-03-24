import { useEffect } from "react"
import { Box, FlatList, Text } from "native-base"
import ClassListItem from "../listItem/ClassListItem"

const ClassList = ({ classes, navigation }) => {
  return (
    <FlatList
      style={{ borderTopWidth: 1, borderTopColor: '#eeeeee', marginHorizontal: 0 }}
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