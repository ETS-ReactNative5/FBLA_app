import React, { useState } from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
  } from 'react-native';
const styles = StyleSheet.create(require('../stylesheet'));
import { AuthSession } from 'expo';


export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };
    
    render() {
        return (
          <View style={styles.container}>
            <Button title="Sign in!" onPress={this._signInAsync} />
          </View>
        );
    }
    
    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
}

LoginScreen.navigationOptions = {
    title: 'Please sign in',
};