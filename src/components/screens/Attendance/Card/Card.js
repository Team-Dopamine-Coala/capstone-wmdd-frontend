import { Box, HStack, Text, VStack, Button, Heading, View } from "native-base";
import { useEffect, useState } from "react";
import moment from 'moment';

import Clock from "../../../svg/AttendanceIcons/Clock";
import MapPin from "../../../svg/AttendanceIcons/MapPin";
import RightArrow from "../../../svg/SettingIcons/RightArrow";
import AttendanceChart from "../../../svg/AttendanceIcons/AttendanceChart";

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
            <HStack borderBottomWidth="1" borderBottomColor="#737373" mb={3} justifyContent="space-between" >      
              <VStack space={1} mb={2} pt={1} >
                <Heading fontSize="24" fontFamily="Lexend_600" fontWeight="400">{title}</Heading>
                <HStack alignItems="center" space={1}>
                  <Clock/>
                  <Text fontSize="16" color="#737373" fontFamily="Lexend_400">{moment(startTime).format('H:mm A')}</Text>   
                  <RightArrow/>
                  <Text fontSize="16" color="#737373" fontFamily="Lexend_400">{moment(endTime).format('H:mm A')}</Text>
                </HStack>
                <HStack alignItems="center" space={1}>
                  <MapPin/>
                  <Text fontSize="16" color="#737373" fontFamily="Lexend_400">{location}</Text>
                </HStack>
              </VStack>
              <AttendanceChart completed={completed}/>
            </HStack>

            <HStack space={1} justifyContent="space-between">
               <VStack flex={1} alignItems="center">
                <Text fontSize="20" color="#212427" fontFamily="Lexend_700">{present}</Text>
                <Text fontSize="14" color="#737373" fontFamily="Lexend_400">Present</Text>
                </VStack >
                <VStack flex={1} alignItems="center">
                <Text fontSize="20" color="#212427" fontFamily="Lexend_700">{absent}</Text>
                <Text fontSize="14" color="#737373" fontFamily="Lexend_400">Absent</Text>
                </VStack >
                <Button
                  flex={1}
                  ml={3}
                  dateSelected = {dateSelected}
                  borderRadius="61"
                  variant="outline"
                  bgColor= { completed ? "#eeeeee":"#404142"}
                  borderColor="#404142"
                  borderWidth="1.5px"
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