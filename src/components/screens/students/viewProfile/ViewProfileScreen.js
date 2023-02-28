import { Text, VStack, View, Box } from "native-base"


const ViewProfileScreen = ({student}) => {
console.log('最後',student)

  return (
    <View>
        <Box>
            <Text>Birthday</Text>
            <VStack>
                <Text>{student.birthday}</Text>
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
                    <Text>{student.medicalInfo}</Text>
                </Box>
            </VStack>
        </Box>
        <Box>
            <Text>Guardian Information</Text>
            <VStack>
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
    </View>
      )
}

export default ViewProfileScreen


//task List
//1.Display all personal information
//2. Birthdayのdatabaseの入れ方確認
//3.Allegiesはどの内容を表示するのか確認
