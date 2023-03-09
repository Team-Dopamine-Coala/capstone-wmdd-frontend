import React, { useEffect, useState } from 'react'
import { Alert, StatusBar } from 'react-native';
import { View } from "native-base"
import * as LocalAuthentication from 'expo-local-authentication'

const StudentBiometrics = ({student, closeBio, navigation}) => {
  // console.log('this student',student)
   // const bcrypt = require ('bcrypt')
  const userID = '63fcf0bd354e8150f45dd4d2'
  console.log('ナビ見てみる',navigation)
  
  console.log('ナビBio student',student)
  console.log('ナビBio',navigation)
  const setModalIsOpen = useState
  console.log('もだl',setModalIsOpen())

  //get user's password
  const [pwdOpen, setPwdOpen] = useState(false)
  const [userPassword, setUserPassword] = useState('')
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  
  //Get user Password
  // useEffect(() => {
  //   const getUserId = async () => {
  //     const res = await fetchUser()
  //     setUserPassword(res.password)
  //     console.log('PWD',password)
  //   }
  //   getUserId()
  // },[])
  
  // const fetchUser = async () => {
  //   const res = await fetch(`http://3.84.131.140:3000/api/users/${userID}`)
  //   const data = await res.json()
   
  //   if(res.ok){
  //     return data
  //   }
    
  // }

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
        handleBiometricAuth()
      }
    })();
  });
      
    //===========================================================  
  //Function if devide does not support biometrics (Enter password!)　パスワード入力コードを作成
  const fallBackPassword = () => {
    //check useID and input id is equal!
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
        console.log('入力',enteredPWD)
        console.log('持ってきたPWD',userPassword)

        // const checkPWD = bcrypt.compare(password, enteredPWD);
        if(enteredPWD == true ) {
          alertComponent(
            'Password Confirmed',
            'Biometric Authentication not supported',
            'OK',
          )  
          console.log('success!')
          movepage()
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
  };

 //============================================== 

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
      

      //5. Authenticate use with Biometrics (Fingerprint, Facial recognition)
      const result = await LocalAuthentication.authenticateAsync
      ({
        promptMessage: 'Login with Biometrics',
        cancelLabel: 'Cancel',
        disableDeviceFallback: true,
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
    console.log('move to personal page!'),
    closeBio(),
    navigation.navigate('Student Profile', {student})
  }

  //When BioAuth success
  const successProcess = (result) => {
    console.log('bio success or fail?',result)
    if (result.success == true){
      console.log('success!')
      movepage()
    } else if (result.success == false){
      console.log('failed bio')
    }
  }
  return (
    <View>
     
        <StatusBar style="auto" />
    </View>
  )
}

export default StudentBiometrics


//TO DO LIST
//1. bcryptされたものとどのように比べるか！？
//2. navigation.nagigate を解消！
//3. face idのLogoはどうなるのか？