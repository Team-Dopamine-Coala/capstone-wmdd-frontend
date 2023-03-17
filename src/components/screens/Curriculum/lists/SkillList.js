import { Text, VStack, Box, View, Pressable, ScrollView, Heading } from "native-base"
import { useEffect, useRef, useState } from "react"
import BottomSheet from 'react-native-simple-bottom-sheet';
import { Dimensions } from 'react-native'
import { fetchSkill } from '../../../../utils/queries';

import SkillItemVertical from "../listItems/SkillItemVertical"
import SkillDetails from "../listItems/SkillDetails";

const SkillList = ({navigation, route}) => {
    const { skills, title } = route.params
    const [sortedSkills, setSortedSkills] = useState([])
    const [levelTitle, setLevelTitle] = useState([])
    const panelRef = useRef(null);
    const [selectedId, setSelectedId] = useState("")
    const [skill, setSkill] = useState([])
    const [isLoading, setIsLoading] = useState(true)

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

     const openSheet = (id) => {
        panelRef.current.togglePanel()
        setSelectedId(id)
        // console.log(id)
        setIsLoading(true)
        fetchSkill(id).then(
            data => {
                setSkill(data)
                setIsLoading(false)
            },
            error => {
                throw error
            }
        )
      }

    return(
        <VStack pt="100px" pb={20} flex={1} bgColor="#F4903F">
            <Box bgColor="#ffffff" borderTopLeftRadius={20} borderTopRightRadius={20}>
                <ScrollView pl={5} pr={5} pt={2}>
                    {levelTitle.map((title, i) => (
                        <Box mt={5}>
                            <Heading>Level {title.group}</Heading>
                            <VStack>
                                {title.groupedConn.map((skill, index) => (
                                    <Pressable onPress={() => openSheet(skill._id)} key={skill._id}>
                                        <SkillItemVertical skills={skill}/>
                                    </Pressable>
                                ))}
                            </VStack>
                        </Box>
                    ))}
                </ScrollView>
            </Box>
            <BottomSheet 
                isOpen={false}
                sliderMinHeight={0}
                ref={ref => panelRef.current = ref}
                animationDuration={300}
                sliderMaxHeight={Dimensions.get('window').height * 0.9}
            >
                <View style={{paddingVertical: 20}} pb={20} mb={10}>
                    <SkillDetails skill={skill}/>    
                </View>
            </BottomSheet>
        </VStack>
    )
}

export default SkillList