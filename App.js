import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import AppTabs from './src/components/tabs/AppTabs'

export default function App() {
  return (
    <NativeBaseProvider>
      <AppTabs />
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
