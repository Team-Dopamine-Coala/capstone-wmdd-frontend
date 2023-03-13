import { Box, Text, VStack, ScrollView } from "native-base"
import { useEffect, useState, useContext } from "react"
import { TouchableOpacity, StyleSheet, SafeAreaView } from "react-native"
import StudentsSearch from "./myStudents/StudentsSearch"

import {getClassesOfCoach, getStudentsByClass} from '../../../utils/queries'
import { AuthContext } from '../../context/AuthContext';

const IndexScreen = ({ navigation, route }) => {
  const [sortedMyStudents, setSortedMyStudents] = useState([])
  const [myAllStudents, setMyAllStudents] = useState([])
  const [nameTitle, setNameTitle] = useState([])
  const [myClassIds, setMyClassIds] = useState([])
  const [endFetch, setEndFetch ] = useState(false)
 
  const {userToken} = useContext(AuthContext)
  const userId = '63fcf0bd354e8150f45dd4d2'
  
  //1.Fetch all classes which has this userID(All class can fetch by userID)
  useEffect(() => {
    // console.log('start!')
      getClassesOfCoach(userId,userToken)
        .then((data) => {
          setMyClassIds(data.map((item) => item._id))
      })
    },[])     
    
    //2.Fetch students this in this user's class
    useEffect(() => {
        myClassIds.map((eachclassid, i) => {
          getStudentsByClass(eachclassid,userToken)
            .then((data) => {
              data.map((person) =>setMyAllStudents(onlvalue => [...onlvalue, person]))
              if (myClassIds.length === i+1) {
                setEndFetch(true)
              }else {
                null
              }
            })
        })
        // console.log('I own these classes',myClassIds)
    }, [myClassIds])
    
    //3. Sorting and Alphabetic title display
    useEffect(() => {
      // console.log('all kids list',myAllStudents)
      sorting()
      displaytitle()
    },[endFetch])


  //====FUNCTIONS=====================================================================
  //Sorting alphabetically
  const sorting = () => {
    myAllStudents.sort((a,b) => {
      if (a.firstname < b.firstname) {
        return -1
      } else if (a.firstname > b.firstname) {
        return 1
      }
      return 0
    })
    setSortedMyStudents(myAllStudents)
    // console.log('並べた結果',myAllStudents.length, myAllStudents)
  }
      
  //Alphabetic Title display
  const displaytitle = () => {
    const title = myAllStudents.reduce((c,d) => {
      let group = d.firstname[0]
    
      if(!c[group]) c[group] = {group, groupedConn: [d]}
        else c[group].groupedConn.push(d);
        return c      
    },{})
    setNameTitle(Object.values(title))
    // console.log('nameタイトル',nameTitle)
  }

  return(
    <SafeAreaView style={styles.container}>
      <Box>
        <StudentsSearch myAllStudents={myAllStudents}/>
      </Box>
      <ScrollView style={styles.scrollarea}>
        {nameTitle.map((title, i) => ( 
          <Box key={i} style={styles.box}> 
            <Text style={styles.abc}>{title.group}</Text>
            <VStack  style={styles.nameContainer}>
              {title.groupedConn.map((trainee, index) => (             
                <TouchableOpacity   key={index} 
                                    onPress={() => {
                                    navigation.navigate('Student Detail',{trainee})
                }}>
                  <Text>{trainee.firstname} {trainee.lastname}</Text>
                </TouchableOpacity >
              ))}
            </VStack>
          </Box> 
        ))}
      </ScrollView>    
    </SafeAreaView>
  )
}
const styles = StyleSheet.create ({
  container: {
    paddingVertical:24,
    paddingHorizontal: 20,
  },
  scrollarea: {
    marginTop: 24,
  },
  box: {
    marginTop: 20,
  },
  abc: {
    fontWeight: '600',
    fontSize: 24,
    marginBottom: 5,
    marginTop: 15,
  },
  nameContainer: {
    marginTop: 8,
     backgroundColor: '#FDFDFD',
     borderRadius: '12',
     paddingHorizontal: 16,
     paddingTop: 10,
     paddingBottom: 10,
  }
})
export default IndexScreen
