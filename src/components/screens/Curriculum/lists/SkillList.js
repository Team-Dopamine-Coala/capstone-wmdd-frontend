import { Text, VStack, Box, FlatList, Pressable, ScrollView, Heading } from "native-base"
import { useEffect, useRef, useState } from "react"

import SkillItemVertical from "../listItems/SkillItemVertical"

const SkillList = ({navigation, route}) => {

    const { skills, title } = route.params
    const [sortedSkills, setSortedSkills] = useState([])
    const [levelTitle, setLevelTitle] = useState([])
    const panelRef = useRef(null);
    const [selectedId, setSelectedId] = useState("")

    const openSheet = (id) => {
        panelRef.current.togglePanel()
        setSelectedId(id)
        console.log(id)
      }

    useEffect(() => {
        sorting()
        displayTitle()
    },[])

    const sorting = () => {
        skills.sort((a,b) => {
            if (a.level < b.level){
                return -1
            } else if (a.level > b.level){
                return 1
            }
            return 0 
        })
        setSortedSkills(skills)
    }

    const displayTitle = () => {
        const level = skills.reduce((c,d) => {
            let group = d.level

            if(!c[group]) c[group] = {group, groupedConn: [d]}
                else c[group].groupedConn.push(d);
                return c
        }, {})
        setLevelTitle(Object.values(level))
    }

    console.log(skills.map((skill) => skill.level))
    console.log(levelTitle)

    return(
        <VStack pt="100px" pb={20} flex={1} bgColor="#F4903F">
            <Box bgColor="#ffffff" borderTopLeftRadius={20} borderTopRightRadius={20}>
                <ScrollView pl={5} pr={5} pt={2}>
                    {levelTitle.map((title, i) => (
                        <Box mt={5}>
                            <Heading>Level {title.group}</Heading>
                            <VStack>
                                {title.groupedConn.map((skill, index) => (
                                    <Pressable>
                                        <SkillItemVertical skills={skill}/>
                                    </Pressable>
                                ))}
                            </VStack>
                        </Box>
                    ))}
                </ScrollView>

                {/* <FlatList 
                    data={skills.filter(skill => skill.level === 1 || skill.level === 2 )} renderItem={({ item }) => (

                    )}    
                /> */}
            </Box>
        </VStack>
    )
}

export default SkillList