import { Box, FlatList, Text, VStack, Button } from "native-base"
import StudentCard from "../Card/StudentCard"

const CompletedAttendance = ({ students, navigation, checkboxHandler }) => {

  
  return (
    <VStack>
    <Box>
        <Text>Present</Text>
    </Box>
     <Button
     bgColor="#404142"
     onPress={() => {
       navigation.navigate('Attendance Index');
     }}
   ><Text fontWeight="700" color="#ffffff">Done</Text></Button>
   </VStack>
        


  )
}

export default CompletedAttendance