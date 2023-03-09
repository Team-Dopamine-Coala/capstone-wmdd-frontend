import Card from "../Card/Card"
import {FlatList} from "native-base"
import { useEffect, useState } from "react"
import { getAllAttendance } from "../../../../utils/queries"

const ClassList = ({ classes, navigation, dateSelected }) => {
  const [classesWithCheck, setClassesWithCheck] = useState(classes)
  const [attendances, setAttendances] = useState([])
  const [ready, setReady] = useState(false)
 
    useEffect(() => {
      for (let index = 0; index < classesWithCheck.length; index++) {
        const element = classesWithCheck[index];
        getAllAttendance(element._id).then(
          data => {
            const curr = data
            element.attendances = data
            setClassesWithCheck(classesWithCheck)
            const newAtdc = attendances
            newAtdc.push(curr)
            setAttendances(newAtdc)
            if (newAtdc.length == classes.length) {
              setReady(true)
              // console.log("attendances:  ", attendances)
              console.log("ready:  ", ready)
            }
          }
        )

      }

      
      
    }, [])

    return(

        <FlatList
        data={classesWithCheck}
        extraData={ready}
        renderItem={({ item }) => (
          <Card
            dateSelected={dateSelected}
            title={item.title}
            startTime={item.startTime}
            endTime={item.endTime}
            id={item._id}
            completed={item.completed}
            attendances={item.attendances ? item.attendances : null}
            navigation={navigation}
          />
        )}
      />
    )

}

export default ClassList