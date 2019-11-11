import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { HeaderBackButton, ActivityIndicator, AsyncStorage, StatusBar, } from 'react-native';

import MainTabNavigator from './MainTabNavigator';
MainTabNavigator.navigationOptions={
  header: null,
};


/*====================================================================================*/
import LicenseScreen from '../screens/LicenseInfo';
const LicenseStack = createStackNavigator(
  {
    License: LicenseScreen,
  },
);
LicenseStack.navigationOptions = {
  tabBarLabel: 'License',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-document' : 'md-document'} />
  ),
};
LicenseStack.path = '';
/*====================================================================================*/

/*====================================================================================*/
const AppStack = createStackNavigator(
  {
    Main: MainTabNavigator,
    License: LicenseStack,
  }
);
import LoginScreen from '../screens/LoginScreen';
import LoginScreenLoading from '../screens/LoginScreenLoading';
const AuthStack = createStackNavigator({ SignIn: LoginScreen });
/*====================================================================================*/

/*====================================================================================*/
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: LoginScreenLoading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

/*export default createAppContainer(
  createStackNavigator(
    {
      Main: MainTabNavigator,
      License: LicenseStack,
    }),
);*/
/*====================================================================================*/