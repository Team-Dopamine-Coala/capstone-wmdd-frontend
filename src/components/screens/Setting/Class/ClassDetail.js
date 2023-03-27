import { Box,Title, Text, View } from 'native-base'
import React from 'react'

const ClassDetail = () => {
  return (
    <View>
      <Box>
        <Title>Class Name</Title>
        <Text>time</Text>
        <Text>Location</Text>
      </Box>
      <Box>
        <Title>Student List</Title>
      </Box>
    </View>
  )
}

export default ClassDetail

//カレンダー入れる
//入ってきた情報を出す
//カレンダー
//studentList出す(このclassを持っている全員のstudent list)