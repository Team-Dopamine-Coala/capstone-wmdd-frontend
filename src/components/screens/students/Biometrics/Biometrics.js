import React, { useEffect } from 'react'
import { View, Input, Modal, Text } from "native-base"
import * as LocalAuthentication from 'expo-local-authentication'

const Biometrics = () => {
    //check if device suppert biometrics
    const [isBiometricSupported, setIsBiometricSupported] = React.useState(false);

    useEffect(() => {
        (async () => {
          const compatible = await LocalAuthentication.hasHardwareAsync();
          setIsBiometricSupported(compatible);
        })();
      });

      const handleBiometricAuth = async () => {
        const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
          if (!savedBiometrics)
          return Alert.alert(
            'Biometric record not found',
            'Please verify your identity with your password',
            'OK',
            () => fallBackToDefaultAuth()
          );
    }

    



  return (
    <View>
      <Text> {isBiometricSupported ? 'Your device is compatible with Biometrics' 
    : 'Face or Fingerprint scanner is available on this device'}
        </Text>
    </View>
  )
}

export default Biometrics
