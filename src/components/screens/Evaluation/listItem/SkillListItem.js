import React, { useEffect, useState } from 'react'
import { View, Text, Box, VStack, HStack, Pressable, Image } from 'native-base'
import { getSkillById } from '../../../../utils/queries'
import Loading from '../../../layout/Loading'
import { AWS_BACKEND_BASE_URL } from '../../../../utils/static'
AWS_BACKEND_BASE_URL

const SkillListItem = ({ evalskill, goToNextSlide }) => {
  const [skillName, setSkillName] = useState('Loading')
  const [skillRating, setSkillRating] = useState(evalskill.rating)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getSkillById(evalskill.skillId).then(
      data => {
        setSkillName(data.name)
        setIsLoading(false)
      },
      error => {
        throw error
      }
    )
  }, [evalskill])

  const updateEvalRating = (rating) => {
    fetch(`${AWS_BACKEND_BASE_URL}/api/evaluation/${evalskill._id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        rating: rating,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((response) => {
      setSkillRating(rating)
      goToNextSlide()
    })
  }

  return (
    <View px={2} pt={5} pb={2} minHeight="300px">
    {isLoading ?
      <Loading />
    :
    <>
      <Box bgColor="#FFECE0" borderRadius="12px" px={4} py={4}>
        <Text fontWeight="600" fontSize="24px" textAlign="center">{skillName}</Text>
      </Box>
      <VStack mt={7}>
        <Pressable onPress={() => updateEvalRating(1)}>
          <HStack shadow={5} my={2} px="28px" py="14px" borderWidth="1px" borderColor="#cccccc" bgColor={skillRating == 1 ? '#EC6C56' : '#FFFFFF'} borderRadius="12px" alignItems="center" justifyContent="space-between">
            <Text fontSize="25px" fontWeight="600" color={skillRating == 1 ? '#FFFFFF' : '#EC6C56'}>Not Started</Text>
            <Image source={{uri: "https://res.cloudinary.com/dp53wf7gb/image/upload/v1679070455/coalaNotStarted_ea6fcm.png"}} alt="Not Started" size="xs" />
          </HStack>
        </Pressable>
        
        <Pressable onPress={() => updateEvalRating(2)}>
          <HStack shadow={5} my={2} px="28px" py="14px" borderWidth="1px" borderColor="#cccccc" bgColor={skillRating == 2 ? '#EFBB35' : '#FFFFFF'} borderRadius="12px" alignItems="center" justifyContent="space-between">
            <Text fontSize="25px" fontWeight="600" color={skillRating == 2 ? '#FFFFFF' : '#EFBB35'}>Ongoing</Text>
            <Image source={{uri: "https://res.cloudinary.com/dp53wf7gb/image/upload/v1679070455/coalaOngoing_ii4smp.png"}} alt="Ongoing" size="xs" />
          </HStack>
        </Pressable>
        
        <Pressable onPress={() => updateEvalRating(3)}>
          <HStack shadow={5} my={2} px="28px" py="14px" borderWidth="1px" borderColor="#cccccc" bgColor={skillRating == 3 ? '#4E9E8B' : '#FFFFFF'} borderRadius="12px" alignItems="center" justifyContent="space-between">
            <Text fontSize="25px" fontWeight="600" color={skillRating == 3 ? '#FFFFFF' : '#4E9E8B'}>Completed</Text>
            <Image source={{uri: "https://res.cloudinary.com/dp53wf7gb/image/upload/v1679070455/coalaCompleted_vdres0.png"}} alt="Completed" size="xs" />
          </HStack>
        </Pressable>
      </VStack>
    </>
    }
    </View>
  )
}

export default SkillListItem