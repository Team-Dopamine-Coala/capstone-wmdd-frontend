import { Text, VStack, View } from "native-base"


const CurrentLevelView = (trainee, navigation) => {
console.log(trainee)

    
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
