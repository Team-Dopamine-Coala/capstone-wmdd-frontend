import { Box, Text, VStack, ScrollView, Input, View, HStack } from "native-base"
import { useEffect, useState, useContext } from "react"
import { TouchableOpacity, StyleSheet, SafeAreaView } from "react-native"
import DropShadow from "react-native-drop-shadow";
import StudentsSearch from "./myStudents/StudentsSearch"

import {getClassesOfCoach, getStudentsByClass} from '../../../utils/queries'
import { AuthContext } from '../../context/AuthContext';

const IndexScreen = ({ navigation}) => {
  
  const [nameTitle, setNameTitle] = useState([])
  const {userToken} = useContext(AuthContext)
  const userId = '63fcf0bd354e8150f45dd4d2'
  const myClassIds = []
  const myAllStudents = []

  useEffect(() => {
    getClassesOfCoach(userId,userToken)
      .then((data) => {
        data.map((item) => {
          myClassIds.push(item._id)
        })
        // console.log('My Class ID', myClassIds)
        //GET KIDS for each classes this user has
        myClassIds.map((eachclassid, i) => {
          getStudentsByClass(eachclassid,userToken)
          .then((data) => {
              data.map((person) => {
                myAllStudents.push(person)
              })
              // console.log('THIS IS MY KIDDOS!', i, myAllStudents.length)
              //CHECK if student has multiple classes
              myAllStudents.filter((item, index) => myAllStudents.indexOf(item) === index)
              sorting()
              displaytitle()
          })
        })
      }) 
  },[])  

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
            <StudentsSearch myAllStudents={myAllStudents}/>
          </Box>
          <ScrollView style={styles.scrollarea}>
            {nameTitle.map((title, i) => ( 
              <Box key={i} style={styles.box}> 
                <Text style={styles.abc}>{title.group}</Text>
                <VStack  style={styles.nameContainer} bg="#ffffff" borderRadius="md" shadow={5}>
                  {title.groupedConn.map((trainee, index) => (             
                    <TouchableOpacity   key={index} 
                                        onPress={() => {
                                        navigation.navigate('Student Detail',{trainee})
                                        }}>
                      <Text>{trainee.firstname} {trainee.lastname}</Text>
                    </TouchableOpacity >
                    // {j++ ? <HStack space={1} mb={2} borderBottomWidth=".2" pb={2} justifyContent="space-between"/> : null}
                  ))}
                </VStack>
              </Box> 
            ))} 
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
