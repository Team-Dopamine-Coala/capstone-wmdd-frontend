import { View, Text, HStack, Box } from 'native-base'
import React, {useState, useEffect} from 'react'
import { StyleSheet } from "react-native"

const WeekCalender = ({weektitle}) => {
    console.log('this WEEK',weektitle)
    
    const calender = [
            {week: "Monday", title: "M"},
            {week: "Tuesday", title: "T"},
            {week: "Wednesday", title: "W"},
            {week: "Thursday", title: "T"},
            {week: "Friday", title: "F"},
            {week: "Saturday", title: "S"},
            {week: "Sunday", title: "S"}
    ]
    
    return (
        <>
            <HStack style={styles.container}>
                {calender.map((item,i) => (
                    <Box key={i} style={styles.circle} bg={weektitle == item.week ? "#FFFFFF" : "#BBA0EC"} > 
                        <Text fontFamily="Lexend_400" 
                                fontSize={14} 
                                lineHeight={30} 
                                alignSelf={'center'} 
                                justifyContent={'center'}
                                color="#000000"
                        >
                            {item.title}
                        </Text>    
                    </Box>
                ))}
            </HStack>
        </> 
    )
}
const styles = StyleSheet.create ({
    container: {
        justifyContent:'space-around',
        paddingHorizontal: 24,
    },
    circle:{  
        width:30,
        height: 30,
        borderRadius:'50%',
    },
  })
export default WeekCalender
