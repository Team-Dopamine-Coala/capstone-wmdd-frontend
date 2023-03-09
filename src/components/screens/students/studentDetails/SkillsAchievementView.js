import { Text, VStack, View, Box } from "native-base"
import { StyleSheet } from "react-native"


const SkillsAchievementView = ({levelCards}) => {
console.log('レベルカード',levelCards)


  return (
    <View style={styles.container}>
        <Text style={styles.title}>Skill Achievement</Text>
        <VStack>
          {levelCards.map((item, i) => (
            <Box key={i} style={styles.levelbox}>
              <Text>{item.level}</Text>
              <Text>{item.completeSkillNumber} / {item.totalSkillNumber}</Text>
              <Text>skills learned</Text>
            </Box>
          ))}
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