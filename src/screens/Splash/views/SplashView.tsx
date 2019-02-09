import React, { SFC } from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

import { COLORS } from '@constants';

const { BACKGROUND_COLOR } = COLORS;

const SplashView: SFC = () => {
  return (
    <View style={styles.container}>
      <Text>SPLASH SCREEN</Text>
      <ActivityIndicator style={styles.indicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR,
  },
  indicator: {
    marginTop: 20,
  },
});

export default SplashView;
