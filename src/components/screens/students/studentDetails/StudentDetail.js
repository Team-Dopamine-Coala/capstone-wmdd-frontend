import { View, Text,ScrollView } from "native-base"
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
import {getLevelById} from '../../../../utils/queries'


// const StudentDetail = ({route, navigation }) => {
  const StudentDetail = ({route}) => {
  const { trainee } = route.params
  const {userToken} = useContext(AuthContext)
  const [classTitle, setClassTitle] = useState('')
  const [myClassData, setMyClassData] = useState('')
  const [myEvaluations, setMyEvaluations] = useState([])
  const [myCompletedEvaluations, setMyCompletedEvaluations] = useState([])
  const [myAllSkills, setMyAllSkills] = useState([])
  const [endFetch, setEndFetch ] = useState(false)
  const [endProgram, setEndProgram ] = useState(false)
  const [myAllLevelsId, setMyAllLevelId] = useState([])
  const [allLevelsThisProgramHas, setAllLevelsThisProgramHas] = useState([])
  
  const [IhavethisLevel, setIhavethisLevel] = useState([])
  let myEvalArray = []
  let mySkillArray = []
  let programArray = []
  let levelSortArray = []
  // let newProgramArray = []
  let allLevelsThisProgramHasArray = []
  // let howManySkillsIcompletedArray = []
  
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
  
  //Fetch Program & compate how many skills I completed in the level
  useEffect(() => {
    // console.log('私の持つSkills',myAllSkills)
    myAllSkills.map((skl,i) => {
      // console.log('私の持つSkills',i,skl)
      let programid = skl.programId
      console.log('PROGRAM ID',programid)
      getProgramById(programid,userToken)
        .then(data => {
          console.log('PROFETCHしたて',i, data)
          data.levels.map((item) => programArray.push(item))
          console.log('DUPPE消す前',i,programArray)
          //DUPEを削除してArrayに入れる
          if (myAllSkills.length === i+1) {
            setMyAllLevelId(programArray.filter((element, index) => 
              programArray.indexOf(element) == index
            ))
            console.log('ProgのFetch終了')
          } else {
            null
          }
        })
    })
  }, [myAllSkills])

  //属してるprogramが持っているLEVELを全部Fetch　＆１つのLebelの長さを確認！Display!
  useEffect(() => {
    console.log('DUPE消えたよ', myAllLevelsId)
    console.log('これが私の終了したスキル',myAllSkills)
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

 //skill arrayにループでアクセスする！自分の持つスキルがどのLEVELに入っているかMatchさせる
  useEffect(() => {
    console.log('ついにここまで',allLevelsThisProgramHas.length)
    allLevelsThisProgramHas.map((level, index) => {
      // console.log('外',i,level.title)
      level.skills.map((iteminarray, index) => {
        // console.log('真ん中',j,iteminarray)
        myAllSkills.map((one, index) => {
          console.log('中',iteminarray[index])
            // if(iteminarray[j] === one){

            //   // console.log('同じかな',iteminarray[j], one)
            //   // let arraynonakanokosuu = iteminarray.length
            //   // console.log(arraynonakanokosuu)

            //   // // let levelName = level.title
            //   // console.log(k,level.title)
              
            //   // let howManySkillsIcompletedArray = []
            //   // howManySkillsIcompletedArray.push(iteminarray)
            //   // console.log(k,howManySkillsIcompletedArray)
            // }
        })
      })
      // console.log(`${i}//title: ${level.title} ${howManySkillsIcompletedArray.length} completed /in total ${arraynonakanokosuu}skills`)
    })  
  },[allLevelsThisProgramHas])





  // //Levelの中のskill array全体の長さと、今自分が終わっているのを比べる
  // const howManyCompleted = (arrayForLevel) => {
  //   arrayForLevel.map((item, i) => {
  //     //total長さ出す
  //     let skillLength = item.skills.length
  //     console.log('個々スキルのレングス',i,skillLength)
  //     // 

  //   })
  // }


  return (
    <View style={styles.container}>
      {/* <ScrollView>
        {<Text>{classTitle}</Text>}
        <ReportView student={trainee} navigation={navigation}/>
        <CurrentLevelView student={trainee} classData={classData} classTitle={classTitle}/>
        <SkillsAchievementView student={trainee} allLevels={IhavethisLevel}/>
        <AttendanceListView student={trainee} /> 
        <ViewReport student={trainee}/>
      </ScrollView>   */}
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