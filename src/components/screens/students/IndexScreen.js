import { View, Box, Text, VStack } from "native-base"
import { useEffect, useState } from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import StudentsSearch from "./myStudents/StudentsSearch"

const IndexScreen = ({ navigation }) => {
  const [myClassIds, setMyclassIds] = useState([])
  const [myStudents, setMyStudents] = useState([])
  const [allStudents, setAllstudents] = useState([])
  const [nameTitle, setNameTitle] = useState([])
  let list = []
  
  //1.Fetch all classes which has this userID(All class can fetch by userID)
  useEffect(() => {
    const getMyclass = async () => {
      const res = await fetchMyclass()
      setMyclassIds(res.map((item) => item._id))
    }
    getMyclass()
  },[])
  //(api/class/userId)
  const fetchMyclass = async () => {
    const res = await fetch('http://3.84.131.140:3000/api/class/63e9fcf20386d6f0fd9053b3')

    const data = await res.json()
    if(res.ok){
      return data
    }
  }
  //2.Fetch All students from class ID(all students need to fetch by classID)
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
      console.log('matchしたもの',list) 

      //Alphabetic Title display
      const title = list.reduce((c,d) => {
        let group = d.firstname[0]
    
        if(!c[group]) c[group] = {group, groupedConn: [d]}
        else c[group].groupedConn.push(d);
        return c      
      },{})
      setNameTitle(Object.values(title)) 
      console.log('nameタイトル',nameTitle)   

    }
    
    getAllStudents()
  },[])

  
  const fetchAllStudents = async () => {
    const res = await fetch(`http://3.84.131.140:3000/api/student/${myClassIds[0]}`)
    const data = await res.json()
    if(res.ok) {
      return data
    }
  }

  return(
    <View style={styles.container}>
      <Box>
        <StudentsSearch mystudents={list}/>
      </Box>
      {nameTitle.map((title, i) => (
        <Box key={i} > 
          <Text style={styles.abc}>{title.group}</Text>
          {title.groupedConn.map((trainee, index) => (
            <VStack key={index} style={styles.nameContainer}>
              <TouchableOpacity onPress={() => {console.log('clickしたよ',trainee),
                                    navigation.navigate('Student Detail',{trainee})
              }}>
                <Text>{trainee.firstname} {trainee.lastname}</Text>
              </TouchableOpacity>
            </VStack>
          ))}
        </Box> 
      ))}
    </View>
  )
}
const styles = StyleSheet.create ({
  container: {
    marginRight:10,
     marginLeft:10, 
  },
  abc: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
    marginTop: 15,
  },
  nameContainer: {
     backgroundColor: '#bbb',
     borderRadius: '10',
     paddingHorizontal: 16,
     paddingTop: 10,
     paddingBottom: 10,
  }
})
export default IndexScreen


//TO DO LIST
  //  3. .env fileにfetch addressを変える 
  // ,{ screen: 'Student Detail', params: {user: trainee}}