import { View, Img, Box, Text, Title, ScrollView, VStack, Heading } from 'native-base'
import { TouchableOpacity, SafeAreaView, StyleSheet} from "react-native"
import { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import StudentsSearch from "../../Students/myStudents/StudentsSearch"
import { getClassesOfCoach } from '../../../../utils/queries'

const ClassPage = ({navigation, route}) => {

  const {userID, userToken} = route.params;
  // const [weeklyList, setWeeklyList] = useState([])
  // console.log('クラスページ', navigation, userID, userToken)
  let Sun = []
  let Mon = []
  let Tue = []
  let Wed = []
  let Thu = []
  let Fri = []
  let Sat= []
  let weeklyList = []
  //Fetch all class this user has
  useEffect(() => {
    getClassesOfCoach(userID, userToken)
    .then((data) => {
      const myAllClass = data
      console.log('コーチのクラス',myAllClass)

      //Sort class weekly
      myAllClass.map((item) => {
        item.classDay.map((week) => {
          switchWeek(week, item)
        })
      })
      storeWeek(Mon,Tue,Wed,Thu,Fri,Sat,Sun)
    })  
  },[])

  //=== FUNCTIONS =============
  const switchWeek = (week, item) => {
    switch (week){
      case 'Sunday':
        Sun.push(item)
        break;
      case 'Monday':
        Mon.push(item)
        break;
      case 'Tuesday':
        Tue.push(item)
        break;
      case 'Wednesday':
        Wed.push(item)
        break;
      case 'Thursday':
        Thu.push(item)
        break;
      case 'Friday':
        Fri.push(item)
        break;
      case 'Saturday':
        Sat.push(item)
      break;
    }
  }
  
  const storeWeek = (Mon,Tue,Wed,Thu,Fri,Sat,Sun) => {
    weeklyList.push(
      // setWeeklyList(
      {title: "Monday",class: Mon}, 
      {title: "Tuesday",class: Tue},
      {title: "Wednesday",class: Wed},
      {title: "Thursday",class: Thu},
      {title: "Friday",class: Fri},
      {title: "Saturday",class: Sat},
      {title: "Sunday",class: Sun}
    )
    console.log('これ回すよ',weeklyList)
    // weeklyList.map((item) => {
    //   console.log('確認',item)r
    // })
  }

  
  return (
    <LinearGradient colors={['#F4903F', '#F4903F', '#FC8634', '#FC8634', '#FC8634', '#F69B43', '#F69B43', '#F3AA6A', '#F3AA6A', '#F9D5B4']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} flex={1}>
      <SafeAreaView>
        <View style={styles.background}>
          <StudentsSearch/>
          {/* <ScrollView> */}
          {weeklyList.map((list, i) => (
              <Box key={i}>
                <Text>Yaho</Text>
                  <Text>{list.title}</Text>
                
                 <VStack>
                  <Box mb={3} p={5} bg="#F5D26A" width="100%" height="90%" borderRadius="md" shadow={9} position="absolute" top="5%"></Box>  
                  <Box ml={4} p={3} bg="#ffffff" flex={1} height="100%" borderRadius="md" shadow={5}>
                      <Heading style={styles.title}>classTitle</Heading>
                      <Box style={styles.levelbox}>
                        <Text style={styles.levelname}>time</Text>
                        <Text style={styles.levelname}>Location</Text>
                      </Box>
                  </Box>
                </VStack>
              </Box >
          ))}
          {/* </ScrollView> */}
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}
const styles = StyleSheet.create ({
  container: {
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  background: {
    backgroundColor: '#FDFDFD',
    paddingVertical:24,
    paddingHorizontal: 20,
    borderTopRightRadius:28,
    borderTopLeftRadius:28,
    height: '100%',
  },
  contents: {
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  title: {
   textAlign: 'center',
  },
  levelname: {
    fontSize: 16,
    fontWeight: '500',
  },
  percentBox: {
    flexDirection: "row",
    justifyContent:"space-around",
  },
  numberBox: {
    flexDirection: "row",
    marginLeft: 16,
  },
  current: {
    fontSize: 23,
    fontWeight: "bold",
  }
})
export default ClassPage

//この人の全てのクラスを曜日ごとにdisplayする
//クラスのinfoをPassする。
//settingから情報をpropsしてもらう
//それからFetch後のソーティングしてDisplay!
//Clickしたらclassname, 時間, location, 