import { View, Text, Box } from "native-base"


const ReportView = (student, navigation) => {
console.log(student)
  return (
    <View>
        <Box>
        <Text>{student.firstname}{student.lasname}</Text> 
        <Text>View profile and Contact Information</Text>
        </Box>
        
    </View>
  )
}

export default ReportView