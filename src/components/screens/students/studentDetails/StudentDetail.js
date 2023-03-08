import { View, Text } from "native-base"
import { StyleSheet } from "react-native"
import { useContext, useState, useEffect} from "react"

import ReportView from "./ReportView"
import CurrentLevelView from "./CurrentLevelView"
import SkillsAchievementView from "./SkillsAchievementView"
import AttendanceListView from "./AttendanceListView"
import ViewReport from "./ViewReport"

import { AuthContext } from '../../../context/AuthContext'
import {getSingleClass} from '../../../../utils/queries'
import {getEvaluationsByClass} from '../../../../utils/queries'
import {getSkillById} from '../../../../utils/queries'
import {getProgramById} from '../../../../utils/queries'


const StudentDetail = ({route, navigation }) => {
  const { trainee } = route.params
  const {userToken} = useContext(AuthContext)
  const [classTitle, setClassTitle] = useState('')
  const [classData, setClassData] = useState('')
  const [myEvaluations, setMyEvaluations] = useState([])
  const [myCompletedEvaluations, setMyCompletedEvaluations] = useState([])
  const [allSkills, setAllSkills] = useState([])
  const [endFetch, setEndFetch ] = useState(false)
  const [allLevelsId, setAllLevelId] = useState([])
  let skillArray = []
  let programArray = []
  let levelSortArray = []

  //class ID
  const classid = trainee.class_id
  //user ID
  const userid = '63fcf0bd354e8150f45dd4d2'
  //student ID 
  const studentid = trainee._id

  //Fetch My Class for ClassTab(studentDetail.js) & CurrentLevelView
  useEffect(() => {
    getSingleClass(userid,classid,userToken)
      .then((data) => {
        //class名をここで表示
        setClassTitle(data.title)
        setClassData(data)
      })
  },[])

  //Fetch Evaluation from class ID
  //class ID でとったらその中の、studentIDが同じものをfilterして自分のものだけとる
  useEffect(() => {
    getEvaluationsByClass(classid, userToken)
      .then((data) => {
        //my evaluationのみをFilter(自分のevaluation)
        setMyEvaluations(data.filter((evaluation) => evaluation.studentId === studentid))
      })
      },[classData])

      useEffect(() => {
        // console.log('My evaluation',myEvaluations)
        //Fetch only rating == 3 (completed)終了してるSkillのみP/U
        setMyCompletedEvaluations(myEvaluations.filter((item) =>item.rating === 3))
      },[myEvaluations])

  //Fetch completed skills 完了したSkillをGetする
  useEffect(() => {
    console.log('取りに行くよ',myCompletedEvaluations)
    myCompletedEvaluations.map((eachskill, i) => {
      let skillid = eachskill.skillId
      getSkillById(skillid,userToken)
      .then (data => {
        skillArray.push(data)
        // console.log('ここで',i,skillArray)
      })
      if (myCompletedEvaluations.length === i+1) {
        setAllSkills(skillArray)  
        setEndFetch(true)
        console.log('終わり')
      }else {
        null
      }
    })
  },[myCompletedEvaluations])
  
  //Fetch Program & compate how many skills I completed in the level
  useEffect(() => {
    // console.log('ここ',allSkills)
    allSkills.map((skls,i) => {
      let programid = skls.programId
      // console.log('PROGRAM ID',programid)
      getProgramById(programid,userToken)
        .then(data => {
          // console.log('PROFETCHしたて',i, data,)
          data.levels.map((item) => programArray.push(item))
          console.log('DUPPE消す前',i,programArray)
          dupeChecker(programArray)
        })
    })
    
  }, [endFetch])



//=======FUNCTIONS=============
//programの中のlevelのDupecheck nweProgramArray = これからFetchする全てのlevel IDが入っている！
const dupeChecker = (programArray) => {
  const newProgramArray = programArray.filter((element, index) => {
    return programArray.indexOf(element) == index
  })
  console.log('DUPE消えたよ',newProgramArray)
}



      
      





  return (
    <View style={styles.container}>
        {<Text>{classTitle}</Text>}
        <ReportView student={trainee} navigation={navigation}/>
        <CurrentLevelView student={trainee} classData={classData} classTitle={classTitle}/>
        <SkillsAchievementView student={trainee} />
        <AttendanceListView student={trainee} /> 
        <ViewReport student={trainee}/>
    </View>
  )
}
const styles = StyleSheet.create ({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  }
})
export default StudentDetail