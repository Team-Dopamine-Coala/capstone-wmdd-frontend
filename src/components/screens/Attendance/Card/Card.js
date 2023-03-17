import { Box, Icon, HStack, Text, VStack, Button, Heading, View } from "native-base";
import { Ionicons } from "@expo/vector-icons"
import { useEffect, useState } from "react";

const Card = ({ title, startTime, endTime, location, id, navigation, dateSelected, completed, attendances }) => {
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
    <>
        <VStack  mb={5} >  
          <Box  mb={3} p={5} bg="#ffc0cb" width="100%" height="90%" borderRadius="md" shadow={9} position="absolute" top="5%"></Box>
          <Box ml={4} p={3} bg="#ffffff" flex={1} height="100%" borderRadius="md" shadow={5}>
            <HStack space={1} mb={2} borderBottomWidth="1" pb={2} justifyContent="space-between">      
              <VStack >
                  <Heading fontSize={22}>{title}</Heading>
                  <Text>{startTime} -{'>'} {endTime}</Text>
                  <Text>{location}</Text>
              </VStack>
                  <Icon ml="2" size="70" color={ completed ? "#ffc0cb" : "gray.200"} as={<Ionicons name="checkmark-circle-outline"/>} />         
            </HStack>
            <HStack space={1} justifyContent="space-between">
               <VStack >
                <Text>{present}</Text>
                <Text>Present</Text>
                </VStack >
                <VStack >
                <Text>{absent}</Text>
                <Text>absent</Text>
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
                      navigation.navigate('Completed Attendance', {
                        classId: id
                    })}
                    else{
                    navigation.navigate('Attendance Student List', {
                      classId: id,
                      classTitle: title,
                      classStartTime: startTime, 
                      classEndTime: endTime
                    })
                  }}}
                >
                  { completed ? <Text fontWeight="700" color="#404142">View</Text> : <Text  fontWeight="700" color="#ffffff">Start</Text>}
                </Button>
              </HStack>
          </Box>
        </VStack>
    </>
  );
}

export default Card