import { View, Text, Image, FlatList, Box, VStack, Heading, AspectRatio, HStack, Center } from "native-base"

const SkillItem = ({item}) => {

    return(
        <View>
            <Box width="185px" m={3} overflow="hidden" >
                <VStack>
                    <AspectRatio w="100%" ratio={2/2}>
                    <Image source={{uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"}} alt="place-holder image" borderRadius="15"/>
                    </AspectRatio>
                    <Center>
                        <Text fontSize='md' bold pt={2}>{item.name}</Text>
                    </Center>
                </VStack>
            </Box>
        </View>
    )
}

export default SkillItem