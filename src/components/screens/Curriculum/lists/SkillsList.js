import { VStack, Box, Heading, FlatList, ScrollView, Divider, View, Pressable } from "native-base"
import { useRef, useState } from "react"

import SkillItem from '../listItems/SkillItem'
import SkillDetails from "../listItems/SkillDetails";
import BottomSheet from 'react-native-simple-bottom-sheet';

const SkillsList = ({ navigation, skills }) => {
    const panelRef = useRef(null);
    const [skillId, setSkillId] = useState(null)

    const openBottomSheet = (skill) => {
        panelRef.current.togglePanel()
        setSkillId(skill.id)
        console.log(skillId);
    }
  
    return (
        <View>
            <ScrollView>
                <VStack pt="50px" pb={20}>
                    <Box pb={5}>
                        <Heading pl={5}>Gymnastics 1</Heading>
                        <FlatList 
                            horizontal
                            data={skills.filter(skill => skill.level === 1 || skill.level === 2 )} renderItem={({ item }) => (
                            <Pressable onPress={() => panelRef.current.togglePanel()}>
                            <SkillItem item={item} func={panelRef}/></Pressable>
                            )}    
                        />
                    </Box>
                     <Box pb={5}>
                        <Heading pl={5}>Gymnastics 2</Heading>
                        <FlatList 
                            horizontal
                            data={skills.filter(skill => skill.level === 3 || skill.level === 4)} renderItem={({ item }) => (
                            <Pressable onPress={() => panelRef.current.togglePanel()}>
                            <SkillItem item={item} func={panelRef}/></Pressable>
                            )}    
                        />
                    </Box>
                    <Box pb={10}>
                        <Heading pl={5}>Gymnastics 3</Heading>
                        <FlatList 
                            horizontal
                            data={skills.filter(skill => skill.level === 5)} renderItem={({ item }) => (
                            <Pressable onPress={() => panelRef.current.togglePanel()}>
                            <SkillItem item={item} func={panelRef}/></Pressable>
                            )}    
                        />
                    </Box>
                    <Divider thickness="4"/>
                    <Box p={5}>
                        <Heading>All Curriculums</Heading>
                    </Box>
                </VStack>
            </ScrollView>
            <BottomSheet sliderMinHeight={0} ref={ref => panelRef.current = ref}>
                <SkillDetails />
            </BottomSheet>
      </View>
    )
  }
  
  export default SkillsList