import { useState } from "react"
import { Input } from "native-base"
import { StyleSheet } from "react-native"
// import { SearchBar } from "react-native-elements";

const StudentsSearch = (mystudents) => {
const [student, setStudent] = useState('')
  return (
    <>
      <Input  placeholder="Search"
                  variant="rounded"
                  style={styles.inputfield}
                  value={mystudents}
      />
    </>
  )
}
const styles = StyleSheet.create ({
  inputfield: {
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