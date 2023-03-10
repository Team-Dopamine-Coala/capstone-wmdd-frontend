import { View, Button, VStack, Box } from "native-base"
import { useState } from 'react'

import Loading from '../../layout/Loading'
import SkillsList from '../Curriculum/lists/SkillsList'

const CurriculumScreen = ({ navigation }) => {

  return (
    <VStack pt="100px" pb={20} flex={1} bgColor="#F4903F">
      <Box bgColor="#ffffff" borderTopLeftRadius={20} borderTopRightRadius={20}>
        {/* { isLoading ? <Loading /> : <SkillsList />} */}
        <SkillsList />
      </Box>
    </VStack>
  )
}

export default CurriculumScreen