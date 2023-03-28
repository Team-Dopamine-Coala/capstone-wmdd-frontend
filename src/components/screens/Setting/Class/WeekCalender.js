import { View, Text, HStack, Box } from 'native-base'
import React from 'react'
import { TouchableOpacity, StyleSheet, SafeAreaView } from "react-native"
import { useState, useEffect } from 'react'

const WeekCalender = ({weektitle}) => {
    const [whitebg, setWhitebg] = useState('hide')
    console.log(weektitle)


    const whitecircleHandler = () => {
        // if(weektitle == )
    }
  return (
    <HStack style={styles.container}>
        <Box style={styles.circle}>
            <Text className={`Monday ${whitebg}`} fontFamily="Lexend_400" fontSize={14} lineHeight={21} alignSelf={'center'} justifyItems={'center'}>M</Text>
        </Box>
        <Box style={styles.circle}>
            <Text className={`Tuesday ${whitebg}`} fontFamily="Lexend_400" fontSize={14} lineHeight={21} alignSelf={'center'}>T</Text>
        </Box>
        <Box style={styles.circle}>
            <Text className={`Wednesday ${whitebg}`} fontFamily="Lexend_400" fontSize={14} lineHeight={21} alignSelf={'center'}>W</Text>
        </Box>
        <Box style={styles.circle}>
            <Text className={`Thursday ${whitebg}`} fontFamily="Lexend_400" fontSize={14} lineHeight={21} alignSelf={'center'}>T</Text>
        </Box>
        <Box style={styles.circle}>
            <Text className={`Friday ${whitebg}`} fontFamily="Lexend_400" fontSize={14} lineHeight={21} alignSelf={'center'}>F</Text>
        </Box>
        <Box style={styles.circle}>
            <Text className={`Saturday ${whitebg}`} fontFamily="Lexend_400" fontSize={14} lineHeight={21} alignSelf={'center'}>S</Text>
        </Box>
        <Box style={styles.circle}>
            <Text className={`Sunday ${whitebg}`} fontFamily="Lexend_400" fontSize={14} lineHeight={21} alignSelf={'center'}>S</Text>
        </Box>
    </HStack>
  )
}
const styles = StyleSheet.create ({
    container: {
        alignSelf:'center',
    },
    circle:{
        backgroundColor: '#FFFFFF',
        width:30,
        height: 30,
        borderRadius:'50%',
    }
  })
export default WeekCalender
