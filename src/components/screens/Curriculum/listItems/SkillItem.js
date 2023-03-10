import { View, Text, Image, FlatList, Box, VStack, Heading, AspectRatio, HStack, Center, Pressable } from "native-base"

import { useState, useRef } from "react"

const SkillItem = ({item}) => {

    return(
        <View>
                <Box width="185px" m={3} overflow="hidden" >
                    <VStack>
                        <AspectRatio w="100%" ratio={2/2}>
                        <Image source={{uri: "https://res.cloudinary.com/dp53wf7gb/image/upload/v1678314974/coala_completed_t24sd0.png"}} alt="place-holder image" borderRadius="15"/>
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