import { View, Text, Image, FlatList, Box, VStack, Heading, AspectRatio, HStack, Center, Pressable } from "native-base"


const SkillItem = ({item}) => {    
    return(
        <View>
            <Box width="185px" m={3} overflow="hidden" >
                <VStack>
                    <AspectRatio w="100%" ratio={2/2}>
                        <Image source={{uri: item.photoUrl}} alt="place-holder image" borderRadius="15"/>
                    </AspectRatio>
                    <Text fontSize='md' bold pt={2}>{item.name}</Text>
                </VStack>
            </Box>
        </View>
    )
}

export default SkillItem