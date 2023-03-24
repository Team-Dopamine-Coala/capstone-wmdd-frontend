// not in use

import { Box, FlatList, Text, VStack } from "native-base"
import StudentCard from "../Card/StudentCard"

const StudentList = ({ present, absent, presentList, absentList }) => {
 
  // console.log("presentListArray", presentList)
  // console.log("absentListArray", absentList)
  return (
    <VStack p={3}>
       <Text mb="3" fontFamily="Lexend_700" fontSize="16">{`Present (${present})`}</Text>
        <Box mb={7} pl="16px" borderWidth="1"  bgColor="#FFFFFF" borderColor="#bbbbbb" borderRadius="12px" shadow={5} overflow="hidden">
               
        <FlatList 
         data={presentList}
         renderItem={({ item }) => (
            <StudentCard 
              item={item}
              />
              )}
            />
        </Box>
        <Text  mb="3" fontFamily="Lexend_700" fontSize="16">{`Absent (${absent})`}</Text>
        <Box mb={7} pl="16px" borderWidth="1" bgColor="#FFFFFF" borderColor="#bbbbbb" borderRadius="12px" shadow={5} overflow="hidden">
       
        <FlatList 
         data={absentList}
         renderItem={({ item }) => (
            <StudentCard
              item={item}
              />
              )}
            />
           </Box>
    </VStack>


        


  )
}

export default StudentList