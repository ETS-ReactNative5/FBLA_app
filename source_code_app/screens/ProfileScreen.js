import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, Button, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
const styles = StyleSheet.create(require('../stylesheet'));


export default class LinksScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.profileContainer,{backgroundColor: global.color1}}>
        {/*
        <Text style={{textAlign: 'center',color: global.textColor}}>{outputText}</Text>
        <Button title="Change Text" onPress={() => setOutputText( ((outputText == 'This is a test. Repeat: this is a test.\n') ? 'Or is it?\n' : 'This is a test. Repeat: this is a test.\n') )} />
        */}
      </ScrollView>
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Profile',
};
