import { View, Input } from "native-base"
import { useState } from "react"
import { StyleSheet } from "react-native"

const StudentsSearch = (mystudents) => {
const [student, setStudent] = useState('')
  return (
    <>
      <Input  placeholder="Search"
              variant="rounded"
              style={styles.inputfield}
      />
    </>
  )
}
const styles = StyleSheet.create ({
  inputfield: {
    // fontFamily: 'Lexend',
    fontStyle: 'normal',
    borderRadius:35,
    fontSize: 16,
    paddingTop: 10,
    paddingLeft: 16,
    paddingRight: 8,
    paddingBottom: 10,
  }
})
export default StudentsSearch