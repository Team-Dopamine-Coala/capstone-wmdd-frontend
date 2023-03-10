import { VStack, Box, Heading, FlatList, ScrollView } from "native-base"
import { useEffect, useState } from "react"

import { fetchSkills } from '../../../../utils/queries';
import SkillItem from '../listItems/SkillItem'

const SkillsList = ({ navigation }) => {
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

    useEffect(() => {
        console.log(skills)
    }, [skills])
  
    return (
    <ScrollView>
      <VStack pt="50px" pb={20}>
        <Box pb={10}>
            <Heading pl={5}>Gymnastics 1</Heading>
            <FlatList 
                horizontal
                data={skills.filter(skill => skill.level === 1)} renderItem={({ item }) => (
                <SkillItem item={item}/>
            )}    
            />
        </Box>
        <Box pb={10}>
            <Heading pl={5}>Gymnastics 2</Heading>
            <FlatList 
                horizontal
                data={skills.filter(skill => skill.level === 2)} renderItem={({ item }) => (
                <SkillItem item={item}/>
            )}    
            />
        </Box>
        <Box pb={10}>
            <Heading pl={5}>Gymnastics 3</Heading>
            <FlatList 
                horizontal
                data={skills.filter(skill => skill.level === 3)} renderItem={({ item }) => (
                <SkillItem item={item}/>
            )}    
            />
        </Box>
        <Box pb={10}>
            <Heading pl={5}>Level 4</Heading>
            <FlatList 
                horizontal
                data={skills.filter(skill => skill.level === 4)} renderItem={({ item }) => (
                <SkillItem item={item}/>
            )}    
            />
        </Box>
        <Box>
            <Heading pl={5}>Level 5</Heading>
            <FlatList 
                horizontal
                data={skills.filter(skill => skill.level === 5)} renderItem={({ item }) => (
                <SkillItem item={item}/>
            )}    
            />
        </Box>
      </VStack>
      </ScrollView>
    )
  }
  
  export default SkillsList