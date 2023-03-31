import { View, Text, Box, Icon, VStack } from "native-base"
import { useState } from "react"
import { StyleSheet, Modal, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons'
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
        <TouchableOpacity onPress={clickStudent} trainee={student} style={styles.container} shadow={5}>
            <VStack>
                <Text style={styles.name} fontFamily="Lexend_700">{student.firstname} {student.lastname}</Text> 
                <Text style={styles.text} fontFamily="Lexend_400">View profile and Contact Information</Text>
            </VStack>
            <Icon size={4} as={<Ionicons name='chevron-forward-outline' />} style={styles.icon}/>
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
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 1,
        borderColor: 'rgba(238, 238, 238, 0.5)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,    
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 12,
        marginHorizontal: 20,
        marginTop: 16,
        marginBottom: 22,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        color: '#212427',
        fontSize: 28,
        lineHeight: 30,
    },
    text: {
        marginTop: 6,
        color: '#212427',
        fontSize: 16,
        lineHeight: 20,
    },
    icon:{
        color: '#212427',
        fontSize: 20,
        lineHeight: 18,
        width: 15,
        height: 18,
        
    },
    biobackground:{
        backgroundColor:'#bbb',
    }
  })
export default ReportView