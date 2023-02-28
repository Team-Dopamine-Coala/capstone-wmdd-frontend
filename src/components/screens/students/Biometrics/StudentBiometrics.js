import React, { useEffect, useState } from 'react'
import { Alert, StatusBar } from 'react-native';
import { View } from "native-base"
import * as LocalAuthentication from 'expo-local-authentication'
import { result } from 'lodash'

const StudentBiometrics = ({student, navigation}) => {
  console.log('this student',student)
  const userID = '63fcf0bd354e8150f45dd4d2'
  // const bcrypt = require ('bcrypt')

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

  //1.check if device suppert biometrics (ture || false)
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
      "Please enter login password to varify for access student's personal info.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("cancel password"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: password => checkPWD(password),
          
        }
      ],
      "secure-text"
    )
   

      //1.userID(fetchしたもの)と入力したものを比べる
      const checkPWD = (password) => {
        const enteredPWD = password 
        // const checkPWD = bcrypt.compare(password, enteredPWD);
        console.log(checkPWD)
        if(enteredPWD == true ) {
          alertComponent(
            'Password Confirmed',
            'Biometric Authentication not supported',
            'OK',
          )  
          console.log('success!')
          navigation.navigate('Student Profile', {student})
        } else {
          Alert.prompt(
            "Invalid Password",
            "Please enter collect password",
            [
              {
                text: "Cancel",
                onPress: () => console.log("cancel password"),
                style: "cancel"
              },
              {
                text: "OK",
                onPress: password => checkPWD(password),
                
              }
            ],
            "secure-text"
          )
        }
        

       
      }


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

  //When BioAuth success
  const successProcess = (biometricAuth) => {
    console.log('ここまで')
    console.log('何が入ってる？',biometricAuth)
    if (biometricAuth){
      console.log('success!')
      navigation.navigate('Student Profile', {student})
    } 
  
    console.log({ isBiometricAvailable });
    console.log({ supportedBiometrics });
    console.log({ savedBiometrics });
    console.log({ biometricAuth });
  }
  



  //2.Check if Hardware support biometrics 
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
      () => {fallBackPassword(), console.log('PW行くよ')}
    );

    // 3.Check what Biometrics types available ([1] - Fingerprint, [2] - Facial recognition)
    let supportedBiometrics;
    if (isBiometricAvailable) {
      supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();
      console.log('finger or face?',supportedBiometrics)
    }
    
    
    
    //4.Check if biometric record exist in your local device or not (facial or fingerprints record)
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
      if (savedBiometrics) {
        setIsAuthenticated(result.success)
        console.log('Authenticationについて',result.success)
        //if not, proceed password
      }else if (!savedBiometrics) {
        return alertComponent(
          'Biometrics record not found on your Device',
          'Please verify with password',
          'OK',
          () => {fallBackPassword(), console.log('PW行くよ')}
        )}
      

      //5. Authenticate use with Biometrics (Fingerprint, Facial recognition)
      const biometricAuth = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Login with Biometrics',
        cancelLabel: 'Cancel',
        disableDeviceFallback: true,
      });

      successProcess(biometricAuth)
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
