import { AppLoading, AuthSession } from 'expo'; 
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, setState, Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SwitchExample from './components/Switch.js'
import AppNavigator from './navigation/AppNavigator';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import './global.js';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
const styles = StyleSheet.create(require('./stylesheet'));


export default class App extends Component {
  render(){
    global.darkMode = Appearance.getColorScheme()=='light' ? false : true;
    return (
      <AppearanceProvider>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator theme={global.theme}  />
        </View>
      </AppearanceProvider>
    );
  }

  _Refresh = async () => {
    this.forceUpdate();
  }
}





async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/FBLA-Logo.png'),
      require('./assets/images/icon.png'),
    ]),
    Font.loadAsync({
      ...Ionicons.font,
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}
function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}
