import Card from "../Card/Card"
import {FlatList} from "native-base"


const ClassList = ({ classes }) => {

 

    return(

        <FlatList
        data={classes}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            startTime={item.startTime}
            endTime={item.endTime}
            id={item.id}
          />
        )}
      />
    )

}

export default ClassList