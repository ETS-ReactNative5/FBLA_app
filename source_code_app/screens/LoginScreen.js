import React, { Component, useState } from "react";
import {
    ActivityIndicator,
    Text,
    Keyboard,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    View,
    Alert, 
    KeyboardAvoidingView,
  } from 'react-native';
const styles = StyleSheet.create(require('../loginstyle.js'));
import { AuthSession } from 'expo';


/*export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };
    
    render() {
        return (
          <View style={styles.container}>
            <Button title="( ͡❛ ͜ʖ ͡❛)Sign in!( ͡❛ ⏏ ͡❛)" onPress={this._signInAsync} />
          </View>
        );
    }
    
    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
}*/

const appId = "1047121222092614"

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Please Sign In',
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  render() {
    return (
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>FBLA App</Text>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Button color="#3897f1" title="Login" onPress={this._signInAsync} />
            <Button
              buttonStyle={styles.fbLoginButton}
              onPress={() => this.onFbLoginPress()}
              title="Login with Facebook"
              color="#3897f1"
            />
          </View>
        </View>

    );
  }

  async onFbLoginPress() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
      permissions: ['public_profile', 'email'],
    });
    if (type === 'success') {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
    }
  }
}