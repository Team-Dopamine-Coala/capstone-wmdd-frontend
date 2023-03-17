import { VStack, Box, Heading, FlatList, ScrollView, Divider, View, Pressable, Text, Flex, Link } from "native-base"
import { useEffect, useRef, useState } from "react"
import { Dimensions } from 'react-native'
import BottomSheet from 'react-native-simple-bottom-sheet';

import SkillItem from '../listItems/SkillItem'
import SkillDetails from "../listItems/SkillDetails";

const SkillsList = ({ navigation, skills }) => {
    const panelRef = useRef(null);
    const [selectedId, setSelectedId] = useState("")

    const openSheet = (id) => {
        panelRef.current.togglePanel()
        setSelectedId(id)
        console.log(id)
      }
  
    return (
        <View>
            <ScrollView>
                <VStack pt="50px" pb={20}>
                    <Box pb={5}>
                        <Flex direction="row" justifyContent="space-between" alignItems="center">
                            <Heading pl={5}>Gymnastics 1 </Heading>
                            <Link 
                                pr={5} 
                                onPress={() => navigation.navigate('Skill List', {
                                    skills: skills.filter(skill => skill.level === 1 || skill.level === 2),
                                    name: 'Gymnastics 1'
                            })}>View All</Link>
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
                            <Heading pl={5}>Gymnastics 2 </Heading>
                            <Link 
                                pr={5} 
                                onPress={() => navigation.navigate('Skill List', {
                                    skills: skills.filter(skill => skill.level === 3 || skill.level === 4),
                                    name: 'Gymnastics 2'
                            })}>View All</Link>
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
                            <Heading pl={5}>Gymnastics 3 </Heading>
                            <Link 
                                pr={5} 
                                onPress={() => navigation.navigate('Skill List', {
                                    skills: skills.filter(skill => skill.level === 5),
                                    name: 'Gymnastics 3'
                            })}>View All</Link>
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
                        <Heading>All Curriculums</Heading>
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
                <SkillDetails skills={skills}/>
            </BottomSheet>
        </View>
    )
  }
  
  export default SkillsList