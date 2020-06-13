import { Navigation } from 'react-native-navigation';

// Load components for screens
import WelcomeScreen from './intro/welcome';

// Constants for screen names
export const SCREEN_WELCOME = 'intro.welcome';

// Register screens
Navigation.registerComponent(SCREEN_WELCOME, () => WelcomeScreen);
