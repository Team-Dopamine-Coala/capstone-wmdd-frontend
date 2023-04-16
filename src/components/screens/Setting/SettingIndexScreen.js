import { useContext } from 'react'
import { useRoute } from '@react-navigation/native';
import { Box,Text, VStack, View, Image, HStack } from 'native-base'
import { SafeAreaView, TouchableOpacity, StyleSheet  } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { AuthContext } from '../../context/AuthContext'

import Class from '../../svg/SettingIcons/Class'
import Notification from '../../svg/SettingIcons/Notification'
import QuestionMark from '../../svg/SettingIcons/QuestionMark'
import Information from '../../svg/SettingIcons/Information'
import SignOut from '../../svg/SettingIcons/SignOut'
import RightChevron from '../../svg/SettingIcons/RightChevron'

const SettingIndexScreen = ({navigation,route}) => {

  const { userID, userFirstname, userLastname, userEmail, userPhoto, userToken } = route.params;
  const {logout} = useContext(AuthContext)

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
            <Text style={styles.username} fontFamily="Lexend_600">{userFirstname} {userLastname}</Text>
            <Text style={styles.useremail} fontFamily="Lexend_400">{userEmail}</Text>
          </Box>
              
          <TouchableOpacity onPress={() => { navigation.navigate('Class Page',{userID:userID, userToken:userToken})
                              }}
          >
            <HStack style={styles.sectionbox} shadow={5}>
              <HStack style={styles.lefticontitle}>
                <Class />
                <VStack style={styles.title}>
                  <Text fontSize={16} fontFamily="Lexend_600">My Classes</Text>
                  <Text fontSize={14} fontFamily="Lexend_300">Find your classes' details here</Text>   
                </VStack>                                    
              </HStack>
              <RightChevron />
            </HStack>
          </TouchableOpacity > 
              
          <HStack style={styles.sectionbox} shadow={5}>
            <HStack style={styles.lefticontitle}>
              <Notification />
              <VStack style={styles.title}>
                <Text fontSize={16} fontFamily="Lexend_600">Notification</Text>
                <Text fontSize={14} fontFamily="Lexend_300">Make sure you don't miss anything!</Text>              
              </VStack>
            </HStack>
            <RightChevron />
          </HStack>

          <HStack style={styles.sectionbox} shadow={5}>
            <HStack style={styles.lefticontitle}>
              <QuestionMark />
              <VStack style={styles.title}>
                <Text fontSize={16} fontFamily="Lexend_600">Help</Text>
                <Text fontSize={14} fontFamily="Lexend_300">Contact our help centre</Text> 
              </VStack>
            </HStack>
            <RightChevron />
          </HStack>

          <VStack style={styles.sectionbox} shadow={5}>
            <HStack style={styles.lefticontitle}>
              <Information />
              <VStack style={styles.title}>
                <Text fontSize={16} fontFamily="Lexend_600">About Us</Text>
                <Text fontSize={14} fontFamily="Lexend_300">More about Coala and our team</Text>
              </VStack>
            </HStack>
            <RightChevron />
          </VStack>
          
          <TouchableOpacity onPress={logout}>
            <HStack style={styles.sectionbox} shadow={5}>
              <HStack style={styles.lefticontitle}>
                <SignOut />
                <Text fontSize={16} style={styles.title} fontFamily="Lexend_600">Log out</Text>            
              </HStack>
              <RightChevron />
            </HStack>                
          </TouchableOpacity >                           
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
      marginTop: 100,
      height: '100%',
      position: 'relative',
    },
    imgbox:{
      alignSelf: 'center',
      position:'absolute',
      top: -40,
    },
    userbox: {
      alignItems: 'center',
      marginBottom: 36,
      marginTop: 18,
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
      borderRadius: 12,
      marginHorizontal: 2,
      marginBottom: 20,
      paddingHorizontal: 16,
      paddingVertical: 14,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',
    },
    lefticontitle:{
      flexDirection: 'row',
      alignItems:'center',
    },
    title:{
      marginLeft: 16,
    }
  })
export default SettingIndexScreen