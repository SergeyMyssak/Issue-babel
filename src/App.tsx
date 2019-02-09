import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import { enableLogging } from 'mobx-logger';
import Router from './router';

enableLogging({
  predicate: () => __DEV__ && Boolean(window.navigator.userAgent),
  action: true,
  reaction: true,
  transaction: true,
  compute: true,
});

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
]);

configure({
  enforceActions: 'observed',
  computedRequiresReaction: true,
});

class App extends Component {
  public render() {
    return (
      <Provider>
        <Router />
      </Provider>
    );
  }
}

export default App;
