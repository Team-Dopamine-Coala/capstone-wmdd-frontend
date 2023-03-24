import React from 'react'
import { View, VStack, Text } from 'native-base'
import { TouchableOpacity, StyleSheet } from 'react-native'

const ViewReport = ({student}) => {
    const clickReport = () => {
        console.log('move to report page')
    }
  return (
      <View style={styles.container} bg="#fDFDFD" shadow={5}>
        <TouchableOpacity onPress={clickReport} >
            <Text style={styles.title} fontFamily="Lexend_400">View Report</Text>
        </TouchableOpacity>
      </View>
  )
}
const styles = StyleSheet.create ({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 12,
    marginTop: 24,
    marginHorizontal: 5,
    borderRadius: 12,
  },
  title: {
    color: "#000000",
    fontSize: 16,
    lineHeight: 22,
  }
})
export default ViewReport
