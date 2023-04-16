import { Input } from "native-base"
import { StyleSheet } from "react-native"

import Search from '../../../svg/StudentsIcons/Search'
const StudentsSearch = () => {

  return (
    <>
      <Input  placeholder="Search"
              variant="rounded"
              style={styles.inputfield}
              fontFamily="Lexend_400"
              InputRightElement={
                <Search />
              }
      />
    </>
  )
}
const styles = StyleSheet.create ({
  inputfield: {
    borderRadius:35,
    fontSize: 16,
    color: '#242424',
    paddingTop: 10,
    paddingLeft: 16,
    paddingRight: 8,
    paddingBottom: 10,
  }
})
export default StudentsSearch