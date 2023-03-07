import { View, VStack, Text } from 'native-base'
import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

const ViewReport = ({student}) => {
    const clickReport = () => {
        console.log('move to report page')
    }
  return (
    <View>  
      <VStack style={styles.box}>
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
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadow: 5,
}
})
export default ViewReport
