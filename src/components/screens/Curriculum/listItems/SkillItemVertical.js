import { View, Text, Image, FlatList, Box, HStack, Heading, AspectRatio, Center, Pressable } from "native-base"


const SkillItemVertical = ({skill}) => {
    return(
        <View>
            <Box width="150px" mt={3}>
                <HStack>
                    <AspectRatio w="100%" ratio={16/9}>
                        <Image source={{ uri: skill.photoUrl }} alt="place-holder image" borderRadius="15"/>
                    </AspectRatio>
                    <Text fontFamily="Lexend_500" fontSize={14} pt={2} ml={4} >{skill.name}</Text>
                </HStack>
            </Box>
        </View>
    )
}

export default SkillItemVertical