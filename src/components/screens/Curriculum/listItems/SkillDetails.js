import { Heading, Text, View, VStack, AspectRatio, Image, Box, Flex, HStack } from 'native-base'
// import { Video }from 'expo-av'
import { useRef, useState } from 'react'


const SkillDetails = ({skill}) => {

  const video = useRef(null);
  const [status, setStatus] = useState({});

    return (
        <VStack>
          {/* <Box height={200}>
          <Video
        ref={video}
        styles={{height:"1000px"}}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      /> */}
          {/* </Box> */}
      {/* <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View> */}
          <AspectRatio w="100%" ratio={16/9}>
            <Image source={{uri: "https://res.cloudinary.com/dp53wf7gb/image/upload/v1678314974/coala_completed_t24sd0.png"}} alt="place-holder image" borderRadius="15"/>
          </AspectRatio>
          <Heading size="sm" mt={5} >{skill.name}</Heading>
          <HStack>
            <Text pr={10}>{skill.class}</Text>
            <Text>Level {skill.level}</Text>
          </HStack>
          <Text mt={15}>{skill.description}</Text>
        </VStack>
    )
}

export default SkillDetails