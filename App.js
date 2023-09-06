import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import AppLoading from 'expo-app-loading';

import { AuthProvider } from './src/components/context/AuthContext'
import AppNav from './src/components/navigation/AppNav';
 
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

import { useFonts } from './hooks/useFonts';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <NativeBaseProvider>
      <AuthProvider>
          <AppNav />
      </AuthProvider>
      <StatusBar style="auto" hidden />
    </NativeBaseProvider>
  );
}
