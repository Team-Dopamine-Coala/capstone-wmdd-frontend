import { View, Box, Text, VStack } from "native-base"
import { useEffect, useState, useContext } from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import StudentsSearch from "./myStudents/StudentsSearch"

import {getClassesOfCoach} from '../../../utils/queries'
import {getStudentsByClass} from '../../../utils/queries'
import { AuthContext } from '../../context/AuthContext';


const IndexScreen = ({ navigation }) => {
  const [myStudents, setMyStudents] = useState([])
  const [nameTitle, setNameTitle] = useState([])
  const [myClassIds, setMyClassIds] = useState([])
  let list = []
  // let myClassIds = []
  let allStudents = []
  const {userToken} = useContext(AuthContext)
  const {userInfo} = useContext(AuthContext)
  const userId = '63fcf0bd354e8150f45dd4d2'
  console.log('ID',userInfo.userId)
  
  //1.Fetch all classes which has this userID(All class can fetch by userID)
  useEffect(() => {
      getClassesOfCoach(userId,userToken).then(
        data => {
          console.log('こで',data)
          setMyClassIds(data.map((item) => item._id))
          console.log('I own these classes',myClassIds)
        },
        error => {
          throw error
        }  
      ).then(
        myClassIds.map((eachclassid) => 
          console.log('each',eachclassid)
          // getStudentsByClass(class,userToken).then(
          //   data => {
    
          //   }
          // )
        )
      )
  },[])      
        
      
      // getStudentsByClass(classid)



      // const res = await fetchMyclass()
      // const ress = await fetchAllStudents()


      // setMyclassIds(res.map((item) => item._id))

      // const cls = res.map((item) => item._id)
      // myClassIds.push(cls)

    
  

  const getdata = (res, ress) => {
    res.map((item) => myClassIds.push(item._id))
    // setAllstudents(ress)
    allStudents.push(ress)

    console.log('I own these classes',myClassIds)
    console.log('all students',allStudents)

    myClassIds.forEach((eachId) => {allStudents.map((item) => {
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
    // const getMyclass = async () => {
    //   const res = await fetchMyclass()
      
    //   setMyclassIds(res.map((item) => item._id))
      

    //   console.log('I own these classes',myClassIds)
      

     

    //   //Sorting alphabetically
    //   list.sort((a,b) => {
    //     if (a.firstname < b.firstname) {
    //       return -1
    //     } else if (a.firstname > b.firstname) {
    //       return 1
    //     }
    //     return 0
    //   })
    //   setMyStudents(list)
    //   console.log('matchしたもの',list) 

    //   //Alphabetic Title display
    //   const title = list.reduce((c,d) => {
    //     let group = d.firstname[0]
      
    //     if(!c[group]) c[group] = {group, groupedConn: [d]}
    //     else c[group].groupedConn.push(d);
    //     return c      
    //   },{})
    //   setNameTitle(Object.values(title)) 
    //   console.log('nameタイトル',nameTitle)   
    // }
    // const getAllStudents = async () => {
    //   const res = await fetchAllStudents()
    //   setAllstudents(res)
    //   console.log('I own these classes',myClassIds)
    //   console.log('all students',ress)
      
    //   myClassIds.forEach((eachId) => {res.map((item) => {
    //       item.class_id == eachId ? list = [...list, item] : null})
    //   })

    //   //Sorting alphabetically
    //   list.sort((a,b) => {
    //     if (a.firstname < b.firstname) {
    //       return -1
    //     } else if (a.firstname > b.firstname) {
    //       return 1
    //     }
    //     return 0
    //   })
    //   setMyStudents(list)
    //   console.log('matchしたもの',list) 

    //   //Alphabetic Title display
    //   const title = list.reduce((c,d) => {
    //     let group = d.firstname[0]
    
    //     if(!c[group]) c[group] = {group, groupedConn: [d]}
    //     else c[group].groupedConn.push(d);
    //     return c      
    //   },{})
    //   setNameTitle(Object.values(title)) 
    //   console.log('nameタイトル',nameTitle)   
    // }

  //   getMyclass()
  //   getAllStudents()
  // },[])

    const getAllStudents = async () => {
      // const res = await fetchAllStudents()
      setAllstudents(res)
      console.log('I own these classes',myClassIds)
      console.log('all students',ress)
      
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
  // },[])

  //(api/class/userId)
  // const fetchMyclass = async () => {
  //   const res = await fetch('http://3.84.131.140:3000/api/class/63fcf0bd354e8150f45dd4d2')

  //   const data = await res.json()
  //   console.log('1',data)
  //   if(res.ok){
  //     return data
  //   }
  // }

  // const fetchAllStudents = async () => {
  //   const res = await fetch(`http://3.84.131.140:3000/api/student/${myClassIds[0]}`)
  //   const data = await res.json()
  //   console.log('3',data)
  //   if(res.ok) {
  //     return data
  //   }
  // }





  //2.Fetch All students from class ID(all students need to fetch by classID)
  // useEffect(() => {
  //   const getAllStudents = async () => {
  //     const res = await fetchAllStudents()
  //     setAllstudents(res)
  //     console.log('I own these classes',myClassIds)
  //     console.log('all students',res)
      
  //     myClassIds.forEach((eachId) => {res.map((item) => {
  //         item.class_id == eachId ? list = [...list, item] : null})
  //     })

  //     //Sorting alphabetically
  //     list.sort((a,b) => {
  //       if (a.firstname < b.firstname) {
  //         return -1
  //       } else if (a.firstname > b.firstname) {
  //         return 1
  //       }
  //       return 0
  //     })
  //     setMyStudents(list)
  //     console.log('matchしたもの',list) 

  //     //Alphabetic Title display
  //     const title = list.reduce((c,d) => {
  //       let group = d.firstname[0]
    
  //       if(!c[group]) c[group] = {group, groupedConn: [d]}
  //       else c[group].groupedConn.push(d);
  //       return c      
  //     },{})
  //     setNameTitle(Object.values(title)) 
  //     console.log('nameタイトル',nameTitle)   

  //   }
    
  //   getAllStudents()
  // },[])

  
  

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
                                    navigation.navigate('Student Detail',{trainee, navigation})
              }}>
                <Text>{trainee.firstname} {trainee.lastname}</Text>
              </TouchableOpacity >
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
  //  １. fetcchに必要なものを揃える
  //2. fetch してデータ確認
  //3. その後の処理を入れる
 