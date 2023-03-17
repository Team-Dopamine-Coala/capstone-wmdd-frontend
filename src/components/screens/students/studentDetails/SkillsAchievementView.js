import { Text, VStack, View, Box } from "native-base"
import { StyleSheet } from "react-native"

const SkillsAchievementView = ({levelCards}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Skills Achievement</Text>
        <VStack style={styles.skillsbox}>
          {levelCards.map((item, i) => (
            <Box key={i} style={styles.levelbox} bg="#ffffff" borderRadius="md" shadow={5}>
              <Text style={styles.level}>{item.level}</Text>
              <Box style={styles.numbers}>
                <Text style={styles.Bold}>{item.completeSkillNumber}</Text> 
                <Text style={styles.normal}> / {item.totalSkillNumber}</Text>
              </Box>
              <Text style={styles.learned}>skills learned</Text>
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
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 16,
  },
  skillsbox:{
    flexDirection: 'row',
    paddingLeft: 5,
  },
  levelbox: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 24, 
  },
  level:{
    fontWeight: '500',
    fontSize: 14,
    height: 30,
    marginBottom: 4,
  },
  numbers:{
    flexDirection: 'row',
  },
  Bold:{
    fontWeight: '700',
    // fontSize: 32,
    fontSize: 22,
    // height: 30,
  },
  normal:{
    fontWeight: '300',
    fontSize: 16,
    
    // paddingTop:10,
  },
  learned:{
    fontWeight: '300',
    fontSize: 16,
  }
})
export default SkillsAchievementView

//TODO LIST 
//1.LEVELをLEVEL番号ごとにソーティングしてdisplayする！
//2.CompletedしたLevel数を表示