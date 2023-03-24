import { Text, VStack, View, Box, Heading, HStack, ScrollView } from "native-base"
import { StyleSheet, TouchableOpacity, Linking } from "react-native"
import moment from "moment"

const ViewProfileScreen = ({route}) => {

    const student = route.params.student

    // const clickContactFunc = async (contactway, contact) => {
    //         await Linking.openURL(`${contactway}:${contact}`)
    //             .then(() => null)
    //             .catch(() => null)
    //         console.log('click contact!',contactway, contact)
    // }

  return (
    <View style={styles.container}>
        <Box style={styles.background}>
            <Heading style={styles.heading} fontFamily="Lexend_700">{student.firstname} {student.lastname}</Heading>
            <ScrollView>
                <Box>
                    <Text style={styles.subheading} fontFamily="Lexend_500">Birthday</Text>
                    <VStack style={styles.box} bg="#FDFDFD" borderRadius="md" shadow={5}>
                        <Text style={styles.data} fontFamily="Lexend_400">{moment(student.birthday).format('ddd, D MMM YYYY')}</Text>

                    </VStack>
                </Box>
                <Box>
                    <Text style={styles.subheading} fontFamily="Lexend_500">Medical Information</Text>
                    <VStack style={styles.box} bg="#FDFDFD" borderRadius="md" shadow={5}>
                        <Box>
                            <Text style={styles.title} fontFamily="Lexend_400">Allergies</Text>
                            <Text style={styles.data} fontFamily="Lexend_400">{student.allergy}</Text>
                        </Box>
                        <HStack space={1} mb={2} borderBottomWidth=".2" pb={2} justifyContent="space-between"/>
                        <Box>
                            <Text style={styles.title} fontFamily="Lexend_400">Conditions</Text>
                            <Text style={styles.data} fontFamily="Lexend_400">{student.condition}</Text>
                        </Box>
                    </VStack>
                </Box>
                <Box>
                    <Text style={styles.subheading} fontFamily="Lexend_500">Guardian Information</Text>
                    <VStack style={styles.box} bg="#FDFDFD" borderRadius="md" shadow={5}>
                        <Box>
                            <Text style={styles.title} fontFamily="Lexend_400">Name</Text>
                            <Text style={styles.data} fontFamily="Lexend_400">{student.guardianName}</Text>
                        </Box>
                        <HStack space={1} mb={2} borderBottomWidth=".2" pb={2} justifyContent="space-between"/>
                        {/* <TouchableOpacity onPress={() => clickContactFunc('tel',student.guardianNumber)}> */}
                            <Text style={styles.title} fontFamily="Lexend_400">Phone Number</Text>
                            <Text style={styles.data} fontFamily="Lexend_400">{student.guardianNumber}</Text>
                        {/* </TouchableOpacity > */}
                        <HStack space={1} mb={2} borderBottomWidth=".2" pb={2} justifyContent="space-between"/>
                        {/* <TouchableOpacity onPress={() => clickContactFunc('mailto',student.guardianEmail)}> */}
                            <Text style={styles.title} fontFamily="Lexend_400">Email</Text>
                            <Text style={styles.data} fontFamily="Lexend_400">{student.guardianEmail}</Text>
                        {/* </TouchableOpacity > */}
                    </VStack>
                </Box>
            </ScrollView>
        </Box>
    </View>
      )
}
const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'orange',
    },
    background: {
        paddingRight: 18,
        paddingLeft: 22,
        paddingVertical: 30,
        backgroundColor: '#FDFDFD',
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        marginTop: 12,
    },
    heading: {
        textAlign: "center",
        fontSize: 32,
        lineHeight: 40,
        marginBottom: 32,
    },
    subheading: {
        fontSize: 16,
        marginBottom: 8,
    },
    box: {
        borderRadius: 12,
        paddingLeft: 24,
        paddingVertical: 14,
        marginBottom: 24,
        marginHorizontal: 2,
    },
    title: {
        marginBottom: 8,
        fontSize: 14,
    },
    data: {
        fontSize: 16,
    }
  })
export default ViewProfileScreen
