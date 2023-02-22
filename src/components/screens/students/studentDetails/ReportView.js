import { View, Text, VStack } from "native-base"
import { StyleSheet } from "react-native"


const ReportView = (trainee) => {
console.log('レポートまで来たぞ',trainee.student)
const student = trainee.student

const clickStudent = () => {
    //Open to biometrics modal(mini 四角)
    //Pass the student's data
}
return (
    <View >
        <VStack onPress={clickStudent} trainee={trainee} style={styles.container}>
            <Text style={styles.name}>{student.firstname} {student.lastname}</Text> 
            <Text>View profile and Contact Information</Text>
        </VStack>
        
    </View>
  )
}
const styles = StyleSheet.create ({
    container: {
       backgroundColor: '#bbb',
       paddingHorizontal: 10,
       paddingVertical: 10,
       borderRadius: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
    }
  })
export default ReportView