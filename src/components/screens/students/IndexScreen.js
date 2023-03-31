import { Box, Text, VStack, ScrollView, View, Icon } from "native-base"
import { useEffect, useState, useContext } from "react"
import { TouchableOpacity, StyleSheet, SafeAreaView } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import StudentsSearch from "./myStudents/StudentsSearch"
import { LinearGradient } from 'expo-linear-gradient';
import Loading from "../../layout/Loading";

import {getClassesOfCoach, getStudentsByClass} from '../../../utils/queries'
import { AuthContext } from '../../context/AuthContext';

const IndexScreen = ({ navigation}) => {
  
  const [nameTitle, setNameTitle] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const {userToken, userInfo} = useContext(AuthContext)

  const userId = userInfo._id
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
            // console.log('Chileden',data)
              data.map((person) => {
                myAllStudents.push(person)
              })
              // console.log('THIS IS MY KIDDOS!', i, myAllStudents.length)
              //CHECK if student has multiple classes
              myAllStudents.filter((item, index) => myAllStudents.indexOf(item) === index)
              sorting()
              displaytitle()
              setIsLoading(true)
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
    // console.log('RESULT',myAllStudents.length, myAllStudents)
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
    // console.log('NAME　TITLE',nameTitle)
  }
  
    return(
      <LinearGradient colors={['#F4903F', '#F4903F', '#FC8634', '#FC8634', '#FC8634', '#F69B43', '#F69B43', '#F3AA6A', '#F3AA6A', '#F9D5B4']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} flex={1}>
        <View style={styles.container}>
          <View style={styles.background}>
            <Box>
              <StudentsSearch myAllStudents={myAllStudents}/>
            </Box>
            {!isLoading ? <Loading /> : 
              <ScrollView style={styles.scrollarea}>
                {nameTitle.map((title, i) => ( 
                  <Box key={i} style={styles.box}> 
                    <Text style={styles.abc} fontFamily="Lexend_600">{title.group}</Text>
                    <VStack  style={styles.nameContainer} shadow={5}>
                      {title.groupedConn.map((trainee, index) => (             
                        <TouchableOpacity   key={index} 
                                            onPress={() => {
                                            navigation.navigate('Student Detail',{trainee})
                                            }}
                                            style={styles.nameiconbox}
                        >
                          <Text style={styles.name} fontFamily="Lexend_400">{trainee.firstname} {trainee.lastname}</Text>
                          <Icon size={4} as={<Ionicons name='chevron-forward-outline' />} style={styles.icon}/>
                        </TouchableOpacity >
                        // { (!title.groupedConn.length == index+1) ? ( <HStack space={1} mb={2} borderBottomWidth=".2" pb={2} borderColor='#BBBBBB' justifyContent="space-between"/> ) : null}
                      ))}
                    </VStack>
                  </Box> 
                ))}
              </ScrollView>
            }
          </View>    
        </View>
      </LinearGradient>
    )
}
 
const styles = StyleSheet.create ({
  background: {
    backgroundColor: '#FDFDFD',
    paddingVertical:24,
    paddingHorizontal: 20,
    borderTopRightRadius:28,
    borderTopLeftRadius:28,
    marginTop: 53,
    height: '100%',
  },
  scrollarea: {
    marginTop: 24,
  },
  box: {
    marginBottom: 20,
  },
  abc: {
    color: '#242424',
    fontSize: 24,
    lineHeight:30,
  },
  nameContainer: {
    marginTop: 8,
    backgroundColor: '#FDFDFD',
    borderRadius: '12',
    marginHorizontal: 2,
  },
  nameiconbox:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    lineHeight: 24,
    color: '#1A1A1A',
  },
  name: {
    color: '#242424',
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
  }
})
export default IndexScreen