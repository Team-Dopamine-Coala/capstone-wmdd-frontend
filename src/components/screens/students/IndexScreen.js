import { Box, Text, VStack, ScrollView, Input, View, HStack } from "native-base"
import { useEffect, useState, useContext } from "react"
import { TouchableOpacity, StyleSheet, SafeAreaView } from "react-native"
import DropShadow from "react-native-drop-shadow";
import StudentsSearch from "./myStudents/StudentsSearch"

import {getClassesOfCoach, getStudentsByClass} from '../../../utils/queries'
import { AuthContext } from '../../context/AuthContext';

const IndexScreen = ({ navigation, route }) => {
  const [sortedMyStudents, setSortedMyStudents] = useState([])
  const [myAllStudents, setMyAllStudents] = useState([])
  const [nameTitle, setNameTitle] = useState([])
  const [myClassIds, setMyClassIds] = useState([])
  const [sortNamingTitle, setSortNamingTitle] = useState([])
  const [endFetch, setEndFetch ] = useState(false)
  //For SearchBar
  const [query, setQuery] = useState('')
 
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
    <View style={styles.container}>
      <View style={styles.background}>
        <Box>
          {/* <StudentsSearch myAllStudents={myAllStudents}/> */}
          <Input  placeholder="Search"
                  variant="rounded"
                  style={styles.inputfield}
                  onChange={e => setQuery(e.target.value)}
          />
        </Box>
        <ScrollView style={styles.scrollarea}>
            {(query == '' ? nameTitle : nameTitle.map(ntitle => {
              //queryが入ってこない
              console.log('探すもの',query)
              let thisname = ntitle.groupedConn
              console.log(thisname)
              thisname.map((each) => {
                console.log('1',each.firstname)
                console.log('2',each.firstname.toLowerCase())

                if(each.firstname.toLowerCase().includes(query.toLowerCase())){
                  console.log('3',each)
                  //ここもちゃんとすぐ反映されるのか確認
                  setSortNamingTitle(ntitle)
                  return sortNamingTitle
                }
              })
            })) 
            .map((nmtitle, i) => ( 
              <Box key={i} style={styles.box}> 
                <Text style={styles.abc}>{nmtitle.group}</Text>
                <VStack  style={styles.nameContainer} bg="#ffffff" borderRadius="md" shadow={5}>
                  {nmtitle.groupedConn.map((trainee, j) => (        
                    <TouchableOpacity   key={j} 
                                        onPress={() => {
                                        navigation.navigate('Student Detail',{trainee})
                    }}>
                      <Text>{trainee.firstname} {trainee.lastname}</Text>
                    </TouchableOpacity >
                    // {j++ ? <HStack space={1} mb={2} borderBottomWidth=".2" pb={2} justifyContent="space-between"/> : null}
                  ))}
                </VStack> 
               </Box>    
            ))
          }

          {/* {nameTitle.map((title, i) => ( 
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
          ))}  */}

        </ScrollView>
      </View>    
    </View>
  )
}
const styles = StyleSheet.create ({
  container: {
    backgroundColor: 'orange',
  },
  background: {
    backgroundColor: '#FDFDFD',
    paddingVertical:24,
    paddingHorizontal: 20,
    borderTopRightRadius:28,
    borderTopLeftRadius:28,
  },
  inputfield: {
    fontStyle: 'normal',
    borderRadius:35,
    fontSize: 16,
    paddingTop: 10,
    paddingLeft: 16,
    paddingRight: 8,
    paddingBottom: 10,
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
     marginHorizontal: 5,
  }
})
export default IndexScreen

//=TO DO LIST
//1.j＋＋だったら下に棒を入れる！
//2.sortingのコードを完成させる！Queryと　sortがどのようにすればいいか！

// if(query === ''){
          //   return nmtitle
          // } else if (nmtitle.groupedConn.firstname.toLowerCase().includes(query.toLowerCase())){
          //   return nmtitle
          // }