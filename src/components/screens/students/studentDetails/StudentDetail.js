import { View, Text,ScrollView, VStack, Icon } from "native-base"
import { StyleSheet, TouchableOpacity, Modal } from "react-native"
import { useContext, useState, useEffect} from "react"
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'

import CurrentLevelView from "./CurrentLevelView"
import SkillsAchievementView from "./SkillsAchievementView"
import AttendanceListView from "./AttendanceListView"
import ViewReport from "./ViewReport"
import Loading from "../../../layout/Loading"
import StudentBiometrics from "../Biometrics/StudentBiometrics"

import { AuthContext } from '../../../context/AuthContext'
import { getSingleClass, getEvaluationsByClass, getSkillById, fetchSkills } from '../../../../utils/queries'

const StudentDetail = ({route, navigation }) => {
  const { trainee } = route.params
  const {userToken} = useContext(AuthContext)
  const {userInfo} = useContext(AuthContext)
  const [classTitle, setClassTitle] = useState('')
  const [classColor, setClassColor] = useState('')
  const [cardBgColor, setCardBgColor] = useState('')
  const [myClassData, setMyClassData] = useState('')
  const [myCompletedEvaluations, setMyCompletedEvaluations] = useState([])
  const [myAllSkills, setMyAllSkills] = useState([])
  const [myLevelDetail, setMyLevelDetail] = useState([])
  const [classCard, setClassCard] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  let myEvalArray = []
  let mySkillArray = []
  let levellistArray = []
  let myLevelDetailArray = []
 
  //class ID (1 for each)
  const classid = trainee.class_id
  //user ID
  const userid = userInfo._id
  //student ID 
  const studentid = trainee._id

  //1.Fetch My Class for ClassTab(studentDetail.js) & CurrentLevelView
  useEffect(() => {
    getSingleClass(userid,classid,userToken)
      .then((data) => {
        //Class name store now!(single class for each student)
        setClassTitle(data.title)
        setClassColor(data.color)
        setCardBgColor(data.cardColor)
        setMyClassData(data)
      })
  },[])

  //2.Fetch Evaluation from class ID & sorting only completed evaluation
  //P/U only student ID is matched
  useEffect(() => {
    getEvaluationsByClass(classid, userToken)
      .then((data) => {
        //Filter only my evaluation
        data.map((item) => {
          if (item.studentId === studentid) {
            myEvalArray.push(item)
          } else {
            null
          }
        })
        //Fetch only rating == 3 (completed)P/U only completed skills
        setMyCompletedEvaluations(myEvalArray.filter((item) =>item.rating === 3))
      })
  },[myClassData])

  // 3.Fetch completed skills 
  useEffect(() => {
    // console.log('Completed Eval',myCompletedEvaluations.length, myCompletedEvaluations)
    myCompletedEvaluations.map((item, i) => {
      let skillid = item.skillId
      getSkillById(skillid,userToken)
      .then (data => {
        mySkillArray.push(data)
        if(myCompletedEvaluations.length === i+1) {
          setMyAllSkills(mySkillArray)
        }else {
          null
        }
      })
    })
  },[myCompletedEvaluations])

  //4.How many skills this has 
  useEffect(() => {
    // console.log('how many skills I have',myAllSkills.length, myAllSkills)

    //Total skill number I have
      //4-1.Fetch all skills and gather only same level i am working on now
      fetchSkills(userToken)
      .then(data => {
        const allSkillsArray = data
       
        //4-2.Only P/U level from skill I have & delete DUPE
        myAllSkills.map((item, i) => {
          levellistArray.push(item.level)
        })
        //DELETE DUPE 
        const totallevelIhave = levellistArray.filter((eachlevel, index) => levellistArray.indexOf(eachlevel) == index)
        // console.log('dUPE has Deleted',totallevelIhave)

        //4-3.My Skills （totallevelIhave (CHECK How many total skill this has)
        totallevelIhave.map((level, i) => {
          // console.log(level)
          let totally = allSkillsArray.filter((skill) => {return level == skill.level}).length
          // console.log('Number of Skill',totally)
          // console.log('LEVEL Name:', level, 'Total SKILL Number:', totally)

          //4-5.Combine my completed skilss and level name &  Level total number => make one object to pass other component
          let compLevelForLevelIhave = myAllSkills.filter((item) => { return item.level == level}).length
          myLevelDetailArray.push({levelName:`${level}`, totalNbr: `${totally}`, compNbr: `${compLevelForLevelIhave}`})
          
          if(totallevelIhave.length === i+1) {
            //4-6.P/U one to send CurrentLevelView
            //If LEVEL has only one just send to CurrentLevelView｜If LEVEL is over 1 P/U the one which has not done yet then send to CurrentLevelView
            if(myLevelDetailArray.length == 1){
              setClassCard(myLevelDetailArray)
              setMyLevelDetail(myLevelDetailArray)
              setIsLoading(true)
            }else {
              setClassCard(myLevelDetail.filter((each) => {each.totalNbr !== each.compNbr}))
              setMyLevelDetail(myLevelDetailArray)
              setIsLoading(true)
            }
          }else {
            null
          }
        })  
      })
    },[myAllSkills])  

    //=====Modal Functions
    const clickStudent = () => { setModalIsOpen(true)}
    const closeBio = () => { setModalIsOpen(false)}

  return (
  <>
    <LinearGradient colors={['#F4903F', '#F4903F', '#FC8634', '#FC8634', '#FC8634', '#F69B43', '#F69B43', '#F3AA6A', '#F3AA6A', '#F9D5B4']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} flex={1}> 
      <View style={styles.container}>
        <TouchableOpacity onPress={clickStudent} trainee={trainee} style={styles.biobtncontainer} shadow={5}>
            <VStack>
                <Text style={styles.name} fontFamily="Lexend_700">{trainee.firstname} {trainee.lastname}</Text> 
                <Text style={styles.text} fontFamily="Lexend_400">View profile and Contact Information</Text>
            </VStack>
            <Icon size={4} as={<Ionicons name='chevron-forward-outline' />} style={styles.icon}/>
        </TouchableOpacity>

        <View style={styles.background}>
        {!isLoading ? <Loading/> :
          <ScrollView>
            <TouchableOpacity style={styles.classtab}>
              {<Text style={styles.classtabtext} fontFamily="Lexend_400">{classTitle}</Text>}
            </TouchableOpacity>
            <CurrentLevelView classTitle={classTitle} classColor={classColor} cardBgColor={cardBgColor} classCard={classCard} />
            <SkillsAchievementView myLevelDetail={myLevelDetail}/>
            <AttendanceListView student={trainee} /> 
            <ViewReport student={trainee}/>
          </ScrollView>
        }
        </View>
      </View>   
    </LinearGradient>

    <Modal visible={modalIsOpen} transparent={true}>
        <StudentBiometrics student={trainee} navigation={navigation} closeBio={closeBio}/>
    </Modal>
  </> 
  )
}

const styles = StyleSheet.create ({
  container:{
    marginTop: 101,
  },
  background:{
    backgroundColor: '#FDFDFD',
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    height: '100%',
  },
  classtab:{
    borderRadius: 81,
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: '#404142',
    flexBasis: 0,
    width: 120,
  },
  classtabtext:{
    color: '#FAF9F9',
    fontSize: 14,
    lineHeight: 21,
  },
  biobtncontainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(238, 238, 238, 0.5)',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,    
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
name: {
    color: '#212427',
    fontSize: 28,
    lineHeight: 30,
},
text: {
    marginTop: 6,
    color: '#212427',
    fontSize: 16,
    lineHeight: 20,
},
icon:{
    color: '#212427',
    fontSize: 20,
    lineHeight: 18,
    width: 15,
    height: 18,
},
biobackground:{
  backgroundColor: 'transparent',
  flex:1,
}
})
export default StudentDetail

