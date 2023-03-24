// not in use

import { Box, FlatList, Text, VStack } from "native-base"
import StudentCard from "../Card/StudentCard"

const StudentList = ({ present, absent, presentList, absentList }) => {
 
  // console.log("presentListArray", presentList)
  // console.log("absentListArray", absentList)
  return (
    <VStack p={3}>
        <Box borderBottomWidth="1" _dark={{
                borderColor: "muted.50"
              }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2"><Text>Present({present})</Text></Box>
        <FlatList 
         data={presentList}
         renderItem={({ item }) => (
            <StudentCard 
              item={item}
              />
              )}
            />
        <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
            }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2"> <Text>Absent({absent})</Text></Box>
       
        <FlatList 
         data={absentList}
         renderItem={({ item }) => (
            <StudentCard
              item={item}
              />
              )}
            />
    </VStack>
        


  )
}

export default StudentList