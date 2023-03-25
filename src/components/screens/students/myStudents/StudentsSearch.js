import { Input, Icon } from "native-base"
import { StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons'

const StudentsSearch = () => {

const [value, setValue] = useState('')

  return (
    <>
      <Input  placeholder="Search"
                  variant="rounded"
                  style={styles.inputfield}
                  fontFamily="Lexend_400"
                  // value={myAllStudents}
                  // onPress={(e) => {
                  //   setValue(e.target.myAllStudents)}}
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
  },
  icon:{
    color: '#737373',
    width:20,
    height: 20,
    fontSize: 20,
    lineHeight: 20,
    marginRight: 16,
  }
})
export default StudentsSearch