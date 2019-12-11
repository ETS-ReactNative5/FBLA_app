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

  _makeAccount = async () => {
    this.props.navigation.navigate("Form");
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
        </View>
      </View>
    );
  }
}