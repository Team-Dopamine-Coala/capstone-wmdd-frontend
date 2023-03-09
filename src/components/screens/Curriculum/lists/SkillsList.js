import { View, Button, VStack, Box, Text, FlatList } from "native-base"
import { useEffect, useState } from "react"

import { fetchSkills } from '../../../../utils/queries';

const SkillsList = ({ navigation }) => {
    const [skills, setSkills] = useState(null)
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

    console.log(skills.map(skill => skill.name))
  
    return (
      <VStack pt="50px" pb={20} >
        {skills.map((skill) => {
            return <Text key={skill.id}>{skill.name}</Text>
        })}
      </VStack>
    )
  }
  
  export default SkillsList