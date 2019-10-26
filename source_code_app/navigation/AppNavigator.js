import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    //Read more at https://reactnavigation.org/docs/en/auth-flow.html
    main: MainTabNavigator,
  })
);
