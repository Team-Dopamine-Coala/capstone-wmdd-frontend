import * as Font from 'expo-font';
import { 
  Lexend_100Thin,
  Lexend_200ExtraLight,
  Lexend_300Light,
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_600SemiBold,
  Lexend_700Bold,
  Lexend_800ExtraBold,
  Lexend_900Black
} from '@expo-google-fonts/lexend';

export const useFonts = async () => {
  await Font.loadAsync({
    Lexend_300: Lexend_300Light,
    Lexend_400: Lexend_400Regular,
    Lexend_500: Lexend_500Medium,
    Lexend_600: Lexend_600SemiBold,
    Lexend_700: Lexend_700Bold,
    Lexend_800: Lexend_800ExtraBold,
    Lexend_900: Lexend_900Black
  });
};