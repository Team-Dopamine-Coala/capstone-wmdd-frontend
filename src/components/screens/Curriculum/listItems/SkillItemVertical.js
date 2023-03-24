import { View, Text, Image, FlatList, Box, HStack, Heading, AspectRatio, Center, Pressable } from "native-base"


const SkillItemVertical = ({skill}) => {
    return(
        <View>
            <Box width="150px" m={3}>
                <HStack>
                    <AspectRatio w="100%" ratio={4/3}>
                        <Image source={{ uri: skill.photoUrl }} alt="place-holder image" borderRadius="15"/>
                    </AspectRatio>
                    <Text fontSize='sm' bold pt={2} ml={5} >{skill.name}</Text>
                </HStack>
            </Box>
        </View>
    )
}

export default SkillItemVertical