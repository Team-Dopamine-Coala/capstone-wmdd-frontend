import { Text, VStack, View } from "native-base"
import { StyleSheet } from "react-native"


const SkillsAchievementView = (trainee, navigation) => {
console.log(trainee)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skill Achievement</Text>
      <VStack>
        <Text>Current Level</Text>
      </VStack>
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