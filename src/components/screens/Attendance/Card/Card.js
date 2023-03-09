import { Box, Icon, HStack, Text, VStack, Button, Heading, View } from "native-base";
import { Ionicons } from "@expo/vector-icons"
import { useEffect, useState } from "react";

const Card = ({ title, startTime, endTime, id, navigation, dateSelected, completed, attendances }) => {
  const [present, setPresent] =  useState()
  const [absent, setAbsent] =  useState()
  // const {  title, startTime, endTime, id, navigation } = props;
  useEffect(() => {
    // TODO: fetch attendance by id
    // console.log("card - completed:", completed)
    // console.log("dateSelected",  dateSelected)
    console.log("attendances:  ", attendances)
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
      setPresent(present)
      setAbsent(absent)
      console.log("present/absent: ", present, absent)
      
    }

  })
  return (
    <>
      {/* <Box mb={3} p={5} bgColor="#EEF1F4" borderRadius="lg"> */}
        <VStack  mb={5} >  
          <Box  mb={3} p={5} bg="#ffc0cb" width="100%" height="90%" borderRadius="md" shadow={9} position="absolute" top="5%"></Box>
          <Box ml={4} p={3} bg="#ffffff" flex={1} height="100%" borderRadius="md" shadow={5}>
            <HStack space={1} mb={2}>      
              <VStack >
                <Heading fontSize={22}>{title}</Heading>
                <Text>{startTime} -{'>'} {endTime}</Text>
                <Text>Venue</Text>
              </VStack>
              <Icon ml="2" size="70" color="gray.200" as={<Ionicons name="checkmark-circle-outline"/>} />         
            </HStack>
            <HStack space={1}>
            <Text>Present {present}</Text>
            <Text>absent {absent}</Text>
            <Button
              dateSelected = {dateSelected}
              borderRadius="61"
              variant="solid"
              bgColor="#404142"
              id={id}
              onPress={() => {
                navigation.navigate('Attendance Student List', {
                  classId: id
                })
              }}
            >
               <Text  fontWeight="700" color="#ffffff">{ completed ? "View" : "Start"}</Text>
            </Button>
            </HStack>
          </Box>
        </VStack>
      {/* </Box> */}
    </>
  );
}

export default Card