import { View, Box, Text } from "native-base"
import { useEffect, useState } from "react"
import StudentsSearch from "./StudentsSearch"
import { TouchableOpacity } from "react-native"

const StudentsScreen = ({ navigation }) => {
  const [myClassIds, setMyclassIds] = useState([])
  const [myStudents, setMyStudents] = useState([])
  const [allStudents, setAllstudents] = useState([])
  const [yourInfo, setYourInfo] = useState('')
  let list = []

  //1.userIDを持ったclassを全部fetch(all classはuserIDからfetch)
  useEffect(() => {
    const getMyclass = async () => {
      const res = await fetchMyclass()
      setMyclassIds(res.map((item) => item._id))
      // console.log('user has this classes: class_Id',myClassIds)
    }
    getMyclass()
  },[])
  //(api/class/userId)
  const fetchMyclass = async () => {
    const res = await fetch('http://localhost:5003/api/class/63e9fcf20386d6f0fd9053b3')
    const data = await res.json()
    if(res.ok){
      return data
    }
  }

  //2.class IDからstudentをfetch(all studentsはclassIDでFetchだから)
  useEffect(() => {
    const getAllStudents = async () => {
      const res = await fetchAllStudents()
      setAllstudents(res)
      console.log('I own these classes',myClassIds)
      console.log('all students',res)
      
      myClassIds.forEach((eachId) => {res.map((item) => {
          item.class_id == eachId ? list = [...list, item] : null})
      })
      //Sorting alphabetically
      list.sort((a,b) => {
        if (a.firstname < b.firstname) {
          return -1
        } else if (a.firstname > b.firstname) {
          return 1
        }
        return 0
      })
      setMyStudents(list)
      console.log('matchしたもの',myStudents)
      
    }
    getAllStudents()
  },[])

  const fetchAllStudents = async () => {
    const res = await fetch(`http://localhost:5003/api/student/${myClassIds[0]}`)
    const data = await res.json()
    if(res.ok) {
      return data
    }
  }

  return (
    <View>
      <Box>
        <StudentsSearch mystudents={myStudents}/>
      </Box>
      <Box>
        {myStudents.map((item) => (
          <>
            <TouchableOpacity onPress={() => console.log(item)} student={item} navigation={navigation}>
              <Text>{item.firstname} {item.lasname}</Text>
            </TouchableOpacity>
          </>
        ))}
      </Box>
      
    </View>
  )
}

export default StudentsScreen
// onPress={() => { navigation.navigate('Students') }