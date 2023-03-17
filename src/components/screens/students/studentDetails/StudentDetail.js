import { View, Text,ScrollView } from "native-base"
import { StyleSheet, TouchableOpacity } from "react-native"
import { useContext, useState, useEffect} from "react"

import ReportView from "./ReportView"
import CurrentLevelView from "./CurrentLevelView"
import SkillsAchievementView from "./SkillsAchievementView"
import AttendanceListView from "./AttendanceListView"
import ViewReport from "./ViewReport"

import { AuthContext } from '../../../context/AuthContext'
import { getSingleClass, getEvaluationsByClass, getSkillById, getProgramById, getLevelById } from '../../../../utils/queries'

const StudentDetail = ({route, navigation }) => {
  const { trainee } = route.params
  const {userToken} = useContext(AuthContext)
  const [classTitle, setClassTitle] = useState('')
  const [myClassData, setMyClassData] = useState('')
  const [myCompletedEvaluations, setMyCompletedEvaluations] = useState([])
  const [myAllSkills, setMyAllSkills] = useState([])
  const [myAllLevelsId, setMyAllLevelId] = useState([])
  const [allLevelsThisProgramHas, setAllLevelsThisProgramHas] = useState([])
  const [achievementCard, setAchievementCard] = useState([])
  const [classCard, setClassCard] = useState([])
  let myEvalArray = []
  let mySkillArray = []
  let programArray = []
  let allLevelsThisProgramHasArray = []
  let achievementCardArray = []

  
  //class ID (1人１個)
  const classid = trainee.class_id
  //user ID
  const userid = '63fcf0bd354e8150f45dd4d2'
  //student ID 
  const studentid = trainee._id

  //1.Fetch My Class for ClassTab(studentDetail.js) & CurrentLevelView
  useEffect(() => {
    getSingleClass(userid,classid,userToken)
      .then((data) => {
        //class名をここで表示(single)
        setClassTitle(data.title)
        setMyClassData(data)
      })
  },[])

  //2.Fetch Evaluation from class ID & sorting only completed evaluation
  //class ID でとったらその中の、studentIDが同じものをfilterして自分のものだけとる
  useEffect(() => {
    getEvaluationsByClass(classid, userToken)
      .then((data) => {
        //my evaluationのみをFilter(自分のevaluation)
        data.map((item) => {
          if (item.studentId === studentid) {
            myEvalArray.push(item)
          } else {
            null
          }
        })
        //Fetch only rating == 3 (completed)終了してるSkillのみP/U
        setMyCompletedEvaluations(myEvalArray.filter((item) =>item.rating === 3))
      })
  },[myClassData])

  //3.Fetch completed skills 完了したSkillをGetする
  useEffect(() => {
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
  
  //4.Fetch Program & compate how many skills I completed in the level
  useEffect(() => {
    // console.log('私の持つSkills',myAllSkills)
    myAllSkills.map((skl,i) => {
      // console.log('私の持つSkills',i,skl)
      let programid = skl.programId
      // console.log('PROGRAM ID',programid)
      getProgramById(programid,userToken)
        .then(data => {
          // console.log('PROFETCHしたて',i, data)
          data.levels.map((item) => programArray.push(item))
          // console.log('DUPPE消す前',i,programArray)
          //DUPEを削除してArrayに入れる
          if (myAllSkills.length === i+1) {
            setMyAllLevelId(programArray.filter((element, index) => 
              programArray.indexOf(element) == index
            ))
            // console.log('ProgのFetch終了')
          } else {
            null
          }
        })
    })
  }, [myAllSkills])

  //5.属してるprogramが持っているLEVELを全部Fetch　＆１つのLebelの長さを確認！Display!
  useEffect(() => {
    // console.log('DUPE消えたよ', myAllLevelsId)
    // console.log('これが私の終了したスキル',myAllSkills)
    myAllLevelsId.map((levelid,i) => {
      //属してるprogramが持っているLEVELを全部Fetch
      getLevelById(levelid,userToken)
        .then(data => {
          // console.log('LEVEL',h,data)
          allLevelsThisProgramHasArray.push(data) 
          // console.log('LEVELと同じかな?',h,allLevelsThisProgramHasArray.length)
          if (myAllLevelsId.length === i+1) {
            setAllLevelsThisProgramHas(allLevelsThisProgramHasArray)
            // howManyCompleted(allLevelsThisProgramHasArray)
          } else {
            null
          }
        })
    })
  },[myAllLevelsId])

 //6.skill arrayにループでアクセスする！自分の持つスキルがどのLEVELに入っているかMatchさせる
  useEffect(() => {
    let objectNBR = 0
    // console.log('ついにここまで',allLevelsThisProgramHas.length)
    allLevelsThisProgramHas.map((level) => {
      level.skills.map((iteminarray) => {
        myAllSkills.map((one,i) => {
           //Skill ID が同じだったら 
          if(iteminarray === one._id){
            let NBR = objectNBR++

            let oneskills = level.skills
            let skilltotal = oneskills.length

            let levelName = level.title
              
            let howManySkillsIcompletedArray = []
            howManySkillsIcompletedArray.push(one)

            let completedNumber = howManySkillsIcompletedArray.length
             
            //もし新しいRrrayの中がEmptyだったらそのまま入れる。１つ以上あれば、levelを照らし合わせる。同じだったら数を合わせる。
            if(achievementCardArray.length == 0 ){
              // console.log(i,'からだよ', achievementCardArray)
              createObject(NBR, levelName, completedNumber, skilltotal)
            }else {
              // console.log(i, '入ってる',achievementCardArray)
              //levelが同じだったらcompletedの数を合計する
              achievementCardArray.map((item, e) => {
                  if(item.level === levelName){
                    // console.log('d',item)
                    // console.log('レベル名同じ?',item.level, levelName)
                    // console.log('数確認',item.completeSkillNumber, completedNumber)
                    completedNumber = item.completeSkillNumber + completedNumber
                    
                    // console.log('DUPE消す前',e,achievementCardArray)
                    //DUPEしているLEVEL Objectを削除してから新しいObject作る    
                    achievementCardArray = achievementCardArray.filter((card) => (card.level !== levelName))

                    // console.log('消した後',e,achievementCardArray)
                    createObject(NBR, levelName, completedNumber, skilltotal)
                  } else {
                    // console.log('名前同じじゃない',item.level, levelName)
                    createObject(NBR, levelName, completedNumber, skilltotal)
                  }
              })
            }
            if (myAllSkills.length === i+1) {
              //Send this to SkillAchievementView!
              setAchievementCard(achievementCardArray)

              //まだ終わっていないLEVELをP/UしてCurrentLevelViewに送る！
              achievementCardArray.map((item)=> {
                if(achievementCardArray.length == 1 || item.completeSkillNumber !== item.totalSkillNumber){
                  setClassCard(item)
                } else {
                  null
                }
              })
              
            } else {
              null
            }
          }
        })
      })
    })  
  },[allLevelsThisProgramHas])


//FUNCTION CREATE NEW OBJECT FOR LEVEL ACHIEVEMENT ============== 
  const createObject = (NBR, levelName, compketedNumber, skilltotal) => {
    let achievementCard = {
      id: NBR,
      level : levelName,
      completeSkillNumber : compketedNumber,
      totalSkillNumber : skilltotal 
    }
    achievementCardArray.push(achievementCard)
  }

  return (
    <View style={styles.container}>
      <ReportView student={trainee} navigation={navigation}/>
      <View style={styles.background}>
        <ScrollView>
          <TouchableOpacity style={styles.classtab}>
            {<Text style={styles.classtabtext}>{classTitle}</Text>}
          </TouchableOpacity>
          <CurrentLevelView classTitle={classTitle} classCard={classCard}/>
          <SkillsAchievementView levelCards={achievementCard}/>
          <AttendanceListView student={trainee} /> 
          <ViewReport student={trainee}/>
        </ScrollView>
      </View>  
    </View>
  )
}
const styles = StyleSheet.create ({
  container: {
    // paddingHorizontal: 20,
    // paddingVertical: 20,
    backgroundColor: 'orange',
  },
  background:{
    backgroundColor: '#FDFDFD',
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderTopRightRadius:28,
    borderTopLeftRadius:28,
    // flex: 1,
  },
  classtab:{
    borderRadius: 81,
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: '#404142',
    flexBasis:0,
    width: 120,
    // flexGrow:0,
    // flexShrink:0,
    // flex:0,
  },
  classtabtext:{
    color: '#FAF9F9',
    fontWeight:'400',
    fontSize: 14,
    // flexBasis:0,
    // flexShrink:0,
    // flexGrow:0,
   
    // letter-Spacing: -0.02em,
  }
})
export default StudentDetail