import React, { useRef, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Box, Text, View, VStack, Pressable, HStack, Icon } from 'native-base'
import Carousel from 'react-native-snap-carousel'
import SkillListItem from '../listItem/SkillListItem'
import { Dimensions } from 'react-native';

const SkillList = ({ navigation, evalskills, studentId, studentName, classId, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalEvalsIndex = evalskills.length - 1
  const windowWidth = Dimensions.get('window').width;
  let carouselRef = useRef(null)

  const handleCurrentIndex = (index) => {
    setCurrentIndex(index)
  }

  const goToNextSlide = () => {
    carouselRef.snapToNext()
  }

  const goToPrevSlide = () => {
    carouselRef.snapToPrev()
  }

  const goToFeedback = () => {
    navigation.navigate('Evaluation Individual Student Comment', {
      studentId: studentId,
      studentName: studentName,
      classId: classId,
      className: className
    })
  }

  return (
    <VStack mt={5}>
      <View px={4}>
        <Text mb={2} px={1} fontFamily="Lexend_400" fontSize={16}>Evaluation Progress</Text>
        <HStack>
          {evalskills.map((item, i) => (
            <Box key={i} flex={1} h="4px" borderRadius="2px" bgColor={i <= currentIndex ? '#FE7F2D' : '#FFECE0'} mx={1}></Box>
          ))}
        </HStack>
      </View>
      <Carousel
        ref={ref => carouselRef = ref}
        data={evalskills}
        windowSize={1}
        renderItem={({ item }) => (
          <SkillListItem evalskill={item} goToNextSlide={goToNextSlide} currentIndex={currentIndex} goToFeedback={goToFeedback} />
        )}
        sliderWidth={windowWidth}
        itemWidth={windowWidth - 20}
        onSnapToItem={(index) => handleCurrentIndex(index) }
      />
      
      <HStack px={4} pt={3}>
      {currentIndex > 0 && (
        <Pressable onPress={goToPrevSlide} flexDirection="row" alignItems="center">
          <Icon size={5} color="#FE7F2D" as={<Ionicons name='arrow-back' />} mr={1} />
          <Text fontFamily="Lexend_400" fontSize={14} color="#737373">Previous</Text>
        </Pressable>
      )}
      {/* {currentIndex == totalEvalsIndex  && (
        <Pressable onPress={() => {
          navigation.navigate('Evaluation Individual Student Comment', {
            studentId: studentId,
            studentName: studentName,
            classId: classId,
            className: className
          })
        }}>
          <Text fontFamily="Lexend_400" fontSize={14}>Add Feedback</Text>
        </Pressable>
      )} */}
      </HStack>
    </VStack>
  )
}

export default SkillList