import { Text, VStack, View, Box, HStack, Heading } from "native-base"
import { useEffect, useState, useContext } from "react"
import { StyleSheet } from "react-native"
import * as Progress from 'react-native-progress'

import { AuthContext } from '../../../context/AuthContext'

const CurrentLevelView = ({classTitle, classCard}) => {
  // console.log('カードのとこ',classCard)
  const [title, setTitle] = useState(classTitle)
  const [level, setLevel] = useState(classCard.level)
  const [completedSkillNbr, setCompletedSkillNbr] = useState(classCard.completeSkillNumber)
  const [totalSkillNbr, setTotalSkillNbr] = useState(classCard.totalSkillNumber)
  //Progress Bar
  const percent = completedSkillNbr / totalSkillNbr
  
  return (
    <View style={styles.container}>
      <VStack  mb={5} > 
              <Heading style={styles.title}>{title}</Heading>
              <VStack style={styles.levelbox}>
                <Text style={styles.levelname}>{level}</Text>
                <Box style={styles.percentBox}>
                  <Box >
                    <Progress.Bar progress={percent} width={216} height={10} />
                  </Box>
                  <Box style={styles.numberBox}>
                    <Text style={styles.current}>{completedSkillNbr}</Text>
                    <Text style={styles.total}> / {totalSkillNbr} skills</Text>
                  </Box>
                </Box>
              </VStack>
      </VStack>
    </View>
      )
}
const styles = StyleSheet.create ({
  container: {
    paddingVertical: 10,
    backgroundColor: '#ffffff',
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
  // levelbox: {
  //   marginTop: 10,
  //   backgroundColor: '#bbb',
  //   paddingHorizontal: 10,
  //   paddingVertical: 10,
  //   borderRadius: 10,
  // },
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
export default CurrentLevelView

//Task
//4.ここでdisplayしたdataをそのままskill Achievementに送る。