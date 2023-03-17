import React, { useRef, useState } from 'react'
import { FlatList, Box, Text, View, Button, VStack, Pressable, HStack } from 'native-base'
import Carousel from 'react-native-snap-carousel'
import SkillListItem from '../listItem/SkillListItem'
import { Dimensions } from 'react-native';

const SkillList = ({ evalskills }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
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

  return (
    <VStack mt={5}>
      <View px={4}>
        <Text mb={2} fontWeight={700}>Evaluation Progress</Text>
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
          <SkillListItem evalskill={item} goToNextSlide={goToNextSlide} />
        )}
        sliderWidth={windowWidth}
        itemWidth={400}
        onSnapToItem={(index) => handleCurrentIndex(index) }
      />
      <Box px={4}>
        <Pressable onPress={goToPrevSlide}>
          <Text>Previous</Text>
        </Pressable>
      </Box>
    </VStack>
  )
}

export default SkillList