import { VStack, Box } from "native-base"
import { useState, useEffect } from 'react'
import { fetchSkills } from '../../../utils/queries';

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

  // useEffect(() => {
  //     console.log(skills)
  // }, [skills])

  return (
    <>
      <VStack pt="100px" pb={20} flex={1} bgColor="#F4903F">
        <Box bgColor="#ffffff" borderTopLeftRadius={20} borderTopRightRadius={20}>
          { isLoading ? <Loading /> : <SkillsList skills={skills} navigation={navigation}/>}
        </Box>
      </VStack>

    </>


  )
}

export default CurriculumScreen