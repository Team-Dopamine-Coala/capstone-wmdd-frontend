import { View, Text, VStack, ListItem, Box } from "native-base"
import { useState } from "react"
import { StyleSheet, Modal, TouchableOpacity } from "react-native"
import StudentBiometrics from "../Biometrics/StudentBiometrics"

const ReportView = ({student, navigation}) => {
const [modalIsOpen, setModalIsOpen] = useState(false)

const clickStudent = () => {
    setModalIsOpen(true)
    //Pass the student's data 
    //Biometrics OKが出たらIDをPassingすること！
}

const closeBio = () => {setModalIsOpen(false)}
return (
    <View >
        <TouchableOpacity onPress={clickStudent} trainee={student} style={styles.container}>
            <Text style={styles.name}>{student.firstname} {student.lastname}</Text> 
            <Text>View profile and Contact Information</Text>
        </TouchableOpacity>
        <Modal visible={modalIsOpen} >
            <StudentBiometrics student={student} navigation={navigation} closeBio={closeBio}/>
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