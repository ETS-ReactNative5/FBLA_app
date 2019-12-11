import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import EventsScreen from '../screens/EventsScreen';
import MoreScreen from '../screens/MoreScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LicenseScreen from '../screens/LicenseInfo';

//https://infinitered.github.io/ionicons-version-3-search/

const Drawer = createDrawerNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home'
      }
    },
    ProfilePage: {
      screen: EventsScreen,
      navigationOptions: {
        title: 'ProfilePage'
      }
    }
  },
    {
        drawerPosition: 'left',
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'
    }
);

export default Drawer;
