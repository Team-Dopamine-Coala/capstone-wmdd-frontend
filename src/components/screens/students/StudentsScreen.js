import { View, Box, Text, VStack } from "native-base"
import { useEffect, useState } from "react"
import { TouchableOpacity } from "react-native"

import StudentsSearch from "./myStudents/StudentsSearch"

const StudentsScreen = ({ navigation }) => {
  const [myClassIds, setMyclassIds] = useState([])
  const [myStudents, setMyStudents] = useState([])
  const [allStudents, setAllstudents] = useState([])
  // const [nameTitle, setNameTitle] = useState([])
  let list = []
  let nameTitle = []

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

      // titleDisplay()
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

  //Alphabetic Title display
  const titleDisplay = () => {
    const title = list.reduce((c,d) => {
      let group = d.firstname[0]
  
      if(!c[group]) c[group] = {group, groupedConn: [d]}
      else c[group].groupedConn.push(d);
      return c      
    },{})
    console.log('title',title)
    // setNameTitle(Object.values(title)) 
    nameTitle.push(Object.values(title)) 
    console.log('タイトル',nameTitle)   
  }
   


  return(
    <View>
      <Box>
        <StudentsSearch mystudents={myStudents}/>
      </Box>
      <Box>
          {/* {nameTitle.map((initial, i) => (
            <Box key={i}> 
            <Text>{initial.group}</Text>  */}
              {myStudents.map((item, index) => (
                <VStack key={index}>
                  <TouchableOpacity onPress={() => (console.log('clickしたよ',item),
                                    // navigation.navigate('StudentDetailScreen',{ screen: 'StudentRetailScreen', params: {user: item}})
                                    navigation.navigate('StudentDetail',{ screen: 'StudentDetail', params: {user: item}})
                                    )}
                                    >
                    <Text>{item.firstname} {item.lastname}</Text>
                  </TouchableOpacity>
                </VStack>
              ))}
            {/* </Box> 
          ))}  */}
      </Box>
    </View>
  )
}

export default StudentsScreen


//TO DO LIST
  //   1. alphabetの最初の頭にtitleをつける
  //  2. navigationで次のページに移動
  //  3. .env fileにfetch addressを変える 




  // //Alphabetic Title display
  // let title = list.reduce((c,d) => {
  //   let group = d.firstname[0]

  //   if(!c[group]) c[group] = {group, groupedConn: [d]}
  //   else c[group].groupedConn.push(d);
  //   return c      
  // },{})

  // setNameTitle(Object.values(title)) 
  // // console.log(nameTitle)    