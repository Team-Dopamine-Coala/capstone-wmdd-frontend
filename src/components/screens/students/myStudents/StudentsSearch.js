import { useState } from "react"
import { Input } from "native-base"
import { StyleSheet } from "react-native"

const StudentsSearch = ({myAllStudents}) => {

const [value, setValue] = useState('')

  return (
    <>
      <Input  placeholder="Search"
                  variant="rounded"
                  style={styles.inputfield}
                  // value={myAllStudents}
                  // onPress={(e) => {
                  //   setValue(e.target.myAllStudents)}}
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