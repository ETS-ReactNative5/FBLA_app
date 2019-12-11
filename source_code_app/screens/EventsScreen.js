import React, {useState} from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Switch, Platform, StatusBar, StyleSheet, View, ScrollView, Text, Button, FlatList } from 'react-native';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
const styles = StyleSheet.create(require('../stylesheet'));
import Constants from 'expo-constants';

export default class EventsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {mode: false,};

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container,{textAlign: 'left', backgroundColor: global.color1}}>
        <Button
          onPress={() => navigate('EventsCal') }
          title="View Event Calendar"
          color="#007ce1"
          accessibilityLabel="View a full calendar of all events."
        />
        <Button
          onPress={() => navigate('EventsList') }
          title="View Events"
          color="#007ce1"
          accessibilityLabel="View a full list of all events."
        />
      </ScrollView>
    );
  }
}
