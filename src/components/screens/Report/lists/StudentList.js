import { useState, useEffect } from 'react'
import { Box, FlatList, Text } from "native-base"
import StudentListItem from '../listItem/StudentListItem'

const StudentList = ({ students, selectedClass, openDialog }) => {

  return (
    <FlatList
      data={students}
      renderItem={({ item }) => (
        <StudentListItem item={item} selectedClass={selectedClass} openDialog={openDialog} />
      )}
      keyExtractor={item => item._id}
      showsHorizontalScrollIndicator={false}
      nestedScrollEnabled
    />
  )
}

export default StudentList