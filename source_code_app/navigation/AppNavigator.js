import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { HeaderBackButton } from 'react-native';

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
export default createAppContainer(
  createDrawerNavigator(
    {
      Main: MainTabNavigator,
      License: LicenseStack,
    }),
);
/*====================================================================================*/