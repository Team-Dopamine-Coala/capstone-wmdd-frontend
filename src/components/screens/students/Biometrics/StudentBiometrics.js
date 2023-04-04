import React, { useEffect, useState } from 'react'
import { Alert, StatusBar, StyleSheet } from 'react-native';
import { View } from "native-base"
import { BlurView } from 'expo-blur';
import * as LocalAuthentication from 'expo-local-authentication'

const StudentBiometrics = ({student, closeBio, navigation}) => {
 
  const setModalIsOpen = useState
  const [pwdOpen, setPwdOpen] = useState(false)
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [biosuccess, setBiosuccess] = useState(false)

  //1.Device suppert biometrics? (ture || false)
  useEffect(() => {(
    async () => {
      const isBiometricSupported = await LocalAuthentication.hasHardwareAsync()
      
      console.log('1.bio support on device?',isBiometricSupported)
      if(isBiometricSupported === false){
        console.log('1.Your device is compatible with Biometrics')
        fallBackToDefaultAuth()
      }if (isBiometricSupported === true) {
        console.log('1.Face or Fingerprint scanner is available on this device')
        handleBiometricAuth()
      }
    })();
  });

  //2.Hardware support biometrics? 
  const handleBiometricAuth = async () => {
    //Check if Hardware support biometrics  
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync()
    console.log('2. available bio?',isBiometricAvailable)
    
    //if not supported, ask to input password 
    if (!isBiometricAvailable)
      return alertComponent(
      'Please enter password',
      'Biometric Authentication not supported',
      'OK',
      // () => {fallBackPassword()}
    );

    // 3.What Biometrics types available? ([1] - Fingerprint, [2] - Facial recognition)
    let supportedBiometrics;
    if (isBiometricAvailable) {
      supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync()
      console.log('3.finger or face?',supportedBiometrics)
    }
    
    //4.Check if biometric record exist in your local device or not (facial or fingerprints record)
    // const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    // console.log('record exist in your device?',savedBiometrics)  
    //     //if not, proceed password
    //   if (!savedBiometrics) {
    //     return alertComponent(
    //       'Biometrics record not found on your Device',
    //       'Please verify with password',
    //       'OK',
    //       () => {fallBackPassword(), console.log('PW行くよ')}
    //     )}
      

      //5.Finally Authenticate use with Biometrics (Fingerprint, Facial recognition)
      const result = await LocalAuthentication.authenticateAsync
      
      ({
        promptMessage: 'You access to student personal Information.',
        disableDeviceFallback: true,
        cancelLabel: 'Cancel',
        onPress: () => {navigation.navigate('Student Profile')},
      });
        successProcess(result)
    }

//==========Functions ===========================================================
  const alertComponent = (title, mess, btnTxt, btnFunc) => {
    return Alert.alert(title, mess, [
      {
        text: btnTxt,
        onPress: btnFunc,
      },
    ]);
  };

  //navigation
  const movepage = (setModalIsOpen) => {
    // console.log('move to personal page!'),

    closeBio(),
    navigation.navigate('Student Profile', {student})
  }

  //When BioAuth success
  const successProcess = (result) => {
    console.log('4.bio success or fail?',result)
    if (result.success == true){
      console.log('success!')
      movepage()
    } else if (result.success == false){
      console.log('failed bio')
      closeBio()
    }
  }

  return (
    <View style={styles.container}>
       <BlurView style={styles.blur} intensity={5} blurType="xlight" />
        <StatusBar style="auto" />
    </View>
  )
}
const styles = StyleSheet.create ({
  container:{
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      flex: 1,
  },
  blur:{
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
})
export default StudentBiometrics