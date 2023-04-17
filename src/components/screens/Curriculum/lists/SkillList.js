import { Text, VStack, Box, View, Pressable, ScrollView, Heading } from "native-base"
import { useEffect, useRef, useState } from "react"
import { Dimensions } from 'react-native'
import { fetchSkill } from '../../../../utils/queries';
import { LinearGradient } from 'expo-linear-gradient';
import RBSheet from "react-native-raw-bottom-sheet";

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

    const RBSheetRef = useRef()

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
        setSelectedId(id)
        setIsLoading(true)
        fetchSkill(id).then(
            data => {
                setSkill(data)
                setIsLoading(false)
                RBSheetRef.current?.open()
            },
            error => {
                throw error
            }
        )
      }

    return(
        <LinearGradient colors={['#F4903F', '#F4903F', '#FC8634', '#FC8634', '#FC8634', '#F69B43', '#F69B43', '#F3AA6A', '#F3AA6A', '#F9D5B4']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} flex={1}>
            <VStack pt="100px" flex={1} bgColor="#F4903F">
                <Box bgColor="#ffffff" borderTopLeftRadius={20} borderTopRightRadius={20}>
                    <ScrollView pl={5} pr={5} pt={2}>
                        {levelTitle.map((title, i) => (
                            <Box mt={5}>
                                <Heading fontFamily="Lexend_700" fontSize={20} >Level {title.group}</Heading>
                                <VStack>
                                    {title.groupedConn.map((skill, index) => (
                                        <Pressable key={skill._id} onPress={() => openSheet(skill._id)}>
                                            <SkillItemVertical skill={skill} />
                                        </Pressable>
                                    ))}
                                </VStack>
                            </Box>
                        ))}
                    </ScrollView>
                </Box>
                <RBSheet 
                    ref={RBSheetRef}
                    height={400}
                    animationType="fade"
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    customStyles={{
                        wrapper: {
                        backgroundColor: "rgba(0,0,0,.5)"
                        },
                        container: {
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30
                        },
                        draggableIcon: {
                        width: 75,
                        backgroundColor: "#9F9F9F"
                        }
                    }}
                >
                    <View style={{paddingVertical: 20}} mb={10}>
                        <SkillDetails skill={skill}/>    
                    </View>
                </RBSheet>
            </VStack>
        </LinearGradient>
    )
}

export default SkillList