import { Text, VStack, View, Box, Heading, HStack } from "native-base"
import { StyleSheet } from "react-native"

const CurrentLevelView = ({classTitle, classColor, cardBgColor, classCard}) => {
  
    const completedSkillNbr = classCard[0].compNbr
    const totalSkillNbr = classCard[0].totalNbr
  
  return (
    <View style={styles.container}>
      {/* { isLoading ? <Loading/> :  */}
        <VStack >
          <Box  width="100%" bg={classColor} height="80%" shadow={9} borderRadius={12} position="absolute" top="10%" ></Box>
          <Box  bg={cardBgColor} flex={1} shadow={5} borderRadius={12} style={styles.classbox}>
            <Heading style={styles.title} fontFamily="Lexend_600">{classTitle}</Heading>
            <Box style={styles.levelbox}>
              <Text style={styles.levelname} fontFamily="Lexend_500">Level {classCard[0].levelName}</Text>
              <HStack style={styles.percentBox}>
                <Box width="70%" bg="#FDFDFD" borderRadius={18.75} h="10px" style={styles.progressbar}>
                  <Box width={parseFloat(216 / totalSkillNbr * completedSkillNbr)} bg={classColor} h="10px" borderRadius={18.75}></Box>
                </Box>
                <HStack style={styles.numberBox}>
                  <Text style={styles.current} fontFamily="Lexend_700">{completedSkillNbr}</Text>
                  <Text style={styles.total} fontFamily="Lexend_400"> / {totalSkillNbr} skills</Text>
                </HStack>
              </HStack>
            </Box>
          </Box>
        </VStack>
      {/* }  */}
    </View>
      )
}
const styles = StyleSheet.create ({
  container: {
    marginHorizontal: 5,
    marginVertical: 24,
  },
  classbox: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    marginLeft: 20,
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
    justifyContent:"space-around",
    alignItems:"center",
  },
  progressbar:{
    marginVertical: 10,
  },
  numberBox: {
    marginLeft: 16,
  },
  current: {
    fontSize: 32,
    lineHeight: 30,
  },
  total: {
    fontSize: 14,
    lineHeight: 30,
  }
})
export default CurrentLevelView