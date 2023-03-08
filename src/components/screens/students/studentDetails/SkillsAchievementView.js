import { Text, VStack, View, Box } from "native-base"
import { StyleSheet } from "react-native"


const SkillsAchievementView = ({student, allLevels}) => {
// console.log('skill',trainee.student)
// console.log('新しい',student)
console.log('新しい',allLevels)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skill Achievement</Text>
      <VStack>
        <Text>Hey</Text>
        {allLevels.map((item, i) => {
          <Box key={i}>
            <Text >{item.title}</Text>
            <Text>{item.skills.length}skills learned</Text>
            <Text>でないよ</Text>
          </Box>
        })}
      </VStack>
      <Text>Hello</Text>
    </View>
  )
}
const styles = StyleSheet.create ({
  container: {
    paddingVertical: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
})
export default SkillsAchievementView