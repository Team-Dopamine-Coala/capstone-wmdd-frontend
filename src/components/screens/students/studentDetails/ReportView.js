import { View, Text, VStack } from "native-base"
import { useState } from "react"
import { StyleSheet, Modal } from "react-native"
import Biometrics from "../Biometrics/Biometrics"


const ReportView = (trainee) => {
console.log('レポートまで来たぞ',trainee.student)
const student = trainee.student
const [modalIsOpen, setModalIsOpen] = useState(false)


const clickStudent = () => {
    setModalIsOpen(true)
    //Open to biometrics modal(mini 四角)
    //Pass the student's data
}
return (
    <View >
        <VStack onPress={clickStudent} trainee={trainee} style={styles.container}>
            <Text style={styles.name}>{student.firstname} {student.lastname}</Text> 
            <Text>View profile and Contact Information</Text>
        </VStack>
        <Modal isOpen={modalIsOpen}>
            <Biometrics/>
        </Modal>
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