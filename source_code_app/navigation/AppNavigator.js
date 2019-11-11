import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import MainTabNavigator from './MainTabNavigator';
import DrawerNavigator from './DrawerNavigator';

export default createAppContainer(
  createStackNavigator({
    //Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: {
      navigationOptions: {
        header: null,
      },
      screen: MainTabNavigator
    },

  })
);
