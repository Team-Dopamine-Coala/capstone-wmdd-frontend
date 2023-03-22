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
            <Text style={styles.title}>View Report</Text>
        </TouchableOpacity>
      </View>
  )
}
const styles = StyleSheet.create ({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    marginTop: 16,
    marginHorizontal: 5,
    borderRadius: 12,
  },
  title: {
    // fontFamily: 'Lexend',
    color: "#000000",
    flexWeight: '500',
    fontSize: 18,
    lineHeight: 30,
  }
})
export default ViewReport
