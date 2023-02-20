import { View, Text, VStack } from "native-base"


const ReportView = (trainee) => {
console.log('レポートまで来たぞ',trainee)

const clickStudent = () => {
    //Open to biometrics modal(mini 四角)
    //Pass the student's data
}
return (
    <View>
        <VStack onPress={clickStudent} trainee={trainee}>
            <Text>{trainee.firstname}{trainee.lasname}</Text> 
            <Text>View profile and Contact Information</Text>
        </VStack>
        
    </View>
  )
}

export default ReportView