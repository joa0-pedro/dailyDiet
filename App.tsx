import { ThemeProvider } from 'styled-components/native';
import { Home } from './src/screens/Home';
import theme from './src/themes';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans'
import { ActivityIndicator } from 'react-native';
import { Percent } from './src/screens/components/Percent';
import { Form } from './src/screens/components/Form';
import { FinishMeal } from './src/screens/components/Form/components/FinishMeal';

export default function App() {
	const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });


  return (
		<ThemeProvider theme={theme}>
			{ fontsLoaded ? <FinishMeal /> : <ActivityIndicator/>}
		</ThemeProvider>
	)
}
