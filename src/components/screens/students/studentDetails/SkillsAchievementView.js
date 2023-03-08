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
          {allLevels.map((item, i) => (
            <Box key={i} style={styles.levelbox}>
              <Text>{item.title}</Text>
              <Text> / {item.skills.length}</Text>
              <Text>skills learned</Text>
            </Box>
          ))}
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
  levelbox: {
    backgroundColor: '#FDFDFD',
    paddingHorizontal: 16,
     paddingTop: 10,
     paddingBottom: 10,
     margin:10,
  }
})
export default SkillsAchievementView

//TODO LIST 
//1.LEVELをLEVEL番号ごとにソーティングしてdisplayする！
//2.CompletedしたLevel数を表示