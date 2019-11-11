import React, {useState} from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Switch, Platform, StatusBar, StyleSheet, View, ScrollView, Text, Button } from 'react-native';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
const styles = StyleSheet.create(require('../stylesheet'));

export default class MoreScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {mode: false,};

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container,{textAlign: 'left'}}>
        <Text style={styles.getStartedText}>This is an app that does stuff.</Text>
        <Button
          onPress={() => navigate('License') }
          title="View License Information"
          color="#007ce1"
          accessibilityLabel="Views License Information on the license information page."
        />
      </ScrollView>
    );
  }
}

MoreScreen.navigationOptions = {
  title: 'More',
};
