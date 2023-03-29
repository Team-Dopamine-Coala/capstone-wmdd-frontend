import { VStack, Box, Heading, FlatList, ScrollView, Divider, View, Pressable, Text, Flex, Link, Button } from "native-base"
import { useEffect, useRef, useState } from "react"
import { Dimensions } from 'react-native'
import BottomSheet from 'react-native-simple-bottom-sheet';
import { fetchSkill } from '../../../../utils/queries';

import SkillItem from '../listItems/SkillItem'
import SkillDetails from "../listItems/SkillDetails";

const SkillsList = ({ navigation, skills }) => {
    const panelRef = useRef(null);
    const [selectedId, setSelectedId] = useState("")
    const [skill, setSkill] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const openSheet = (id) => {
        panelRef.current.togglePanel()
        setSelectedId(id)
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
  
    return (
        <View >
            <ScrollView>
                <VStack pt="50px" pb={20}>
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
            <BottomSheet 
                isOpen={false}
                sliderMinHeight={0}
                ref={ref => panelRef.current = ref}
                animationDuration={300}
                sliderMaxHeight={Dimensions.get('window').height * 0.9}
            >
                <View pb={10}>
                    <SkillDetails skill={skill}/>
                </View>
            </BottomSheet>
        </View>
    )
  }
  
  export default SkillsList