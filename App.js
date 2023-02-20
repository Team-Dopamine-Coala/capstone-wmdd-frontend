import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
// import AppTabs from './src/components/tabs/AppTabs'
// import LoginSignUpStack from './src/components/stacks/LoginSignUpStack';

import { AuthProvider } from './src/components/context/AuthContext';
import AppNav from './src/components/navigation/AppNav';


export default function App() {

  return (
    <NativeBaseProvider>
      <AppTabs />
      <StatusBar style="auto" hidden/>
    </NativeBaseProvider>
  );
}
