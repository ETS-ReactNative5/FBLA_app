import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import EventsScreen from '../screens/EventsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import EventsCal from '../screens/EventsCal';

//https://infinitered.github.io/ionicons-version-3-search/

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

/*====================================================================================*/
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
  ),
};

HomeStack.path = '';
/*====================================================================================*/

/*====================================================================================*/
const EventsStack = createStackNavigator(
  {
    Events: EventsScreen,
  },
  config
);

EventsStack.navigationOptions = {
  tabBarLabel: 'Events',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'} />
  ),
};

EventsStack.path = '';
/*====================================================================================*/

/*====================================================================================*/
const EventsCalStack = createStackNavigator(
  {
    Calendar: EventsCal,
  },
  config
);

EventsCalStack.navigationOptions = {
  tabBarLabel: 'Calendar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'} />
  ),
};

EventsStack.path = '';
/*====================================================================================*/

/*====================================================================================*/
const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Misc',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'} />
  ),
};

SettingsStack.path = '';
/*====================================================================================*/

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  EventsStack,
  EventsCalStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
