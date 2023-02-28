import React, { useEffect, useState } from 'react'
import { Alert, SafeAreaView, StatusBar } from 'react-native';
import { View } from "native-base"
import * as LocalAuthentication from 'expo-local-authentication'
import { result } from 'lodash';

const StudentBiometrics = ({student}) => {
  console.log('this student',student)
  const userID = '63fcf0bd354e8150f45dd4d2'
    
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  //check if device suppert biometrics (ture || false)
  //ここFalseだった場合password入力に進むようにする
  useEffect(() => {
    (async () => {
      const isBiometricSupported = await LocalAuthentication.hasHardwareAsync();
      
      console.log('bio syupport?',isBiometricSupported)
      if(isBiometricSupported === false){
        console.log('Your device is compatible with Biometrics')
      }if (isBiometricSupported === true) {
        console.log('Face or Fingerprint scanner is available on this device')
      }
      
    })();
  });
      
      
  //Function if devide does not support biometrics (Enter password!)　パスワード入力コードを作成
  const fallBackToDefaultAuth = () => {

    //get userID
    //check useID and input id is equal!
    console.log('passwordで確認');

    return Alert.alert(
      'Please Enter Password',
      'Please verify your identity with your password',
      'OK',
      // () => fallBackToDefaultAuth()
  )
  };

  const alertComponent = (title, mess, btnTxt, btnFunc) => {
    return Alert.alert(title, mess, [
      {
        text: btnTxt,
        onPress: btnFunc,
      },
    ]);
  };


  //studentインフォから出る時にはisAuthenticatedをtrue＝＞falseに戻す必要がある！(後ほど)
  const handleBiometricAuth = async () => {
    //Check if Hardware support biometrics  
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync()
    console.log('bio availability',isBiometricAvailable)
    //if not supported, ask to input password 
    if (!isBiometricAvailable)
      return alertComponent(
      'Please enter your Login password',
      'Biometric Authentication not supported',
      'OK',
      () => fallBackToDefaultAuth()
    );

    // Check what Biometrics types available ([1] - Fingerprint, [2] - Facial recognition)
    let supportedBiometrics;
    if (isBiometricAvailable) {
      supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();
      console.log('finger or face?',supportedBiometrics)
    }
    
    
    
    //Check if biometric record exist in your local device or not (facial or fingerpronts record)
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
      if (savedBiometrics) {
        setIsAuthenticated(result.success)
        console.log('Authenticationについて',result)
        //if no, password
      }else if (!savedBiometrics) {
        return Alert.alert(
          'Biometrics record not found in your Device',
          'Please verify your identity with password',
          'OK',
          () => fallBackToDefaultAuth()
        )}
      

      // Authenticate use with Biometrics (Fingerprint, Facial recognition)
      const biometricAuth = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Login with Biometrics',
        cancelLabel: 'Cancel',
        disableDeviceFallback: true,
      });
      // Log the user in on success
      if (biometricAuth){
        console.log('success!');
        navigation.navigate('Profile', {student})
      } 
    
      console.log({ isBiometricAvailable });
      console.log({ supportedBiometrics });
      console.log({ savedBiometrics });
      console.log({ biometricAuth });

    }
handleBiometricAuth()
 
  

  
  


  return (
    <View>
      {/* <Text> {isBiometricSupported ? 'Your device is compatible with Biometrics' 
    : 'Face or Fingerprint scanner is available on this device'}
        </Text> */}
        <SafeAreaView>
      <View >
        {/* <Text>
          {isBiometricSupported
            ? 'Your device is compatible with Biometrics'
            : 'Face or Fingerprint scanner is available on this device'}
        </Text> */}

        {/* <TouchableHighlight
          style={{
            height: 60,
          }}
        >
          <Button
            title="Login with Biometrics"
            color="#fe7005"
            onPress={handleBiometricAuth}
          />
        </TouchableHighlight> */}

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
    </View>
  )
}

export default StudentBiometrics
