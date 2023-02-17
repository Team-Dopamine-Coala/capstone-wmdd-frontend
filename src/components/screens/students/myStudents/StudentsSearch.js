import { View, Input } from "native-base"
import { useState } from "react"

const StudentsSearch = (mystudents) => {
const [student, setStudent] = useState('')
  return (
    <View>
      <Input placeholder="Search"
            variant="outline"
      />
    </View>
  )
}

export default StudentsSearch