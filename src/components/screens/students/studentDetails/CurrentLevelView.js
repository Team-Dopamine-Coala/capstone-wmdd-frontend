import { Text, VStack, View, Box, Heading, HStack } from "native-base"
import { useState } from "react"
import { StyleSheet } from "react-native"
import * as Progress from "react-native-progress"


const CurrentLevelView = ({classTitle, classCard}) => {
  // const [title, setTitle] = useState(classTitle)
  // const [level, setLevel] = useState(classCard.level)
  // const [completedSkillNbr, setCompletedSkillNbr] = useState(classCard.completeSkillNumber)
  // const [totalSkillNbr, setTotalSkillNbr] = useState(classCard.totalSkillNumber)

  const completedSkillNbr = classCard.completeSkillNumber
  const totalSkillNbr = classCard.totalSkillNumber
  //Progress Bar
  const percent = completedSkillNbr / totalSkillNbr

  // console.log('doko',classCard.level)
  
  return (
    <View style={styles.container}>
      <VStack>
        <Box mb={3} p={5} bg="#F5D26A" width="100%" height="90%" borderRadius="md" shadow={9} position="absolute" top="5%"></Box>  
          <Box ml={4} p={3} bg="#ffffff" flex={1} height="100%" borderRadius="md" shadow={5}>
        
          <Heading style={styles.title}>{classTitle}</Heading>
          <Box style={styles.levelbox}>
            <Text style={styles.levelname}>{classCard.level}</Text>
            <Box style={styles.percentBox}>
              <Box mt={1}>
                {/* <Progress.Bar progress={percent} width={216} height={10} color="#F5D26A" borderColor="#EEEEEE" borderWidth={1}/> */}
              </Box>
              <Box style={styles.numberBox}>
                <Text style={styles.current}>{completedSkillNbr}</Text>
                <Text style={styles.total}> / {totalSkillNbr} skills</Text>
              </Box>
            </Box>
          </Box>
        
        </Box>
      </VStack>
    </View>
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
export default CurrentLevelView

//Task
//3.Need to fix render error when I use useState and progress.bar
//4.ここでdisplayしたdataをそのままskill Achievementに送る。