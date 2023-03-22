import { Text, VStack, View, Box, Heading, HStack } from "native-base"
import { useEffect, useState } from "react"
import { StyleSheet } from "react-native"
import Loading from "../../../layout/Loading"

const CurrentLevelView = ({classTitle, classColor, classCard}) => {
    
  
    const completedSkillNbr = classCard.completeSkillNumber
    const totalSkillNbr = classCard.totalSkillNumber
    const b = parseFloat(216 / totalSkillNbr * completedSkillNbr)
    const barprogress = `"${b}px"`
    // console.log(barprogress)


//============================
  // useEffect(() => {
  //   async function bar (){
  //     console.log('start')
  //   setIsLoading(true)
  //   const completedSkillNbr = await classCard.completeSkillNumber
  //   const totalSkillNbr = await classCard.totalSkillNumber

  //   const b = parseFloat(216 / totalSkillNbr * completedSkillNbr)
  //   const barprogress = `"${b}px"`
  //   setIsLoading(false)
  //   } 
  //   bar()
  // },[])
  //=========================
  return (
    <View style={styles.container}>
      {/* { isLoading ? <Loading/> :  */}
        <VStack >
          <Box  mb={3} p={5}  width="100%" bg={classColor} height="90%" shadow={9} borderRadius="md" position="absolute" top="5%" ></Box>
          <Box  ml={4} p={3} bg="rgba(255, 255, 255, .9)" flex={1} shadow={5} borderRadius="md" style={styles.classbox}>

            <Heading style={styles.title}>{classTitle}</Heading>
            <Box style={styles.levelbox}>
              <Text style={styles.levelname}>{classCard.level}</Text>
              <Box style={styles.percentBox}>
                <Box width="216px" bg="#FDFDFD" borderRadius={18.75} h="10px">
                  {/* <Box  width={b} bg={classColor} h="10px" borderRadius={18.75}></Box> */}
                  <Box bg={barprogress} h="10px" borderRadius={18.75}></Box>
                </Box>
                <Box style={styles.numberBox}>
                  <Text style={styles.current}>{completedSkillNbr}</Text>
                  <Text style={styles.total}> / {totalSkillNbr} skills</Text>
                </Box>
              </Box>
            </Box>

          </Box>
        </VStack>
      {/* } */}
    </View>
      )
}
const styles = StyleSheet.create ({
  container: {
    // paddingVertical: 24,
    // backgroundColor: '#ffffff',
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
  }
})
export default CurrentLevelView

//Task
//3.Need to fix render error when I use useState and progress.bar
//4.ここでdisplayしたdataをそのままskill Achievementに送る。