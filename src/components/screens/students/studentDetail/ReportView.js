import { View, Text, VStack } from "native-base"


const ReportView = (student) => {
console.log('レポートまで来たぞ',student)

const clickStudent = () => {
    //Open to biometrics modal(mini 四角)
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