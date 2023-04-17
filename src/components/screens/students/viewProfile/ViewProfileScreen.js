import { Text, VStack, View, Box, Heading, HStack, ScrollView } from "native-base"
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from "react-native"
import moment from "moment"
import AnimatedEntrance from 'react-native-animated-entrance';

import Phone from "../../../svg/StudentsIcons/Phone"
import Mail from "../../../svg/StudentsIcons/Mail"

const ViewProfileScreen = ({route}) => {

    const student = route.params.student

    return (
        <LinearGradient colors={['#F4903F', '#F4903F', '#FC8634', '#FC8634', '#FC8634', '#F69B43', '#F69B43', '#F3AA6A', '#F3AA6A', '#F9D5B4']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} flex={1}>
            <View style={styles.container}>
                <Box style={styles.background}>
                    <Heading style={styles.heading} fontFamily="Lexend_700">{student.firstname} {student.lastname}</Heading>
                    <ScrollView>
                        <Box>
                            <Text style={styles.subheading} fontFamily="Lexend_500">Birthday</Text>
                            <AnimatedEntrance
                            axis={AnimatedEntrance.axis.horizontal}
                            offset={20}
                            duration={400}
                            delay={200}
                            order={1}
                            >
                                <VStack style={styles.box} bg="#FDFDFD" borderRadius="md" shadow={5}>
                                    <Text style={styles.data} fontFamily="Lexend_400">{moment(student.birthday).format('ddd, D MMM YYYY')}</Text>
                                </VStack>
                            </AnimatedEntrance>
                        </Box>
                        <Box>
                            <Text style={styles.subheading} fontFamily="Lexend_500">Medical Information</Text>
                            <AnimatedEntrance
                            axis={AnimatedEntrance.axis.horizontal}
                            offset={20}
                            duration={400}
                            delay={200}
                            order={2}
                            >
                                <VStack style={styles.box} bg="#FDFDFD" borderRadius="md" shadow={5}>
                                    <Box>
                                        <Text style={styles.title} fontFamily="Lexend_400">Allergies</Text>
                                        <Text style={styles.data} fontFamily="Lexend_400">{student.allergy}</Text>
                                    </Box>
                                    <HStack space={1} mb={2} borderBottomWidth=".2" pb={2} borderColor="#BBBBBB" justifyContent="space-between"/>
                                    <Box>
                                        <Text style={styles.title} fontFamily="Lexend_400">Conditions</Text>
                                        <Text style={styles.data} fontFamily="Lexend_400">{student.condition}</Text>
                                    </Box>
                                </VStack>
                            </AnimatedEntrance>
                        </Box>
                        <Box>
                            <Text style={styles.subheading} fontFamily="Lexend_500">Guardian Information</Text>
                            <AnimatedEntrance
                            axis={AnimatedEntrance.axis.horizontal}
                            offset={20}
                            duration={400}
                            delay={200}
                            order={3}
                            >
                                <VStack style={styles.box} bg="#FDFDFD" borderRadius="md" shadow={5}>
                                    <Box>
                                        <Text style={styles.title} fontFamily="Lexend_400">Name</Text>
                                        <Text style={styles.data} fontFamily="Lexend_400">{student.guardianName}</Text>
                                    </Box>
                                    <HStack space={1} mb={2} borderBottomWidth=".2" pb={2} borderColor="#BBBBBB" justifyContent="space-between"/>
                                    <VStack >
                                        <Text style={styles.title} fontFamily="Lexend_400">Phone Number</Text>
                                        <HStack style={styles.infoiconbox}>
                                            <Text style={styles.data} fontFamily="Lexend_400">{student.guardianNumber}</Text>
                                            <Phone/>
                                        </HStack>
                                    </VStack>
                                    <HStack space={1} mb={2} borderBottomWidth=".2" pb={2} borderColor="#BBBBBB" justifyContent="space-between"/>
                                    <VStack>
                                        <Text style={styles.title} fontFamily="Lexend_400">Email</Text>
                                        <HStack style={styles.infoiconbox}>
                                            <Text style={styles.data} fontFamily="Lexend_400">{student.guardianEmail}</Text> 
                                            <Mail/>
                                        </HStack>
                                    </VStack>
                                </VStack>
                            </AnimatedEntrance>
                        </Box>
                    </ScrollView>
                </Box>
            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create ({
    background: {
        paddingRight: 18,
        paddingLeft: 22,
        paddingVertical: 30,
        backgroundColor: '#FDFDFD',
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        height: "100%",
        marginTop: 97,
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
    },
    infoiconbox:{
        justifyContent: 'space-between',
        alignItems: 'center',
    }
  })
export default ViewProfileScreen
