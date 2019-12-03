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
    Image,
  } from 'react-native';
const styles = StyleSheet.create(require('../loginstyle.js'));
import { AuthSession } from 'expo';

//const appId = "1047121222092614"

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Please Sign In',
  };

  _signInAsync = async () => {
    global.username=this.state.user;
    global.password=(this.state.pass != null) ? this.state.pass : 'abc';
    await AsyncStorage.setItem('userToken', global.password);
    this.props.navigation.navigate('App');
  };

  state = {user: null, pass: null,};

  render() {
    return (
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <View style={styles.welcomeContainer,{justifyContent: 'center',alignItems: 'center',}}>
              <Image source={require('../assets/images/FBLA-Logo.png')} style={styles.welcomeImage} />
            </View>
            <TextInput value={this.state.user} onChangeText={(user) => {this.setState({user}); global.username=this.state.user;}} placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput value={this.state.pass} onChangeText={(pass) => {this.setState({pass}); global.password=this.state.pass;}} placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Button color="#3897f1" title="Login" onPress={this._signInAsync} />
            {/*<Button
              buttonStyle={styles.fbLoginButton}
              onPress={() => this.onFbLoginPress()}
              title="Login with Facebook"
              color="#3897f1"
            />*/}
          </View>
        </View>

    );
  }

  /*async onFbLoginPress() {
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
  }*/
}