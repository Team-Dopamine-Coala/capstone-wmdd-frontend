import { View, Button } from "native-base"

const CurriculumScreen = ({ navigation }) => {
  return (
    <View>
      <Button onPress={() => { navigation.navigate('Students') }}>Hello</Button>
    </View>
  )
}

export default CurriculumScreen