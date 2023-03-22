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

const useFonts = async () => {
  await Font.loadAsync({
    Roboto: Roboto_400Regular,
  });
};

export default useFonts;