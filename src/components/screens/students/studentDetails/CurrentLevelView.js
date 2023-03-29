import { Text, VStack, View, Box, Heading, HStack } from "native-base"
import { useEffect, useState } from "react"
import { StyleSheet } from "react-native"
import Loading from "../../../layout/Loading"

const CurrentLevelView = ({classTitle, classColor, cardBgColor, classCard}) => {
  console.log(classTitle, classColor, cardBgColor, classCard)  
  const [isLoading, setIsLoading] = useState(false)
    console.log('これ',classCard)
    const completedSkillNbr = classCard[0].compNbr
    const totalSkillNbr = classCard[0].totalNbr
    const barprog = parseFloat(216 / totalSkillNbr * completedSkillNbr)
    console.log(barprog)


//============================
  useEffect(() => {
    // async function bar (){
    //   console.log('start')
    // setIsLoading(true)
    const completedSkillNbr = classCard.completeSkillNumber
    const totalSkillNbr = classCard.totalSkillNumber

    const b = parseFloat(216 / totalSkillNbr * completedSkillNbr)
    // const barprogress = `"${b}px"`
    setIsLoading(true)
    // } 
    // bar()
  },[])
  //=========================
  return (
    <View style={styles.container}>
      { isLoading ? <Loading/> : 
        <VStack >
          <Box  mb={3} p={5}  width="100%" bg={classColor} height="90%" shadow={9} borderRadius="md" position="absolute" top="5%" ></Box>
          <Box  ml={4} p={3} bg={cardBgColor} flex={1} shadow={5} borderRadius="md" style={styles.classbox}>

            <Heading style={styles.title} fontFamily="Lexend_600">{classTitle}</Heading>
            <Box style={styles.levelbox}>
              <Text style={styles.levelname} fontFamily="Lexend_500">Level {classCard[0].levelName}</Text>
              <Box style={styles.percentBox}>
                <Box width="216px" bg="#FDFDFD" borderRadius={18.75} h="10px">
                  <Box width={barprog} bg={classColor} h="10px" borderRadius={18.75}></Box>
                </Box>
                <Box style={styles.numberBox}>
                  <Text style={styles.current} fontFamily="Lexend_400">{completedSkillNbr}</Text>
                  <Text style={styles.total} fontFamily="Lexend_400"> / {totalSkillNbr} skills</Text>
                </Box>
              </Box>
            </Box>

          </Box>
        </VStack>
      } 
    </View>
      )
}
const styles = StyleSheet.create ({
  container: {
    // paddingVertical: 24,
    marginHorizontal: 5,
    marginVertical: 24,
  },
  boxcolortag: {
    // borderTopLeftRadius: 12,
    // borderBottomLeftRadius: 12,
    // height: 100,
    // marginVertical: 19,
  },
  classbox: {
    // height: 136,
    // borderRadius: 16,
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
    alignItems:"center"
    
  },
  numberBox: {
    flexDirection: "row",
    marginLeft: 16,
  },
  current: {
    fontSize: 23,
    fontWeight: "bold",
  },
  total: {
    fontSize: 16,
  }
})
export default CurrentLevelView

//Task
//3.Need to fix render error when I use useState and progress.bar
//4.ここでdisplayしたdataをそのままskill Achievementに送る。