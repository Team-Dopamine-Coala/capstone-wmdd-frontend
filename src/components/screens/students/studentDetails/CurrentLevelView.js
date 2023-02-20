import { Text, VStack, View } from "native-base"


const CurrentLevelView = (trainee, navigation) => {
console.log(trainee)
const traineeId = trainee._id

//Fetch program
//Fetch level
//Fetch skills

  return (
    <View>
      <Text>Gymnastics  </Text>
      <VStack>
        <Text>Current Level</Text>
        <Text>Level </Text>

      <Text>  skills</Text>  
      </VStack>
    </View>
      )
}

export default CurrentLevelView

//Task
//1.levelfetchする
//2.progress bar入れる
//3.確認しないといけないこと！　どこにこれらのdataをstoreするのか全て確認！