import { Navigation } from 'react-native-navigation';

// Load screens
import { SCREEN_WELCOME } from './screens';

// Display default screen
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: SCREEN_WELCOME
            }
          }
        ]
      }
    }
  });
});
