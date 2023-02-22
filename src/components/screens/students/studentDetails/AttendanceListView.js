import { View, Text, VStack } from "native-base"
import { StyleSheet } from "react-native"


const AttendanceListView = (trainee, navigation) => {
console.log(trainee)
  return (
    <VStack style={styles.container}>
        <Text style={styles.title}>Attendance</Text>

    </VStack>
  )
}
const styles = StyleSheet.create ({
  container: {
    paddingVertical: 10,
    backgroundColor: '#bbb',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
})
export default AttendanceListView