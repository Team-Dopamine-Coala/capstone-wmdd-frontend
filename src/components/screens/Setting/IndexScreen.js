import { View, Img, Box, Text, Title } from 'native-base'
import { TouchableOpacity, SafeAreaView} from "react-native"

const indexScreen = ({navigation}) => {
  return (
    <SafeAreaView>  
        <Img></Img>
        <Box>
          <Title>User name</Title>
          <Text>Email addres</Text>
        </Box>

        <TouchableOpacity onPress={() => { navigation.navigate('My Classes')
                            }}
        >                                    
          <Text>My Classes</Text>
          <Text>Find your classes' details here</Text>
        </TouchableOpacity >

        <Box>
          <Text>Notification</Text>
          <Text>Make sure you don't miss anything!</Text>
        </Box>
        <Box>
          <Text>Help</Text>
          <Text>Contact our help centre</Text>
        </Box>
        <Box>
          <Text>About Us</Text>
          <Text>More about Coala and our team</Text>
        </Box>
        <TouchableOpacity onPress={() => { 
                            }}
        >
            <Text>Log out</Text>
        </TouchableOpacity >
    </SafeAreaView>
  )
}

export default indexScreen
