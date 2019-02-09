import { createStackNavigator } from 'react-navigation';
import { Splash } from '@screens';

const Router = createStackNavigator(
  {
    Splash: {
      screen: Splash,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Splash',
  },
);

export default Router;
