import React from 'react'
import { View, Text, Box } from 'native-base'

const EvaluationStack = () => {
  return (
    <View p={5}>
      <Box width="100%" height="100px" position="relative">
        <Box bg="#ffc0cb" width="100%" height="90%" borderRadius="md" shadow={9} position="absolute" top="5%">
        </Box>
        <Box ml={4} p={3} bg="#ffffff" flex={1} height="100%" borderRadius="md" shadow={5}>
          <Text>Hello World</Text>
        </Box>
      </Box>
    </View>
  )
}

export default EvaluationStack
