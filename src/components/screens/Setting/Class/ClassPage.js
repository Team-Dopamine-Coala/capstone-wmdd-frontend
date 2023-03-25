import { View, Img, Box, Text, Title } from 'native-base'
import { TouchableOpacity, SafeAreaView} from "react-native"

import StudentsSearch from "../../Students/myStudents/StudentsSearch"

const ClassPage = () => {
  return (
    <SafeAreaView>
      <StudentsSearch/>
      <Box>
        <Test>week</Test>
      </Box>
    </SafeAreaView>
  )
}

export default ClassPage
