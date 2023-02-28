import React, { useEffect, useState } from 'react'
import { Alert, StatusBar } from 'react-native';
import { View } from "native-base"
import * as LocalAuthentication from 'expo-local-authentication'
import { result } from 'lodash'
import AlartInput from 'react-native-alert-input'

const StudentBiometrics = ({student}) => {
  console.log('this student',student)
  const userID = '63fcf0bd354e8150f45dd4d2'

  //get user's password
  const [pwdOpen, setPwdOpen] = useState(false)
  const [password, setPassword] = useState('')
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  //Get user Password
  useEffect(() => {
    const getUserId = async () => {
      const res = await fetchUser()
      setPassword(res.password)
      console.log('PWD',password)
    }
    getUserId()
  },[])
  
  const fetchUser = async () => {
    const res = await fetch(`http://3.84.131.140:3000/api/users/${userID}`)
    const data = await res.json()
   
    if(res.ok){
      return data
    }
    
  }

  //check if device suppert biometrics (ture || false)
  //ここFalseだった場合password入力に進むようにする
  useEffect(() => {
    (async () => {
      const isBiometricSupported = await LocalAuthentication.hasHardwareAsync();
      
      console.log('bio support?',isBiometricSupported)
      if(isBiometricSupported === false){
        console.log('Your device is compatible with Biometrics')
        fallBackToDefaultAuth()
      }if (isBiometricSupported === true) {
        console.log('Face or Fingerprint scanner is available on this device')
      }
      
    })();
  });
      
      
  //Function if devide does not support biometrics (Enter password!)　パスワード入力コードを作成
  const fallBackPassword = () => {
    //check useID and input id is equal!
    console.log('passwordで確認');

    //Password入力
    Alert.prompt(
      "Enter Password",
      "Please enter login password to barify",
      [
        {
          text: "Cancel",
          onPress: () => console.log("cancel password"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: password => console.log("password OK"),
        }
      ],
      "secure-text"
    )
    // return Alert.alertComponent(
    //   'Enter Password',
    //   'Please verify your identity with your password',
    //   'OK',
    //   () => checkPWD()
    //   )

      //1.userID(fetchしたもの)と入力したものを比べる
      // const checkPWD = () => {
      //   userID === 
      // }


      //２。passwordがmatchしたら！しなかったら！
      // if (){
      //   console.log('success!');
      //   navigation.navigate('Profile', {student})
      // } else {
      //   console.log('please input collect password')
      // }
  
  };

  const alertComponent = (title, mess, btnTxt, btnFunc) => {
    return Alert.alert(title, mess, [
      {
        text: btnTxt,
        onPress: btnFunc,
      },
    ]);
  };

  //When BioAuth or Password success
  const successProcess = () => {
    if (biometricAuth){
      console.log('success!');
      navigation.navigate('Profile', {student})
    } 
  
    console.log({ isBiometricAvailable });
    console.log({ supportedBiometrics });
    console.log({ savedBiometrics });
    console.log({ biometricAuth });
  }
  



  //studentインフォから出る時にはisAuthenticatedをtrue＝＞falseに戻す必要がある！(後ほど)
  const handleBiometricAuth = async () => {
    //Check if Hardware support biometrics  
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync()
    console.log('available bio?',isBiometricAvailable)
    //if not supported, ask to input password 
    if (!isBiometricAvailable)
      return alertComponent(
      'Please enter your Login password',
      'Biometric Authentication not supported',
      'OK',
      () => fallBackPassword()
    );

    // Check what Biometrics types available ([1] - Fingerprint, [2] - Facial recognition)
    let supportedBiometrics;
    if (isBiometricAvailable) {
      supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();
      console.log('finger or face?',supportedBiometrics)
    }
    
    
    
    //Check if biometric record exist in your local device or not (facial or fingerprints record)
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
      if (savedBiometrics) {
        setIsAuthenticated(result.success)
        console.log('Authenticationについて',result)
        //if no, password
      }else if (!savedBiometrics) {
        return Alert.alert(
          'Biometrics record not found on your Device',
          'Please verify your identity with password',
          'OK',
          () => fallBackPassword()
        )}
      

      // Authenticate use with Biometrics (Fingerprint, Facial recognition)
      const biometricAuth = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Login with Biometrics',
        cancelLabel: 'Cancel',
        disableDeviceFallback: true,
      });

      successProcess()
      // Log the user in on success
    }
handleBiometricAuth()
 
  

  
  


  return (
    <View>
      

        <StatusBar style="auto" />
      
   
    </View>
  )
}

export default StudentBiometrics
