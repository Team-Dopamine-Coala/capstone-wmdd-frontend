import { Box, FlatList, Text, Checkbox } from "native-base"
import StudentCard from "../Card/StudentCard"

const StudentList = ({ students, navigation, checkboxHandler }) => {

  
  return (
    <Checkbox.Group onChange={checkboxHandler}>
        {students.map((item) => {
            return <Checkbox value={item._id} key= {item._id} colorScheme="orange" accessibilityLabel="This is a checkbox of a student" >{item.firstname+item.lastname}</Checkbox>
        })}
    
    </Checkbox.Group>
        


  )
}

export default StudentList