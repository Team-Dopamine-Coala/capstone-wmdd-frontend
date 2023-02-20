import { View, Input } from "native-base"
import { useState } from "react"
import { StyleSheet } from "react-native"

const StudentsSearch = (mystudents) => {
const [student, setStudent] = useState('')
  return (
    <View style={styles.container}>
      <Input  placeholder="Search"
              variant="outline"
              style={styles.inputfield}
      />
    </View>
  )
}
const styles = StyleSheet.create ({
  container: {
    marginVertical: 20,
  },
  inputfield: {
    borderRadius: 50,
  }
})
export default StudentsSearch