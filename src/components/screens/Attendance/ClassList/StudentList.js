import { Box, FlatList, Text, VStack } from "native-base"
import StudentCard from "../Card/StudentCard"

const StudentList = ({ present, absent, presentList, absentList }) => {
   
  const newAbsent = absent == '-' ? 0 : absent
  // console.log("presentListArray", presentList)
  // console.log("absentListArray", absentList)
  return (
    <VStack >
        <Text mb="3" fontFamily="Lexend_700" fontSize="16">{`Present (${present})`}</Text>
        <Box mb={7} pl="16px" bgColor="#FDFDFD"  borderRadius="12px" shadow={5} >
          <FlatList 
            data={presentList}
            renderItem={({ item, i }) => (
              <StudentCard 
                item={item}
                index={i}
                arraylength={presentList.length}
              />
            )}
          />
        </Box>
        <Text  mb="3" fontFamily="Lexend_700" fontSize="16">{`Absent (${newAbsent})`}</Text>
        <Box mb={7} pl="16px" bgColor="#FDFDFD"  borderRadius="12px" shadow={5} > 
          <FlatList 
            data={absentList}
            renderItem={({ item, i }) => (
              <StudentCard
                item={item}
                index={i} 
                arraylength={absentList.length}
              />
            )}
          />
        </Box>
    </VStack>
  )
}

export default StudentList