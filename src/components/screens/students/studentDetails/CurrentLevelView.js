import { Text, VStack, View } from "native-base"
import { StyleSheet } from "react-native"


const CurrentLevelView = (trainee, navigation) => {
console.log('Level のページ',trainee.student._id)
const studentId = trainee.student._id

//Fetch program
//Fetch level
//Fetch skills

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gymnastics  </Text>
      <VStack style={styles.levelbox}>
        <Text style={styles.subtitle}>Current Level</Text>
        <Text>Level </Text>

      <Text>  /skills</Text>  
      </VStack>
    </View>
      )
}
const styles = StyleSheet.create ({
  container: {
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  levelbox: {
    marginTop: 10,
    backgroundColor: '#bbb',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
  }
})
export default CurrentLevelView

//Task
//1.levelfetchする
//2.progress bar入れる
//3.確認しないといけないこと！　どこにこれらのdataをstoreするのか全て確認！