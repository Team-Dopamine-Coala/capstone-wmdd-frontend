import { useEffect } from "react"
import { Box, FlatList, Text } from "native-base"
import ClassListItem from "../listItem/ClassListItem"

const ClassList = ({ classes, navigation, openSheet, clickedClass }) => {
  return (
    <FlatList
      data={classes}
      renderItem={({ item }) => (
        <ClassListItem item={item} navigation={navigation} openSheet={openSheet} clickedClass={clickedClass} />
      )}
      keyExtractor={item => item._id}
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default ClassList