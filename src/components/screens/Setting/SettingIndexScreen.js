import {useContext} from 'react'
import { useRoute } from '@react-navigation/native';
import {Box,Text, VStack, View, Image, Icon, HStack} from 'native-base'
import { SafeAreaView, TouchableOpacity, StyleSheet  } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { AuthContext } from '../../context/AuthContext'
import { Ionicons } from '@expo/vector-icons'
import ClassIcon from '../../../Images/ClassIcon.svg'

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
                {/* <Icon size={4} as={<Ionicons name='arrow-forward' />} style={styles.iconleft}/> */}
                {/* <Image source={{uri: "https://res.cloudinary.com/dp53wf7gb/image/upload/v1679070455/coalaNotStarted_ea6fcm.png"}} alt="myclass icon" size="md" /> */}
                <Icon size={4} as={<Image source={ClassIcon} alt="myclass icon" size="md" />}/>

                <VStack style={styles.title}>
                  <Text fontFamily="Lexend_600">My Classes</Text>
                  <Text fontFamily="Lexend_300">Find your classes' details here</Text>   
                </VStack>                                    
              </HStack>
              <Icon size={4} as={<Ionicons name='chevron-forward-outline' />} style={styles.iconarrow}/>
            </HStack>
          </TouchableOpacity > 
              
          <HStack style={styles.sectionbox} shadow={5}>
              <HStack style={styles.lefticontitle}>
                <Icon size={4} as={<Ionicons name='notifications-outline' />} style={styles.iconleft}/>
                <VStack style={styles.title}>
                  <Text fontFamily="Lexend_600">Notification</Text>
                  <Text fontFamily="Lexend_300">Make sure you don't miss anything!</Text>              
                </VStack>
              </HStack>
              <Icon size={4} as={<Ionicons name='chevron-forward-outline' />} style={styles.iconarrow}/>  
          </HStack>

          <HStack style={styles.sectionbox} shadow={5}>
              <HStack style={styles.lefticontitle}>
                <Icon size={4} as={<Ionicons name='help-circle-outline' />} style={styles.iconleft}/>
                <VStack style={styles.title}>
                  <Text fontFamily="Lexend_600">Help</Text>
                  <Text fontFamily="Lexend_300">Contact our help centre</Text> 
                </VStack>
              </HStack>
              <Icon size={4} as={<Ionicons name='chevron-forward-outline' />} style={styles.iconarrow}/>               
          </HStack>

          <VStack style={styles.sectionbox} shadow={5}>
              <HStack style={styles.lefticontitle}>
                <Icon size={4} as={<Ionicons name='information-circle-outline' />} style={styles.iconleft}/>
                <VStack style={styles.title}>
                  <Text fontFamily="Lexend_600">About Us</Text>
                  <Text fontFamily="Lexend_300">More about Coala and our team</Text>
                </VStack>
              </HStack>
              <Icon size={4} as={<Ionicons name='chevron-forward-outline' />} style={styles.iconarrow}/>
          </VStack>
          
            <TouchableOpacity onPress={logout}>
              <HStack style={styles.sectionbox} shadow={5}>
                <HStack style={styles.lefticontitle}>
                  <Icon size={4} as={<Ionicons name='log-out-outline' />} style={styles.iconleft}/>
                  <Text style={styles.title} fontFamily="Lexend_600">Log out</Text>            
                </HStack>
                <Icon size={4} as={<Ionicons name='chevron-forward-outline' />} style={styles.iconarrow}/>
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
    iconleft:{
      width: 32,
      height: 32,
      fontSize: 27,
      color: '#667080',
      lineHeight: 32,
    },
    title:{
      marginLeft: 16,
    },
    iconarrow:{
      width: 24,
      height: 24,
      fontSize: 24,
      color: '#667080',
      lineHeight: 24,
    }
  })
export default SettingIndexScreen