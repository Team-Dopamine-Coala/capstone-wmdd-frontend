import { View, Text, Image, FlatList, Box, VStack, Heading, AspectRatio, HStack } from "native-base"

const SkillItem = ({item}) => {

    return(
        <View>
            <Box width="185px" overflow="hidden" p={5}>
                <VStack>
                    <AspectRatio w="50%" ratio={2/2}>
                    <Image source={{uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"}} alt="image"/>
                    </AspectRatio>
                    <Text fontSize='md' bold pt={2}>{item.name}</Text>
                </VStack>
            </Box>
        </View>
    )
}

export default SkillItem