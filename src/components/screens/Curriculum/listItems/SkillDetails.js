import { Heading, Text, View, VStack, AspectRatio, Image, Box, Flex, HStack, Button } from 'native-base'
import { Video } from 'expo-av'
import { useRef, useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'


const SkillDetails = ({skill}) => {

  const video = useRef(null);
  const [status, setStatus] = useState({});
  const url = "https://res.cloudinary.com/dp53wf7gb/video/upload/v1679014132/bum-bounce_rwvymh.mp4"
  
  // console.log(skill.videoUrl)
  console.log(url)

  // useEffect(() => {
  //   video.current.loadAsync({
  //     uri: url
  //   })
  // }, [])

    return (
      <View>
        <VStack>
          <View style={styles.container}>
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: url,
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />
        </View>
          <Heading size="sm" mt={5} >{skill.name}</Heading>
          <HStack>
            <Text pr={10}>{skill.class}</Text>
            <Text>Level {skill.level}</Text>
          </HStack>
          <Text mt={15}>{skill.description}</Text>
        </VStack>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center'
  },
  video: {
    alignSelf: "center",
    width: 350,
    height: 200
  }
})

export default SkillDetails