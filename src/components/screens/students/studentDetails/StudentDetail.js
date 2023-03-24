import { View, Text,ScrollView } from "native-base"
import { StyleSheet, TouchableOpacity } from "react-native"
import { useContext, useState, useEffect} from "react"

import ReportView from "./ReportView"
import CurrentLevelView from "./CurrentLevelView"
import SkillsAchievementView from "./SkillsAchievementView"
import AttendanceListView from "./AttendanceListView"
import ViewReport from "./ViewReport"

import { AuthContext } from '../../../context/AuthContext'
import { getSingleClass, getEvaluationsByClass, getSkillById, getProgramById, getLevelById, fetchSkills } from '../../../../utils/queries'

const StudentDetail = ({route, navigation }) => {
  const { trainee } = route.params
  const {userToken} = useContext(AuthContext)
  const [classTitle, setClassTitle] = useState('')
  const [classColor, setClassColor] = useState('')
  const [myClassData, setMyClassData] = useState('')
  const [myCompletedEvaluations, setMyCompletedEvaluations] = useState([])
  const [myAllSkills, setMyAllSkills] = useState([])
  const [myAllLevelsId, setMyAllLevelId] = useState([])
  const [allLevelsThisProgramHas, setAllLevelsThisProgramHas] = useState([])
  const [achievementCard, setAchievementCard] = useState([])
  const [classCard, setClassCard] = useState([])
  let myEvalArray = []
  let mySkillArray = []
  let allSkillsArray = []
  let levellistArray = []
  let IhaveThisLevelArray = []
  let programArray = []
  let allLevelsThisProgramHasArray = []
  let achievementCardArray = []
  let aaa = []

  
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
        setClassColor(data.color)
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

  // 3.Fetch completed skills 完了したSkillをGetする
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
  
//
  //  //========CHANGING NOW ＝＝＝＝＝＝=========================
  //[4].program に行かずにSkillから直接そのスキルがいくつもともと持っているか確認する。
  useEffect(() => {
    // console.log('私の持つSkills',myAllSkills.length, myAllSkills)
    //自分の持ってるスキルのレベルがtotalで何個持っているのか確認する
      //1.全部のスキルをFetchしてLevelが同じものを集める
      fetchSkills(userToken)
      .then(data => {
        // console.log('これ',data)
        data.map((item, i) => { allSkillsArray.push(data)})
        console.log('skills全部',allSkillsArray.length)

        //2.自分の持っているskillの中でlevelだけP/U してDUPEを消す
        myAllSkills.map((item, i) => {
          levellistArray.push(item.level)
        })
        //DUPEしてるものを削除
        const totallevelIhave = levellistArray.filter((eachlevel, index) => levellistArray.indexOf(eachlevel) == index)
        console.log('dUPE消したよ',totallevelIhave)

        //3.自分のスキル（totallevelIhaveがそれぞれ全体で何個levelを持っているかCHECK
        totallevelIhave.map((level, i) => {
          console.log(level)
          let b = allSkillsArray.filter(findskillLength(level))
          console.log('これみたい',b)

          // allSkillsArray.map((item, i) => {
          //   if (item.level === level){

          //   }
          // })
        })  
      })
      
    
      // //2.自分の持っているskillの中でlevelだけP/U してDUPEを消す
      // myAllSkills.map((item, i) => {
      //   levellistArray.push(item.level)
      // })
      // //DUPEしてるものを削除
      // const totallevelIhave = levellistArray.filter((eachlevel, index) => levellistArray.indexOf(eachlevel) == index)
      // // console.log('dUPE消したよ',totallevelIhave)

      // //自分のスキル（totallevelIhaveがそれぞれ全体で何個levelを持っているかCHECK
      // totallevelIhave.map((level, i) => {
      //   console.log('reberu',level)
      //   allSkillsArray.map((item,x) => {
      //     console.log('ここ',item)
      //     // if(level == item.level){
      //     //   console.log(x)
      //     // }
      //   })
      //   // let b = allSkillsArray.filter((item) => level == item.level)
      //   // console.log('長さ',b)
      // })
  },[myAllSkills])
  // setMyCompletedEvaluations(myEvalArray.filter((item) =>item.rating === 3))
const findskillLength = (level) => {
  return item.level == level
}
//=======ORIGINAL ======================================

  // //4.Fetch Program & compare how many skills I completed in the level
  // useEffect(() => {
  //   // console.log('私の持つSkills',myAllSkills.length, myAllSkills)
  //   myAllSkills.map((skl,i) => {
  //     // console.log('私の持つSkills',i,skl)
  //     let programid = skl.programId
  //     // console.log('PROGRAM ID',programid)
  //     getProgramById(programid,userToken)
  //       .then(data => {
  //         // console.log('PROFETCHしたて',i, data)
  //         data.levels.map((item) => programArray.push(item))
  //         // console.log('DUPPE消す前',i,programArray)
  //         //DUPEを削除してArrayに入れる
  //         if (myAllSkills.length === i+1) {
  //           setMyAllLevelId(programArray.filter((element, index) => 
  //             programArray.indexOf(element) == index
  //           ))
  //           // console.log('ProgのFetch終了')
  //         } else {
  //           null
  //         }
  //       })
  //   })
  // }, [myAllSkills])

  
  
  // //属してるprogramが持っているLEVELを全部Fetch　＆１つのLebelの長さを確認！Display!===============
  // //5.属してるprogramが持っているLEVELを全部Fetch　＆１つのLebelの長さを確認！Display!
  // useEffect(() => {
  //   console.log('DUPE消えたよ', myAllLevelsId)
  //   // console.log('これが私の終了したスキル',myAllSkills)
  //   myAllLevelsId.map((levelid,i) => {
  //     //属してるprogramが持っているLEVELを全部Fetch
  //     getLevelById(levelid,userToken)
  //       .then(data => {
  //         // console.log('LEVEL',h,data)
  //         allLevelsThisProgramHasArray.push(data) 
  //         // console.log('LEVELと同じかな?',h,allLevelsThisProgramHasArray.length)
  //         if (myAllLevelsId.length === i+1) {
  //           setAllLevelsThisProgramHas(allLevelsThisProgramHasArray)
  //           // howManyCompleted(allLevelsThisProgramHasArray)
  //         } else {
  //           null
  //         }
  //       })
  //   })
  // },[myAllLevelsId])

 

//=================ORIGINAL========================================
//  //6.skill arrayにループでアクセスする！自分の持つスキルがどのLEVELに入っているかMatchさせる
//   useEffect(() => {
//     let objectNBR = 0
//     // console.log('ついにここまで',allLevelsThisProgramHas.length)
//     allLevelsThisProgramHas.map((level) => {
//       level.skills.map((iteminarray) => {
//         myAllSkills.map((one,i) => {
//            //Skill ID が同じだったら 
//           if(iteminarray === one._id){
//             let NBR = objectNBR++

//             let oneskills = level.skills
//             let skilltotal = oneskills.length

//             let levelName = level.title
              
//             let howManySkillsIcompletedArray = []
//             howManySkillsIcompletedArray.push(one)

//             let completedNumber = howManySkillsIcompletedArray.length
             
//             //もし新しいRrrayの中がEmptyだったらそのまま入れる。１つ以上あれば、levelを照らし合わせる。同じだったら数を合わせる。
//             if(achievementCardArray.length == 0 ){
//               // console.log(i,'からだよ', achievementCardArray)
//               createObject(NBR, levelName, completedNumber, skilltotal)
//             }else {
//               // console.log(i, '入ってる',achievementCardArray)
//               //levelが同じだったらcompletedの数を合計する
//               achievementCardArray.map((item, e) => {
//                   if(item.level === levelName){
//                     // console.log('d',item)
//                     // console.log('レベル名同じ?',item.level, levelName)
//                     // console.log('数確認',item.completeSkillNumber, completedNumber)
//                     completedNumber = item.completeSkillNumber + completedNumber
                    
//                     // console.log('DUPE消す前',e,achievementCardArray)
//                     //DUPEしているLEVEL Objectを削除してから新しいObject作る    
//                     achievementCardArray = achievementCardArray.filter((card) => (card.level !== levelName))

//                     // console.log('消した後',e,achievementCardArray)
//                     createObject(NBR, levelName, completedNumber, skilltotal)
//                   } else {
//                     // console.log('名前同じじゃない',item.level, levelName)
//                     createObject(NBR, levelName, completedNumber, skilltotal)
//                   }
//               })
//             }
//             if (myAllSkills.length === i+1) {
//               //Send this to SkillAchievementView!
//               setAchievementCard(achievementCardArray)

//               //まだ終わっていないLEVELをP/UしてCurrentLevelViewに送る！
//               achievementCardArray.map((item)=> {
//                 if(achievementCardArray.length == 1 || item.completeSkillNumber !== item.totalSkillNumber){
//                   setClassCard(item)
//                 } else {
//                   null
//                 }
//               })
              
//             } else {
//               null
//             }
//           }
//         })
//       })
//     })  
//   },[allLevelsThisProgramHas])


// //FUNCTION CREATE NEW OBJECT FOR LEVEL ACHIEVEMENT ============== 
//   const createObject = (NBR, levelName, compketedNumber, skilltotal) => {
//     let achievementCard = {
//       id: NBR,
//       level : levelName,
//       completeSkillNumber : compketedNumber,
//       totalSkillNumber : skilltotal 
//     }
//     achievementCardArray.push(achievementCard)
//   }

  return (
    <View style={styles.container}>
      <ReportView student={trainee} navigation={navigation}/>
      <View style={styles.background}>
        <ScrollView>
          <TouchableOpacity style={styles.classtab}>
            {<Text style={styles.classtabtext}>{classTitle}</Text>}
          </TouchableOpacity>
          <CurrentLevelView classTitle={classTitle} classColor={classColor} classCard={classCard}/>
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
    backgroundColor: 'orange',
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
    // fontFamily: 'Lexend',
    color: '#FAF9F9',
    fontWeight:'400',
    fontSize: 14,
    lineHeight: 21,
  }
})
export default StudentDetail
