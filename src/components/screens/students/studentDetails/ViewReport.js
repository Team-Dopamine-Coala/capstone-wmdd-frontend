import React from 'react'
import { View, VStack, Text } from 'native-base'
import { TouchableOpacity, StyleSheet } from 'react-native'

const ViewReport = ({student}) => {
    const clickReport = () => {
        console.log('move to report page')
    }
  return (
    <View>  
      <VStack style={styles.box} bg="#ffffff" borderRadius="md" shadow={5}>
        <TouchableOpacity onPress={clickReport} >
            <Text>View Report</Text>
        </TouchableOpacity>
      </VStack>
    </View>
  )
}
const styles = StyleSheet.create ({
box: {
    padding:10,
  marginBottom: 10,
  marginHorizontal: 5,
}
})
export default ViewReport
