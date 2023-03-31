import { Heading, Text, View, VStack, AspectRatio, Image, Box, Flex, HStack, Button } from 'native-base'
import { Video } from 'expo-av'
import { useRef, useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'


const SkillDetails = ({skill}) => {

  const video = useRef(null);
  const [status, setStatus] = useState({});

    return (
      <View>
        <VStack>
          <View style={styles.container}>
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: skill.videoUrl,
            }}
            useNativeControls
            resizeMode="contain"
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />
        </View>
          <Heading fontFamily="Lexend_700" size="sm" mt={4} >{skill.name}</Heading>
          <HStack>
            <Text fontFamily="Lexend_400" pr={10}>{skill.class}</Text>
            <Text fontFamily="Lexend_400" >Level {skill.level}</Text>
          </HStack>
          <Text fontFamily="Lexend_400" mt={15}>{skill.description}</Text>
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
    height: 200,
    borderRadius: 15 
  }
})

export default SkillDetails