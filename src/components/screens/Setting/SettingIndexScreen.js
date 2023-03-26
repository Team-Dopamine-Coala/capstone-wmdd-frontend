import {useContext} from 'react'
import {Box, Title, Text, VStack, View} from 'native-base'
import { SafeAreaView, TouchableOpacity, StyleSheet  } from 'react-native'
import { AuthContext } from '../../context/AuthContext'

// const SettingIndexScreen = ({navigation,userFirstname,userLastname,userEmail,userPhoto,userID}) => {
const SettingIndexScreen = ({navigation}) => {
    
    const {logout} = useContext(AuthContext)

    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.background}>  
        {/* <Image style={{ width: 200, height: 50 }}
              source={require(`${userPhoto}`)}
              resizeMode='contain'/>  */}
        {/* <Box>
          <Title>{userFirstname}{userLastname}</Title>
          <Text>{userEmail}</Text>
        </Box> */}
            <VStack style={styles.sectionbox} shadow={5}>
                <TouchableOpacity onPress={() => { navigation.navigate('Class Page')
                                    }}
                > 
                <Box>
                    <Text fontFamily="Lexend_600">My Classes</Text>
                    <Text fontFamily="Lexend_300">Find your classes' details here</Text>
                </Box>                                    
                </TouchableOpacity > 
            </VStack>
            <VStack style={styles.sectionbox} shadow={5}>
                <Box>
                    <Text fontFamily="Lexend_600">Notification</Text>
                    <Text fontFamily="Lexend_300">Make sure you don't miss anything!</Text>                
                </Box>
            </VStack>
            <VStack style={styles.sectionbox} shadow={5}>
                <Box>
                    <Text fontFamily="Lexend_600">Help</Text>
                    <Text fontFamily="Lexend_300">Contact our help centre</Text>                
                </Box>
            </VStack>
            <VStack style={styles.sectionbox} shadow={5}>
                <Box>
                    <Text fontFamily="Lexend_600">About Us</Text>
                    <Text fontFamily="Lexend_300">More about Coala and our team</Text>
                </Box>
            </VStack>
            <VStack style={styles.sectionbox} shadow={5}>
                <TouchableOpacity onPress={logout}>
                    <Text style={styles.content} fontFamily="Lexend_600">Log out</Text>
                </TouchableOpacity >                 
            </VStack>
        </View> 
    </SafeAreaView>
  )
}
const styles = StyleSheet.create ({
    container: {
      backgroundColor: 'orange',
    },
    background: {
      backgroundColor: '#FDFDFD',
      paddingVertical:24,
      paddingHorizontal: 20,
      borderTopRightRadius:28,
      borderTopLeftRadius:28,
      
    },
    scrollarea: {
      marginTop: 24,
    },
    sectionbox: {
       backgroundColor: '#FDFDFD',
       borderRadius: '12',
       marginHorizontal: 2,
       marginBottom: 20,
       paddingRight: 24,
       paddingLeft: 16,
      paddingVertical: 14,
    }
  })
export default SettingIndexScreen
