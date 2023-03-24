import { Text, VStack, View, Box } from "native-base"
import { StyleSheet } from "react-native"

const SkillsAchievementView = ({myLevelDetail}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title} fontFamily="Lexend_500">Skills Achievement</Text>
        <VStack style={styles.skillsbox}>
          {myLevelDetail.map((item, i) => (
            <Box key={i} style={styles.levelbox} bg="#ffffff" shadow={5}>
              <Text style={styles.level} fontFamily="Lexend_500">Level {item.levelName}</Text>
              <Box style={styles.numbersbox}>
                <Text style={styles.Bold} fontFamily="Lexend_700">{item.compNbr}</Text> 
                <Text style={styles.normal} fontFamily="Lexend_400"> / {item.totalNbr}</Text>
              </Box>
              <Text style={styles.learned} fontFamily="Lexend_300">skills learned</Text>
            </Box>
          ))}
        </VStack>
    </View>
  )
}
const styles = StyleSheet.create ({
  container: {
  },
  title: {
    fontSize: 16,
    // fontWeight: "500",
    lineHeight: 24,
    marginHorizontal: 10,
  },
  skillsbox:{
    flexDirection: 'row',
    paddingLeft: 5,
    marginTop: 16,
  },
  levelbox: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingLeft: 34,
    paddingRight: 61,
    gap: 14,
  },
  level:{
    // fontWeight: '500',
    fontSize: 14,
    lineHeight: 30,
    marginBottom: 4,
  },
  numbersbox:{
    flexDirection: 'row',
  },
  Bold:{
    color: '#000000',
    // fontWeight: '700',
    fontSize: 32,
    lineHeight: 31,
  },
  normal:{
    color: '#000000',
    // fontWeight: '400',
    fontSize: 16,
    lineHeight: 30,
    marginLeft: 5,
  },
  learned:{
    color: '#000000',
    // fontWeight: '300',
    fontSize: 16,
    marginTop: 10,
  }
})
export default SkillsAchievementView

//TODO LIST 
//1.LEVELをLEVEL番号ごとにソーティングしてdisplayする！
//2.CompletedしたLevel数を表示