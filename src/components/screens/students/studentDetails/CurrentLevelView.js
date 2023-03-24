import { Text, VStack, View, Box, Heading, HStack } from "native-base"
import { useEffect, useState } from "react"
import { StyleSheet } from "react-native"
import Loading from "../../../layout/Loading"

const CurrentLevelView = ({classTitle, classColor, cardBgColor, classCard}) => {
    
  
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
          <Box  ml={4} p={3} bg={cardBgColor} flex={1} shadow={5} borderRadius="md" style={styles.classbox}>

            <Heading style={styles.title} fontFamily="Lexend_600">{classTitle}</Heading>
            <Box style={styles.levelbox}>
              <Text style={styles.levelname} fontFamily="Lexend_500">{classCard.level}</Text>
              <Box style={styles.percentBox}>
                <Box width="216px" bg="#FDFDFD" borderRadius={18.75} h="10px">
                  {/* <Box  width={b} bg={classColor} h="10px" borderRadius={18.75}></Box> */}
                  <Box bg={barprogress} h="10px" borderRadius={18.75}></Box>
                </Box>
                <Box style={styles.numberBox}>
                  <Text style={styles.current} fontFamily="Lexend_400">{completedSkillNbr}</Text>
                  <Text style={styles.total} fontFamily="Lexend_400"> / {totalSkillNbr} skills</Text>
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
   color:'#212427',
   lineHeight:30,
   marginBottom: 16,
  },
  levelname: {
    color: '#000000',
    fontSize: 16,
    lineHeight: 30,
  },
  percentBox: {
    flexDirection: "row",
    justifyContent:"space-around",
    alignItems:"center"
    
  },
  numberBox: {
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