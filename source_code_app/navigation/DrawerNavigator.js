import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

//https://infinitered.github.io/ionicons-version-3-search/
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);
HomeStack.navigationOptions = {
  drawerLabel: 'Home',
};
HomeStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Links: ProfileScreen,
  },
  config
);
ProfileStack.navigationOptions = {
  drawerLabel: 'Profile',
};
ProfileStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);
SettingsStack.navigationOptions = {
  drawerLabel: 'Settings',
};
SettingsStack.path = '';

const drawerNavigator = createDrawerNavigator({
  HomeStack,
  ProfileStack,
  SettingsStack,
});

drawerNavigator.path = '';

export default drawerNavigator;
