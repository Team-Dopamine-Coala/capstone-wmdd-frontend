import { View, Img, Box, Text, Title, ScrollView } from 'native-base'
import { TouchableOpacity, SafeAreaView} from "react-native"
import { useEffect } from 'react'

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

  return (
    <SafeAreaView>
      <StudentsSearch/>
      <ScrollView>
        <Box>
          <Text>week</Text>
          <Box>

          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ClassPage

//この人の全てのクラスを曜日ごとにdisplayする
//クラスのinfoをPassする。
//settingから情報をpropsしてもらう
//それからFetch後のソーティングしてDisplay!
//Clickしたらclassname, 時間, location, 