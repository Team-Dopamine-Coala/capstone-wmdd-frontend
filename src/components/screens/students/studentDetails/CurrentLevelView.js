import { Text, VStack, View, Box } from "native-base"
import { useEffect, useState } from "react"
import { StyleSheet } from "react-native"
import * as Progress from 'react-native-progress';


const CurrentLevelView = (trainee, navigation) => {
  const [className, setClassName] = useState('')
  const [levelName, setLevelName] = useState('')
  const [totalSkillNumber, setTotalSkillNumber] = useState('')
  

//Students ID  
const studentId = trainee.student._id

//Student's Class ID
const classId = trainee.student.class_id

//MyLevel from student
const levelArray = trainee.student.level
const skillNumber = levelArray[ levelArray.length -1 ]
const mycurrentskillId = skillNumber.level_id

const completedSkillNumber = skillNumber.skills.length
const percent = completedSkillNumber / totalSkillNumber
// console.log('現在のレベル',percent)

//fetch Skills from current level id
useEffect(() => {
  const getSkill = async () => {
    const res = await fetchSkill()
    // console.log('実際のskill',res)
    setLevelName(res.title)
    check(res)
  }
  getSkill()
})

const fetchSkill = async () => {
  const res = await fetch(`http://3.84.131.140:3000/api/level/${mycurrentskillId}`)

  const data = await res.json()
  if(res.ok){
    return data
  }
}

//Fetch class Name
useEffect(() => {
  const getClassName = async () => {
    const res = await fetchClassName()
    setClassName(res.title)
  }
  getClassName()
})

const fetchClassName = async () => {
  const res = await fetch(`http://3.84.131.140:3000/api/class/63e9fcf20386d6f0fd9053b3/${classId}`)

  const data = await res.json()
  if(res.ok){
    return data
  }
}

//Actual skills number current level has
const check = (res) => {
  setTotalSkillNumber(res.skills.length)
}


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{className}</Text>
      <VStack style={styles.levelbox}>
        <Text style={styles.subtitle}>Current Level</Text>
        <Text>{levelName}</Text>
        <Box style={styles.percentBox}>
          <Box>
            <Progress.Bar progress={percent} width={216} height={10} />
          </Box>
          <Box style={styles.numberBox}>
            <Text style={styles.current}>{completedSkillNumber}</Text>
            <Text style={styles.total}> /{totalSkillNumber} skills</Text>
          </Box>
          
        </Box>
      </VStack>
    </View>
      )
}
const styles = StyleSheet.create ({
  container: {
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  levelbox: {
    marginTop: 10,
    backgroundColor: '#bbb',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  percentBox: {
    flexDirection: "row",
    justifyContent:"space-around"
  },
  numberBox: {
    flexDirection: "row",
  },
  current: {
    fontSize: 23,
    fontWeight: "bold",
  },
  total: {

  }
})
export default CurrentLevelView

//Task
//4.ここでdisplayしたdataをそのままskill Achievementに送る。