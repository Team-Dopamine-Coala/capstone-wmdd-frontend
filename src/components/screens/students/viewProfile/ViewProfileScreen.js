import { Text, VStack, View, Box, Heading, Button } from "native-base"
import { StyleSheet } from "react-native"

const ViewProfileScreen = ({route, navigation}) => {
// console.log('最後',student.route.params.student)
console.log('最後',route.params.student)
console.log('最後navi', navigation)
const student = route.params.student



  return (
    <View style={styles.container}>
        <Heading style={styles.heading}>{student.firstname} {student.lastname}</Heading>
        <Box>
            <Text style={styles.subheading}>Birthday</Text>
            <VStack style={styles.box}>
                <Text >{student.birthday}</Text>
            </VStack>
        </Box>
        <Box>
            <Text style={styles.subheading}>Medical Information</Text>
            <VStack style={styles.box}>
                <Box>
                    <Text>Allegies</Text>
                    {/* <Text>{student.}</Text> */}
                </Box>
                <Box>
                    <Text>Conditions</Text>
                    <Text>{student.medicalInfo}</Text>
                </Box>
            </VStack>
        </Box>
        <Box>
            <Text style={styles.subheading}>Guardian Information</Text>
            <VStack style={styles.box}>
                <Box>
                    <Text>Name</Text>
                    <Text>{student.guardianName}</Text>
                </Box>
                <Box>
                    <Text>Phone Number</Text>
                    <Text>{student.guardianNumber}</Text>
                </Box>
                <Box>
                    <Text>Email</Text>
                    <Text>{student.guardianEmail}</Text>
                </Box>
            </VStack>
        </Box>
        {/* <Button onPress={() => navigation.navigate('Student Profile')}>Back Button</Button> */}
    </View>
      )
}
const styles = StyleSheet.create ({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 30,
    },
    heading: {
        textAlign: "center",
    },
    subheading: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    box: {
        backgroundColor: '#bbb',
        borderRadius: 12,
        paddingHorizontal: 24,
        paddingVertical: 14,
    }
  })
export default ViewProfileScreen


//task List
//1.Display all personal information
//2. Birthdayのdatabaseの入れ方確認
//3.Allegiesはどの内容を表示するのか確認