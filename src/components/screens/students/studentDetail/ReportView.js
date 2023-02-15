import { View, Text, VStack } from "native-base"


const ReportView = (student, navigation) => {
console.log(student)

const clickStudent = () => {
    //Open to biometrics modal
    //Pass the student's data
}
return (
    <View>
        <VStack onPress={clickStudent} student={student}>
            <Text>{student.firstname}{student.lasname}</Text> 
            <Text>View profile and Contact Information</Text>
        </VStack>
        
    </View>
  )
}

export default ReportView