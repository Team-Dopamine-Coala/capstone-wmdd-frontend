import { Text, VStack, View, Box } from "native-base"


const ViewProfileScreen = (student) => {
console.log('最後',student.route.params.student)
const Student = student.route.params.student

  return (
    <View>
        <Text>kitayo</Text>
        <Box>
            <Text>Birthday</Text>
            <VStack>
                <Text>{Student.birthday}</Text>
            </VStack>
        </Box>
        <Box>
            <Text>Medical Information</Text>
            <VStack>
                <Box>
                    <Text>Allegies</Text>
                    {/* <Text>{student.}</Text> */}
                </Box>
                <Box>
                    <Text>Conditions</Text>
                    <Text>{Student.medicalInfo}</Text>
                </Box>
            </VStack>
        </Box>
        <Box>
            <Text>Guardian Information</Text>
            <VStack>
                <Box>
                    <Text>Name</Text>
                    <Text>{Student.guardianName}</Text>
                </Box>
                <Box>
                    <Text>Phone Number</Text>
                    <Text>{Student.guardianNumber}</Text>
                </Box>
                <Box>
                    <Text>Email</Text>
                    <Text>{Student.guardianEmail}</Text>
                </Box>
                
            </VStack>
        </Box>
    </View>
      )
}

export default ViewProfileScreen


//task List
//1.Display all personal information
//2. Birthdayのdatabaseの入れ方確認
//3.Allegiesはどの内容を表示するのか確認
