import { Box, Icon, HStack, Text, VStack, Button, Heading, View } from "native-base";
import { Ionicons } from "@expo/vector-icons"
import { useEffect, useState } from "react";
import moment from 'moment';

const Card = ({ title, startTime, endTime, location, id, navigation, dateSelected, completed, attendances, color, cardColor }) => {
  const [present, setPresent] =  useState("-")
  const [absent, setAbsent] =  useState("-")
  useEffect(() => {
    // TODO: fetch attendance by id

    let present = 0
    let absent = 0
    if (attendances) {
      attendances.forEach(element => {
        if (element.present) {
          present += 1
        } else {
          absent += 1
        }      
      });
    }

    if(present==0){
      setPresent("-")
    } else {setPresent(present)}
    if(absent==0){
      setAbsent("-")
    } else {
    setAbsent(absent)
    }

  })
  return (
   <View m={4} my={4} >
          <Box  mb={3} p={5} bg={color} width="100%" height="90%" borderRadius="md" shadow={9} position="absolute" top="5%"></Box>
          <Box ml={4} p={3} bg={cardColor} flex={1} height="100%" borderRadius="md" shadow={5}>
            <HStack borderBottomWidth="1" borderBottomColor="#737373" mb={3} justifyContent="space-between">      
              <VStack pr={3} pb={3}>
                  <Heading fontSize="24" fontFamily="Lexend_600">{title}</Heading>
                  <HStack alignItems="center" space={1}>
                  <Icon size={5} as={<Ionicons name='time' />} />
                  <Text  fontSize="16" color="#737373" fontFamily="Lexend_400">{moment(startTime).format('H:mm A')} <Icon size={4} as={<Ionicons name='arrow-forward' />} /> {moment(endTime).format('H:mm A')}</Text>
                  </HStack>
                  <HStack alignItems="center" space={1}>
                  <Icon size={5} as={<Ionicons name='location-outline' />} />
                  <Text fontSize="16" color="#737373" fontFamily="Lexend_400">{location}</Text>
                  </HStack>
                
              </VStack>
                  <Icon ml="2" size="70" color={ completed ? color : "gray.200"} as={<Ionicons name="checkmark-circle-outline"/>} />         
            </HStack>
            <HStack space={1} pt={2} justifyContent="space-between">
               <VStack >
                <Text fontSize="20" color="#212427" fontFamily="Lexend_700">{present}</Text>
                <Text fontSize="14" color="#737373" fontFamily="Lexend_400">Present</Text>
                </VStack >
                <VStack >
                <Text fontSize="20" color="#212427" fontFamily="Lexend_700">{absent}</Text>
                <Text fontSize="14" color="#737373" fontFamily="Lexend_400">Absent</Text>
                </VStack >
                <Button
                  width={100}
                  dateSelected = {dateSelected}
                  borderRadius="61"
                  variant="outline"
                  bgColor= { completed ? "#eeeeee":"#404142"}
                  id={id}
                  onPress={() => {
                    if(completed){
                      navigation.navigate('View Attendance', {
                        viewclassId: id,
                        present: present,
                        classTitle: title,
                        absent: absent
                    })}
                    else{
                    navigation.navigate('Attendance Student List', {
                      classId: id,
                      classTitle: title,
                      classStartTime: startTime, 
                      classEndTime: endTime,
                      dateSelected: dateSelected
                    })
                  }}}
                >
                  { completed ? <Text fontSize="16" fontFamily="Lexend_600" color="#404142">View</Text> : <Text fontSize="16" fontFamily="Lexend_600" color="#FAF9F9">Start</Text>}
                </Button>
              </HStack>
          </Box>
    </View>
  );
}

export default Card