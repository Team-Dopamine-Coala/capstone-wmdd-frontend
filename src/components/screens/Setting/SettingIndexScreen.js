import {useContext} from 'react'
import { useRoute } from '@react-navigation/native';
import {Box,Text, VStack, View, Image} from 'native-base'
import { SafeAreaView, TouchableOpacity, StyleSheet  } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../../context/AuthContext'

const SettingIndexScreen = ({navigation,route}) => {

  const { userID, userFirstname, userLastname, userEmail, userPhoto, userToken } = route.params;
  const {logout} = useContext(AuthContext)
    // console.log('インデックスのデータ',userFirstname,userLastname,userEmail,userPhoto,userID)
    // console.log('これ',userToken, userPhoto)

  return (
    <LinearGradient colors={['#F4903F', '#F4903F', '#FC8634', '#FC8634', '#FC8634', '#F69B43', '#F69B43', '#F3AA6A', '#F3AA6A', '#F9D5B4']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} flex={1}>  
      <SafeAreaView>
          <View style={styles.background}>
            <Box style={styles.imgbox}>
              <Image  style={{ width: 82, height: 82, borderRadius: 149, borderColor: "#FDFDFD", borderWidth: 3 }}
                      source={{ uri: `${userPhoto}`}}
                      resizeMode='contain'
                      alt='user img'
                      />
            </Box>      
          <Box style={styles.userbox}>
            <Text style={styles.username} fontFamily="Lexend_600">{userFirstname}{userLastname}</Text>
            <Text style={styles.useremail} fontFamily="Lexend_400">{userEmail}</Text>
          </Box>
              <VStack style={styles.sectionbox} shadow={5}>
                  <TouchableOpacity onPress={() => { navigation.navigate('Class Page',{userID:userID, userToken:userToken})
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
    </LinearGradient>
  )
}
const styles = StyleSheet.create ({
    background: {
      backgroundColor: '#FDFDFD',
      paddingVertical:24,
      paddingHorizontal: 20,
      borderTopRightRadius:28,
      borderTopLeftRadius:28,
      marginTop: 63,
      height: '100%',
      position: 'relative',
    },
    imgbox:{
      // width:88,
      // height: 88,
      alignItems: 'center',
    justifyContent: 'center',
      position:'absolute',
      top: -40,
    },
    userbox: {
      alignItems: 'center',
      marginBottom: 36,
    },
    username:{
      color: '#212427',
      fontSize: 24,
      lineHeight: 30,
    },
    useremail:{
      color: '#212427',
      fontSize: 16,
      lineHeight: 20,
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

// justifyContent: 'center',
//       alignItems: 'center',