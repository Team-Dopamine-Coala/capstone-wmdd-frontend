import { Text, VStack, View, Box, Heading, HStack } from "native-base"
import { StyleSheet, TouchableOpacity, Linking } from "react-native"
import moment from "moment"

const ViewProfileScreen = ({route}) => {

    const student = route.params.student

    const clickContactFunc = async (contactway, contact) => {
            await Linking.openURL(`${contactway}:${contact}`)
                .then(() => null)
                .catch(() => null)
            console.log('コンタクトクリック',contactway, contact)
    }

  return (
    <View style={styles.container}>
        <Box style={styles.background}>
            <Heading style={styles.heading}>{student.firstname} {student.lastname}</Heading>
            <Box>
                <Text style={styles.subheading}>Birthday</Text>
                <VStack style={styles.box} bg="#ffffff" borderRadius="md" shadow={5}>
                    <Text>{moment(student.birthday).format('ddd, D MMM YYYY')}</Text>

                </VStack>
            </Box>
            <Box>
                <Text style={styles.subheading}>Medical Information</Text>
                <VStack style={styles.box} bg="#ffffff" borderRadius="md" shadow={5}>
                    <Box>
                        <Text style={styles.title}>Allergies</Text>
                        <Text>{student.allergy}</Text>
                    </Box>
                    <HStack space={1} mb={2} borderBottomWidth=".2" pb={2} justifyContent="space-between"/>
                    <Box>
                        <Text style={styles.title}>Conditions</Text>
                        <Text>{student.condition}</Text>
                    </Box>
                </VStack>
            </Box>
            <Box>
                <Text style={styles.subheading}>Guardian Information</Text>
                <VStack style={styles.box} bg="#ffffff" borderRadius="md" shadow={5}>
                    <Box>
                        <Text style={styles.title}>Name</Text>
                        <Text>{student.guardianName}</Text>
                    </Box>
                    <HStack space={1} mb={2} borderBottomWidth=".2" pb={2} justifyContent="space-between"/>
                    <TouchableOpacity onPress={() => clickContactFunc('tel',student.guardianNumber)}>
                        <Text style={styles.title}>Phone Number</Text>
                        <Text>{student.guardianNumber}</Text>
                    </TouchableOpacity >
                    <HStack space={1} mb={2} borderBottomWidth=".2" pb={2} justifyContent="space-between"/>
                    <TouchableOpacity onPress={() => clickContactFunc('mailto',student.guardianEmail)}>
                        <Text style={styles.title}>Email</Text>
                        <Text>{student.guardianEmail}</Text>
                    </TouchableOpacity >

                </VStack>
            </Box>
        </Box>
    </View>
      )
}
const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'orange',
    },
    background: {
        paddingHorizontal: 10,
        paddingVertical: 30,
        backgroundColor: '#FDFDFD',
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        marginTop: 10,
    },
    heading: {
        textAlign: "center",
        fontSize: 32,
    },
    subheading: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 8,
    },
    box: {
        // backgroundColor: '#bbb',
        borderRadius: 12,
        paddingHorizontal: 24,
        paddingVertical: 14,
        marginBottom: 24,
    },
    title: {
        marginBottom: 8,
    }
  })
export default ViewProfileScreen


//task List
//2. Birthdayのdatabaseの入れ方確認
//3.Allegiesはどの内容を表示するのか確認
