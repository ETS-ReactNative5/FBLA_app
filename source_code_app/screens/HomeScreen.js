import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, AsyncStorage, Linking, TouchableHighlight }from 'react-native';
import { Button } from 'react-native-elements';
import { MonoText } from '../components/StyledText';
const styles = StyleSheet.create(require('../stylesheet'));
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { useTheme, DrawerActions } from 'react-navigation';
import { isDebuggerStatement } from '@babel/types';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends React.Component {
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
        <ScrollView style={styles.container,{backgroundColor: global.color1, paddingTop: 15,}}>
          <View style={styles.container,{backgroundColor: global.color1}} contentContainerStyle={styles.contentContainer,{backgroundColor: global.color1}}>

          <View style={styles.welcomeContainer}>
            <Image source={require('../assets/images/FBLA-Logo.png')} style={styles.welcomeImage} />
          </View>

          <View style={{flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
            <TouchableHighlight 
              onPress={() => Linking.openURL('https://www.facebook.com/FutureBusinessLeaders')}>
              <Image 
                source={{uri: 'https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png'}} 
                style={{height:50, width:50}} />
            </TouchableHighlight>
            <Text>{"  "}</Text>
            <TouchableHighlight 
              onPress={() => Linking.openURL('https://www.instagram.com/fbla_pbl/')}>
              <Image 
                source={{uri: 'https://workingwithdog.com/wp-content/uploads/2016/05/new_instagram_logo-1024x1024.jpg'}} 
                style={{height:50, width:50}} />
            </TouchableHighlight>
            <Text>{"  "}</Text>
            <TouchableHighlight 
              onPress={() => Linking.openURL('https://twitter.com/FBLA_National')}>
              <Image 
                source={{uri: 'https://www.lifewire.com/thmb/Px0ayvhx7Ej8-vMMoHajfVXIdqg=/950x950/smart/filters:no_upscale()/twitterlogo-6471b86764ac4076b70f645e632b899e.jpg'}} 
                style={{height:50, width:50}} />
            </TouchableHighlight>
          </View>


          </View>
          <View style={styles.getStartedContainer,{backgroundColor: global.color1, textAlign: 'center', alignContent: 'center', alignItems: 'center',}}> 
              <Text style={styles.infoText}>Future Business Leaders of America-Phi Beta Lambda, Inc. (FBLA-PBL) is 
              the largest career student business organization in the world. Each year, FBLA-PBL helps over 230,000 
              members prepare for careers in business.
              </Text>
              <Button type='clear' title="FBLA Website" onPress={ ()=>{ Linking.openURL('https://www.fbla-pbl.org/')}} />
              <Text style={styles.infoText}>
              FBLA-PBL’s National Awards Program, commonly called competitive events, recognizes and rewards excellence 
              in a broad range of business and career-related areas. Through state-based competition at the spring State
                Leadership Conferences, members compete in events that test their business knowledge and skills. Top winners 
                in each state are eligible to compete for honors at the National Leadership Conference each summer.
              </Text>
              <Text>{"\n"}</Text>
              <View style={styles.getStartedContainer,{backgroundColor: global.color1}}> 
              <Text style={styles.getStartedText}>Interested?{"\n"}</Text>
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
        </ScrollView>
      );
    }

    //If user isn't guest
    if (this.state.userType!='guest'){
      return (
        <View style={styles.container,{backgroundColor: global.color1, paddingTop: 25, padding: 25,}}>

            <View style={styles.welcomeContainer}>
              <Image source={require('../assets/images/FBLA-Logo.png')} style={styles.welcomeImage} />
            </View>

            <Text style={styles.infoText, {fontWeight: 'bold', textAlign: 'center', fontSize: 20}}>{"\n\n"}Hello, {global.username}{"\n\n"}</Text>
            <View style={styles.getStartedContainer,{backgroundColor: global.color1}}> 
            <Button
              onPress={() => navigate('QR') }
              size={15}
              title="Check In"
              color="#007ce1"
              icon={
                <Icon
                  name="arrow-right"
                  size={15}
                  color="white"
                />
              }
            />
            <Text>{"\n\n"}</Text>
            <Button
              onPress={() => navigate('Attendance') }
              size={15}
              title="View Attendence"
              color="#007ce1"
            />
            </View>
            <Text>{"\n\n"}</Text>
            <View style={styles.welcomeContainer}>
              <Image source={require('../assets/images/QR.png')} style={{height: 200, width: 200}} />
            </View>

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

HomeScreen.navigationOptions = {
  title: 'Home',
  header: null,
};