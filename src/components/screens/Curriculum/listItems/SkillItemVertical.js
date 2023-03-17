import { View, Text, Image, FlatList, Box, HStack, Heading, AspectRatio, Center, Pressable } from "native-base"


const SkillItemVertical = ({skills}) => {
    console.log(skills)
    return(
        <View>
            <Box width="150px" m={3}>
                <HStack>
                    <AspectRatio w="100%" ratio={4/3}>
                        <Image source={{uri: "https://res.cloudinary.com/dp53wf7gb/image/upload/v1678314974/coala_completed_t24sd0.png"}} alt="place-holder image" borderRadius="15"/>
                    </AspectRatio>
                    <Text fontSize='sm' bold pt={2} ml={5} >{skills.name}</Text>
                </HStack>
            </Box>
        </View>
    )
}

export default SkillItemVertical