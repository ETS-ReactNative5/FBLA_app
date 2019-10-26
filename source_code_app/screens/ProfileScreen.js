import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, Button, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
const styles = StyleSheet.create(require('../stylesheet'));


export default class LinksScreen extends React.Component {
  constructor(props) {
       super(props);
       this.state = {
           darkTheme: false
       };
       this.toggleTheme = this.toggleTheme.bind(this);
   }
   toggleTheme() {
       this.setState({darkTheme: !this.state.darkTheme})
   };

  render() {
    return (
      <ScrollView style={styles.profileContainer,{backgroundColor: global.color1}}>
      </ScrollView>
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Profile',
};
