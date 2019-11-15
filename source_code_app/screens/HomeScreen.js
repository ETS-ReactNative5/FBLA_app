import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, AsyncStorage, }from 'react-native';
import { MonoText } from '../components/StyledText';
const styles = StyleSheet.create(require('../stylesheet'));
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { useTheme } from 'react-navigation';

export default class HomeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.container,{backgroundColor: global.color1, paddingTop: 25,}}>
        <View style={styles.container,{backgroundColor: global.color1}} contentContainerStyle={styles.contentContainer,{backgroundColor: global.color1}}>

          <View style={styles.welcomeContainer}>
            <Image source={require('../assets/images/FBLA-Logo.png')} style={styles.welcomeImage} />
          </View>

          <View style={styles.getStartedContainer,{backgroundColor: global.color1}}> 
            <Text style={styles.getStartedText}>This is an app that does stuff.</Text>
            <Text style={styles.getStartedText}>Wow.</Text>
          </View>
        
        </View>
      </ScrollView>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Home',
  header: null,
};