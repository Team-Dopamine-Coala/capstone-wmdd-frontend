import { useEffect } from "react"
import { Box, FlatList, Text } from "native-base"
import ClassListItem from "../listItem/ClassListItem"

const ClassList = ({ classes, navigation, calendarDate }) => {
  return (
    <FlatList
      style={{ borderTopWidth: 1, borderTopColor: '#eeeeee', marginHorizontal: 0 }}
      data={classes}
      renderItem={({ item, index }) => (
        <ClassListItem item={item} navigation={navigation} calendarDate={calendarDate} order={index} />
      )}
      keyExtractor={item => item._id}
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default ClassList