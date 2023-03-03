import Card from "../Card/Card"
import {FlatList} from "native-base"


const ClassList = ({ classes, navigation }) => {

 

    return(

        <FlatList
        data={classes}
        renderItem={({ item }) => (
          <Card
            dateSelected={dateSelected}
            title={item.title}
            startTime={item.startTime}
            endTime={item.endTime}
            id={item.id}
            navigation={navigation}
          />
        )}
      />
    )

}

export default ClassList