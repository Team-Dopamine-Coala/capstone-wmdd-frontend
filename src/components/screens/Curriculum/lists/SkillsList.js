import { VStack, Box, Heading, FlatList, ScrollView, Divider, View, Pressable, Text, Flex, Link, Button } from "native-base"
import { useEffect, useRef, useState } from "react"
import { Dimensions } from 'react-native'
import { fetchSkill } from '../../../../utils/queries';
import RBSheet from "react-native-raw-bottom-sheet";

import SkillItem from '../listItems/SkillItem'
import SkillDetails from "../listItems/SkillDetails";
import StudentsSearch from "../../Students/myStudents/StudentsSearch";

const SkillsList = ({ navigation, skills }) => {
    const panelRef = useRef(null);
    const [selectedId, setSelectedId] = useState("")
    const [skill, setSkill] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const RBSheetRef = useRef()

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
  
    return (
        <View >
            <ScrollView>
                <VStack pb={20}>
                    <Box pt="20px" pl={5} pr={5} pb={5}>
                        <StudentsSearch />
                    </Box>
                    <Box pb={5}>
                        <Flex direction="row" justifyContent="space-between" alignItems="center">
                            <Heading pl={5} style={{
                                fontSize: 20,
                                fontFamily: 'Lexend_700'
                            }}>Gymnastics 1 </Heading>
                            <Link 
                                _text={{
                                    fontFamily:'Lexend_600',
                                    color: "#737373",
                                    fontSize:15
                                }}
                                pr={5} 
                                onPress={() => navigation.navigate('Skill List', {
                                    skills: skills.filter(skill => skill.level === 1 || skill.level === 2),
                                    name: 'Gymnastics 1'
                            })}>See All</Link>
                        </Flex>
                        <FlatList 
                            horizontal
                            data={skills.filter(skill => skill.level === 1 || skill.level === 2 )} renderItem={({ item }) => (
                            <Pressable 
                                onPress={() => openSheet(item._id)}
                            >
                                <SkillItem item={item}/>
                            </Pressable>
                            )}    
                        />
                    </Box>
                     <Box pb={5}>
                        <Flex direction="row" justifyContent="space-between" alignItems="center">
                            <Heading pl={5} style={{
                                fontSize: 20,
                                fontFamily: 'Lexend_700'
                            }}>Gymnastics 2 </Heading>
                            <Link 
                                _text={{
                                    fontFamily:'Lexend_600',
                                    color: "#737373",
                                    fontSize:15
                                }}
                                pr={5} 
                                onPress={() => navigation.navigate('Skill List', {
                                    skills: skills.filter(skill => skill.level === 3 || skill.level === 4),
                                    name: 'Gymnastics 2'
                            })}>See All</Link>
                        </Flex>
                        <FlatList 
                            horizontal
                            data={skills.filter(skill => skill.level === 3 || skill.level === 4)} renderItem={({ item }) => (
                            <Pressable onPress={() => openSheet(item._id)}>
                            <SkillItem item={item} /></Pressable>
                            )}    
                        />
                    </Box>
                    <Box pb={10}>
                        <Flex direction="row" justifyContent="space-between" alignItems="center">
                            <Heading pl={5} style={{
                                fontSize: 20,
                                fontFamily: 'Lexend_700'
                            }} >Gymnastics 3 </Heading>
                            <Link
                                _text={{
                                    fontFamily:'Lexend_600',
                                    color: "#737373",
                                    fontSize:15
                                }}
                                pr={5} 
                                onPress={() => navigation.navigate('Skill List', {
                                    skills: skills.filter(skill => skill.level === 5),
                                    name: 'Gymnastics 3'
                            })}>See All</Link>
                        </Flex>
                        <FlatList 
                            horizontal
                            data={skills.filter(skill => skill.level === 5)} renderItem={({ item }) => (
                            <Pressable onPress={() => openSheet(item._id)}>
                            <SkillItem item={item} /></Pressable>
                            )}    
                        />
                    </Box>
                    <Divider thickness="4"/>
                    <Box p={5}>
                        <Heading style={{
                                fontSize: 20,
                                fontFamily: 'Lexend_700'
                            }} >All Curriculums</Heading>
                    </Box>
                </VStack>
            </ScrollView>
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
        </View>
    )
  }
  
  export default SkillsList