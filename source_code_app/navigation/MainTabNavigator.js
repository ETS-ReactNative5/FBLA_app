import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import EventsScreen from '../screens/EventsScreen';
import MoreScreen from '../screens/MoreScreen';

//https://infinitered.github.io/ionicons-version-3-search/

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

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

const EventsStack = createStackNavigator(
  {
    Links: EventsScreen,
  },
  config
);

EventsStack.navigationOptions = {
  tabBarLabel: 'Events',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'} />
  ),
};

EventsStack.path = '';

const MoreStack = createStackNavigator(
  {
    Settings: MoreScreen,
  },
  config
);

MoreStack.navigationOptions = {
  tabBarLabel: 'More',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

MoreStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  EventsStack,
  MoreStack,
});

tabNavigator.path = '';

export default tabNavigator;
