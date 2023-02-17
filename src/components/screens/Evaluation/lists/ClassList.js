import { Box, FlatList, Text } from "native-base"

const ClassList = ({ classes, navigation }) => {
  return (
    <FlatList
      data={classes}
      renderItem={({ item }) => (
        <Box bgColor="#EEF1F4" borderRadius="md">
          <Text>{item.title}</Text>
        </Box>
      )}
      keyExtractor={item => item._id}
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default ClassList