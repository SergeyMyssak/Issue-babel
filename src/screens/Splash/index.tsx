import React, { SFC } from 'react';
import {
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { SplashContainer } from './containers';
import { PinStatus, IPinCodeParams } from '@types';

interface IProps {
  navigation: NavigationScreenProp<NavigationState>;
  name: IPinCodeParams;
}

const Splash: SFC<IProps> = (props) => {
  const { navigation } = props;
  const { navigate } = navigation;

  const handleNavigation = (session, currentUser, pinCode) => {
    if (pinCode) {
      navigate('PinCode', {
        status: PinStatus.Unlock,
        onComplete: navigate('MainTabs'),
        onClose: navigate('AuthStack'),
      });
    } else if (session) {
      navigate('MainTabs');
    } else {
      navigate('AuthStack');
    }
  };

  return <SplashContainer onLoadStore={handleNavigation} />;
};

export default Splash;
