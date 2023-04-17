import { useEffect, useState } from "react"
import { Box, FlatList, Heading, ScrollView, Text } from "native-base"
import ClassListItem from "../listItem/ClassListItem"

const ClassList = ({ classes, navigation, openSheet, clickedClass }) => {
  const [sundayClasses, setSundayClasses] = useState([])
  const [mondayClasses, setMondayClasses] = useState([])
  const [tuesdayClasses, setTuesdayClasses] = useState([])
  const [wednesdayClasses, setWednesdayClasses] = useState([])
  const [thursdayClasses, setThursdayClasses] = useState([])
  const [fridayClasses, setFridayClasses] = useState([])
  const [saturdayClasses, setSaturdayClasses] = useState([])

  useEffect(() => {
    setSundayClasses(classes.filter(classItem => new Date(classItem.startTime).getDay() == 0))
    setMondayClasses(classes.filter(classItem => new Date(classItem.startTime).getDay() == 1))
    setTuesdayClasses(classes.filter(classItem => new Date(classItem.startTime).getDay() == 2))
    setWednesdayClasses(classes.filter(classItem => new Date(classItem.startTime).getDay() == 3))
    setThursdayClasses(classes.filter(classItem => new Date(classItem.startTime).getDay() == 4))
    setFridayClasses(classes.filter(classItem => new Date(classItem.startTime).getDay() == 5))
    setSaturdayClasses(classes.filter(classItem => new Date(classItem.startTime).getDay() == 6))
  }, [classes])

  return (
    <ScrollView>
      {sundayClasses.length > 0 && (
      <FlatList
        data={sundayClasses}
        ListHeaderComponent={() => <Heading mx="20px" fontFamily="Lexend_500" fontSize={16} lineHeight="24">Sunday</Heading>}
        renderItem={({ item, index }) => (
          <ClassListItem item={item} navigation={navigation} openSheet={openSheet} clickedClass={clickedClass} order={index} />
        )}
        keyExtractor={item => item._id}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        style={{ marginBottom: 20 }}
      />
      )}
      {mondayClasses.length > 0 && (
      <FlatList
        data={mondayClasses}
        ListHeaderComponent={() => <Heading mx="20px" fontFamily="Lexend_500" fontSize={16} lineHeight="24">Monday</Heading>}
        renderItem={({ item, index }) => (
          <ClassListItem item={item} navigation={navigation} openSheet={openSheet} clickedClass={clickedClass} order={index} />
        )}
        keyExtractor={item => item._id}
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 20 }}
      />
      )}
      {tuesdayClasses.length > 0 && (
      <FlatList
        data={tuesdayClasses}
        ListHeaderComponent={() => <Heading mx="20px" fontFamily="Lexend_500" fontSize={16} lineHeight="24">Tuesday</Heading>}
        renderItem={({ item, index }) => (
          <ClassListItem item={item} navigation={navigation} openSheet={openSheet} clickedClass={clickedClass} order={index} />
        )}
        keyExtractor={item => item._id}
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 20 }}
      />
      )}
      {wednesdayClasses.length > 0 && (
      <FlatList
        data={wednesdayClasses}
        ListHeaderComponent={() => <Heading mx="20px" fontFamily="Lexend_500" fontSize={16} lineHeight="24">Wednesday</Heading>}
        renderItem={({ item, index }) => (
          <ClassListItem item={item} navigation={navigation} openSheet={openSheet} clickedClass={clickedClass} order={index} />
        )}
        keyExtractor={item => item._id}
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 20 }}
      />
      )}
      {thursdayClasses.length > 0 && (
      <FlatList
        data={thursdayClasses}
        ListHeaderComponent={() => <Heading mx="20px" fontFamily="Lexend_500" fontSize={16} lineHeight="24">Thursday</Heading>}
        renderItem={({ item, index }) => (
          <ClassListItem item={item} navigation={navigation} openSheet={openSheet} clickedClass={clickedClass} order={index} />
        )}
        keyExtractor={item => item._id}
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 20 }}
      />
      )}
      {fridayClasses.length > 0 && (
      <FlatList
        data={fridayClasses}
        ListHeaderComponent={() => <Heading mx="20px" fontFamily="Lexend_500" fontSize={16} lineHeight="24">Friday</Heading>}
        renderItem={({ item, index }) => (
          <ClassListItem item={item} navigation={navigation} openSheet={openSheet} clickedClass={clickedClass} order={index} />
        )}
        keyExtractor={item => item._id}
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 20 }}
      />
      )}
      {saturdayClasses.length > 0 && (
      <FlatList
        data={saturdayClasses}
        ListHeaderComponent={() => <Heading mx="20px" fontFamily="Lexend_500" fontSize={16} lineHeight="24">Saturday</Heading>}
        renderItem={({ item, index }) => (
          <ClassListItem item={item} navigation={navigation} openSheet={openSheet} clickedClass={clickedClass} order={index} />
        )}
        keyExtractor={item => item._id}
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 20 }}
      />
      )}
    </ScrollView>
  )
}

export default ClassList