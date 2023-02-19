import { Text, VStack, View, Box } from "native-base"


const ViewProfileScreen = ({trainee}) => {
console.log(trainee)

  return (
    <View>
        <Box>
            <Text>Birthday</Text>
            <VStack>
                <Text>{trainee.birthday}</Text>
            </VStack>
        </Box>
        <Box>
            <Text>Medical Information</Text>
            <VStack>
                <Box>
                    <Text>Allegies</Text>
                    {/* <Text>{trainee.}</Text> */}
                </Box>
                <Box>
                    <Text>Conditions</Text>
                    <Text>{trainee.medicalInfo}</Text>
                </Box>
            </VStack>
        </Box>
        <Box>
            <Text>Guardian Information</Text>
            <VStack>
                <Box>
                    <Text>Name</Text>
                    <Text>{trainee.guardianName}</Text>
                </Box>
                <Box>
                    <Text>Phone Number</Text>
                    <Text>{trainee.guardianNumber}</Text>
                </Box>
                <Box>
                    <Text>Email</Text>
                    <Text>{trainee.guardianEmail}</Text>
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
