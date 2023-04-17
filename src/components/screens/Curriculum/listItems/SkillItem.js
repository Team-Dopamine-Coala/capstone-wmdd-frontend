import { View, Text, Image, FlatList, Box, VStack, Heading, AspectRatio, HStack, Center, Pressable } from "native-base"
import AnimatedEntrance from 'react-native-animated-entrance';


const SkillItem = ({item, order}) => {    
    return(
        <AnimatedEntrance
          axis={AnimatedEntrance.axis.horizontal}
          offset={20}
          duration={400}
          delay={400}
          order={order + 1}
        >
        <View>
            <Box width="185px" m={3} overflow="hidden" >
                <VStack>
                    <AspectRatio w="100%" ratio={2/2}>
                        <Image source={{uri: item.photoUrl}} alt="place-holder image" borderRadius="15"/>
                    </AspectRatio>
                    <Text fontFamily="Lexend_400" fontSize={15} bold pt={2}>{item.name}</Text>
                </VStack>
            </Box>
        </View>
        </AnimatedEntrance>
    )
}

export default SkillItem