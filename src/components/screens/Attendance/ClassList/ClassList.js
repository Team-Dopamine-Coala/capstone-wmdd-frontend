import Card from "../Card/Card"
import {FlatList, View} from "native-base"
import { useEffect, useState } from "react"
import { getAllAttendance } from "../../../../utils/queries"
import moment from 'moment';


const ClassList = ({ classes, navigation, dateSelected, ready }) => {
  const [classesWithCheck, setClassesWithCheck] = useState(classes)
  const [attendances, setAttendances] = useState([])
  const [fetchedAtdc, setFetchedAtdc] = useState(ready)
  // console.log("ready:  ", ready)
  // console.log("fetchedAtdc: ", fetchedAtdc)
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
              setFetchedAtdc(Math.floor(Math.random() * 1000000))
              // console.log("fetchedAtdc: ", fetchedAtdc)
              // console.log("ready:  ", ready)
            }
          }
        )

      }

      
      
    })

    return(
  
        <FlatList
        data={classesWithCheck}
        extraData={fetchedAtdc}
        renderItem={({ item }) => (
          <Card
            dateSelected={dateSelected}
            title={item.title}
            color={item.color}
            cardColor={item.cardColor}
            startTime={item.startTime}
            endTime={item.endTime}
            location={item.location}
            id={item._id}
            completed={item.completed}
            attendances={item.attendances ? item.attendances : null}
            navigation={navigation}
            // showsHorizontalScrollIndicator={false}
          />
        )}
      />
    )

}

export default ClassList