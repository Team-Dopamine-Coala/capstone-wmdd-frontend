import { useState } from "react"
import { Input } from "native-base"
import { StyleSheet } from "react-native"
// import { SearchBar } from "react-native-elements"

const StudentsSearch = ({myAllStudents}) => {
console.log('search',myAllStudents)
const [value, setValue] = useState('')

  return (
    <>
      {/* <SearchBar laceholder="Search"
                  value={myAllStudents}
                  onChangeText={(search) => {
                    setSearch(search)}}

      /> */}
      <Input  placeholder="Search"
                  variant="rounded"
                  style={styles.inputfield}
                  value={myAllStudents}
                  onPress={(e) => {
                    setValue(e.target.myAllStudents)}}
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