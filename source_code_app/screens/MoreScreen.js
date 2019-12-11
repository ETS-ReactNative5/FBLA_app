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
      <ScrollView style={styles.container,{textAlign: 'left', backgroundColor: global.color1}}>
        <Button
          onPress={() => navigate('License') }
          title="View License Information"
          color="#007ce1"
        />
        <Button
          onPress={() => navigate('Settings') }
          title="Settings"
          color="#007ce1"
        />
        <Button
          onPress={() => navigate('QA') }
          title="Q&A Page"
          color="#007ce1"
        />
        <Button
          onPress={() => navigate('Officers') }
          title="Local Officer Team"
          color="#007ce1"
        />
        <Button
          onPress={() => navigate('QR') }
          title="QR"
          color="#007ce1"
        />
      </ScrollView>
    );
  }
}

MoreScreen.navigationOptions = {
  title: 'More',
};
