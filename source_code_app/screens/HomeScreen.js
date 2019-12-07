import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, AsyncStorage, }from 'react-native';
import { MonoText } from '../components/StyledText';
const styles = StyleSheet.create(require('../stylesheet'));
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { useTheme } from 'react-navigation';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container,{backgroundColor: global.color1, paddingTop: 25,}}>
        <View style={styles.container,{backgroundColor: global.color1}} contentContainerStyle={styles.contentContainer,{backgroundColor: global.color1}}>

          <View style={styles.welcomeContainer}>
            <Image source={require('../assets/images/FBLA-Logo.png')} style={styles.welcomeImage} />
          </View>

          <View style={styles.getStartedContainer,{backgroundColor: global.color1}}> 
            <Text style={styles.getStartedText}>FBLA is pretty neat.</Text>
            <Button
              onPress={() => navigate('Form') }
              title="Sign Up for FBLA"
              color="#007ce1"
            />
            </View>
        </View>
        <View style={styles.getStartedContainer,{backgroundColor: global.color1}}> 
            <Text style={styles.infoText}>Future Business Leaders of America-Phi Beta Lambda, Inc. (FBLA-PBL) is the largest career student business organization in the world. Each year, FBLA-PBL helps over 230,000 members prepare for careers in business.</Text>
        </View>
      </ScrollView>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Home',
  header: null,
};