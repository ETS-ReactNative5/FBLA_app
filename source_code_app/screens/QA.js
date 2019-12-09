import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, AsyncStorage, }from 'react-native';
import { MonoText } from '../components/StyledText';
const styles = StyleSheet.create(require('../stylesheet'));
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { useTheme } from 'react-navigation';
import { isDebuggerStatement } from '@babel/types';

export default class QA extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    userType: this.isGuest(global.username) ? 'guest' : 'loggedIn',
  };

  render() {
    const {navigate} = this.props.navigation;

    if (this.state.userType=='guest'){
    //if user is guest
      return (
        <View style={styles.container,{backgroundColor: global.color1, paddingTop: 25,}}>
          <View style={styles.container,{backgroundColor: global.color1}} contentContainerStyle={styles.contentContainer,{backgroundColor: global.color1}}>

            <View style={styles.welcomeContainer}>
              <Image source={require('../assets/images/FBLA-Logo.png')} style={styles.welcomeImage} />
            </View>


          </View>
          <View style={styles.getStartedContainer,{backgroundColor: global.color1, textAlign: 'center', alignContent: 'center', alignItems: 'center',}}> 
              <Text style={styles.infoText}>Future Business Leaders of America-Phi Beta Lambda, Inc. (FBLA-PBL) is 
              the largest career student business organization in the world. Each year, FBLA-PBL helps over 230,000 
              members prepare for careers in business.
              {"\n\n"}
              FBLA-PBL’s National Awards Program, commonly called competitive events, recognizes and rewards excellence 
              in a broad range of business and career-related areas. Through state-based competition at the spring State
                Leadership Conferences, members compete in events that test their business knowledge and skills. Top winners 
                in each state are eligible to compete for honors at the National Leadership Conference each summer.
                {"\n"}
              </Text>
              <View style={styles.getStartedContainer,{backgroundColor: global.color1}}> 
              <Text style={styles.getStartedText}>Interested?</Text>
              <Button
                onPress={() => navigate('Form') }
                title="Sign Up for FBLA"
                color="#007ce1"
              />
                <Text style={styles.infoText}>
                  {"\n"}
                </Text>

              </View>
          </View>
        </View>
      );
    }

    //If user isn't guest
    if (this.state.userType!='guest'){
      return (
        <View style={styles.container,{backgroundColor: global.color1, paddingTop: 25,}}>

        </View>
      );
    }
  }

  isGuest(str){
    switch (str){
      case 'guest':
      case 'Guest':
      case '':
      case null:
      case undefined:
        return true;
      default:
        return false;
    }
  }
}

QA.navigationOptions = {
  title: 'QA',
  header: null,
};