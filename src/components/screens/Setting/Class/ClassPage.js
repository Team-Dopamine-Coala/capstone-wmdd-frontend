import { View, Img, Box, Text, Title, ScrollView, VStack, Heading } from 'native-base'
import { TouchableOpacity, SafeAreaView, StyleSheet} from "react-native"
import { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';

import StudentsSearch from "../../Students/myStudents/StudentsSearch"
import { getClassesOfCoach } from '../../../../utils/queries'

const ClassPage = ({navigation, userID, userToken}) => {
  // const userId = '63fcf0bd354e8150f45dd4d2'
   
  //Fetch all class this user has
  useEffect(() => {
    getClassesOfCoach(userID, userToken)
    .then((data) => {
      console.log('コーチのクラス',data)
    })
  })
  
  //Sort Weekly
//Get all class data this use has
//sorting with week
//map and display
  return (
    <LinearGradient colors={['#F4903F', '#F4903F', '#FC8634', '#FC8634', '#FC8634', '#F69B43', '#F69B43', '#F3AA6A', '#F3AA6A', '#F9D5B4']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} flex={1}>
      <SafeAreaView>
        <StudentsSearch/>
        <ScrollView>
          <Box>
            <Text>week</Text>
          </Box>
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
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}
const styles = StyleSheet.create ({
  container: {
    paddingVertical: 10,
    // backgroundColor: '#ffffff',
    marginHorizontal: 5,
  },
  whitebox: {
    height: 60,
    flex:1,
    marginLeft: 20,
    backgroundColor: '#ffffff',
    height: '100%',
    borderRadius: 10,
    shadow: 5,
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