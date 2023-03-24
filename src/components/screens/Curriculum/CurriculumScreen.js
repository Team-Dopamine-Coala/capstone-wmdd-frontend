import { VStack, Box } from "native-base"
import { useState, useEffect } from 'react'
import { fetchSkills } from '../../../utils/queries';
import { LinearGradient } from 'expo-linear-gradient';

import Loading from '../../layout/Loading'
import SkillsList from '../Curriculum/lists/SkillsList'

const CurriculumScreen = ({ navigation }) => {
  const [skills, setSkills] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      setIsLoading(true)
      fetchSkills().then(
          data => {
              setSkills(data)
              setIsLoading(false)
          }, 
          error => {
              throw error
          }
      )
  }, [])

  return (
    <LinearGradient colors={['#F4903F', '#F4903F', '#FC8634', '#FC8634', '#FC8634', '#F69B43', '#F69B43', '#F3AA6A', '#F3AA6A', '#F9D5B4']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} flex={1}>
      <VStack mt="60px" flex={1}>
        <Box bgColor="#ffffff" borderTopLeftRadius={20} borderTopRightRadius={20} flex={1}>
          { isLoading ? <Loading /> : <SkillsList skills={skills} navigation={navigation}/>}
        </Box>
      </VStack>

    </LinearGradient>


  )
}

export default CurriculumScreen