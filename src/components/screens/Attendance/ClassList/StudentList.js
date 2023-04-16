// not in use

import { Box, FlatList, Text, VStack, ScrollView } from "native-base"
import StudentCard from "../Card/StudentCard"

const StudentList = ({ present, absent, presentList, absentList }) => {
   
  const newAbsent = absent == '-' ? 0 : absent
  // console.log("presentListArray", presentList)
  // console.log("absentListArray", absentList)
  return (
    <VStack paddingX="18px" paddingTop="31px"  height="100%" justifyContent="space-between" >
      <ScrollView paddingX="2px">
        <Text mb="3" fontFamily="Lexend_700" fontSize="16">{`Present (${present})`}</Text>
        <Box mb={7} pl="16px" bgColor="#FDFDFD"  borderRadius="12px" shadow={5} >
          {presentList.map((item, i) => (<StudentCard item={item} index={i} arraylength={presentList.length}/>))}
          {/* <FlatList 
          //  data={presentList}
          //  renderItem={({ item }) => (
          //     <StudentCard 
          //       item={item}
          //       />
          //       )}
          //     /> */}
        </Box>
        <Text  mb="3" fontFamily="Lexend_700" fontSize="16">{`Absent (${newAbsent})`}</Text>
        <Box mb={7} pl="16px" bgColor="#FDFDFD"  borderRadius="12px" shadow={5} > 
          {absentList.map((item, i) => <StudentCard item={item} index={i} arraylength={absentList.length}/>)}
          {/* <FlatList 
           data={absentList}
           renderItem={({ item }) => (
              <StudentCard
                item={item}
                />
                )}
          /> */}
        </Box>
      </ScrollView>
    </VStack>
  )
}

export default StudentList