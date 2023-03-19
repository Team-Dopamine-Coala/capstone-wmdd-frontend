import { View, Text, Box } from "native-base"
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
            <Text style={styles.text}>View profile and Contact Information</Text>
        </TouchableOpacity>
        <Modal visible={modalIsOpen}>
            <Box style={styles.biobackground}>
            <StudentBiometrics student={student} navigation={navigation} closeBio={closeBio}/>
            </Box>
        </Modal>
    </View>
  )
}
const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#FDFDFD',
       paddingHorizontal: 16,
       paddingVertical: 10,
       borderRadius: 12,
       marginHorizontal: 20,
       marginTop: 16,
       marginBottom: 22,
    },
    name: {
        // fontFamily: 'Lexend',
        color: '#212427',
        fontSize: 28,
        fontWeight: "700",
        lineHeight: 30,
    },
    text: {
        // fontFamily: 'Lexend',
        marginTop: 6,
        color: '#212427',
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 20,
    },
    biobackground:{
        backgroundColor:'#bbb',
    }
  })
export default ReportView