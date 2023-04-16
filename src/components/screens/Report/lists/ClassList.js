import { useEffect } from "react"
import { Box, FlatList, Text } from "native-base"
import ClassListItem from "../listItem/ClassListItem"

const ClassList = ({ classes, navigation, openSheet, clickedClass }) => {
  return (
    <FlatList
      data={classes}
      renderItem={({ item, index }) => (
        <ClassListItem item={item} navigation={navigation} openSheet={openSheet} clickedClass={clickedClass} order={index} />
      )}
      keyExtractor={item => item._id}
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default ClassList