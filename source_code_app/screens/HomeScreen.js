import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, }from 'react-native';
import { MonoText } from '../components/StyledText';
const styles = StyleSheet.create(require('../stylesheet'));
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { useTheme } from 'react-navigation';

export default class HomeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>
            <Image source={require('../assets/images/FBLA-Logo.png')} style={styles.welcomeImage} />
          </View>

          <View style={styles.getStartedContainer}> 
            <Text style={styles.getStartedText}>This is an app that does stuff.</Text>
            <Text style={styles.getStartedText}>Wow.</Text>
          </View>
        
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Home',
  header: null,
};