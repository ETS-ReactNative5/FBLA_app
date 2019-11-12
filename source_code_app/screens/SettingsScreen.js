import React, {useState} from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Switch, Platform, StatusBar, StyleSheet, View, ScrollView, Text, Button, AsyncStorage, Image } from 'react-native';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
const styles = StyleSheet.create(require('../stylesheet'));

export default class MoreScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {mode: false,};

  render() {
    return (
      <ScrollView style={styles.container,{textAlign: 'left'}}>

        <View style={{backgroundColor: global.color2}}>
          <View style={{justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{width: 50, height: 50}}
              source={require('../assets/images/furry.png')}
            />
            <Text style={styles.left,{color: global.textColor, fontWeight: 'bold'}}>{global.username}</Text>
            <Button title="Sign Out" onPress={this._signOutAsync} />
          </View>
        </View> 

        <View style={{backgroundColor: global.color3}}>
          <Text>{"\n"}</Text>
          <View style={{flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.left,{color: global.textColor}}>{"    "}Dark Mode {"                                       "}</Text>
            <Switch
              onValueChange={() => this.setState({mode: ((this.state.mode == false) ? true : false),})}
              onChange={() => {global.darkMode=!this.state.mode; updateColors(); this.setState({ mode: this.mode });}}
              value={global.darkMode}
              ios_backgroundColor="white"
            />
          </View>
          <Text>{"\n"}</Text>
        </View>

        <View style={{backgroundColor: global.color2}}>
          <Text>{"\n"}</Text>
          <View style={{flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.left,{color: global.textColor}}>{"    "}Dark Mode {"                                       "}</Text>
            <Switch
              onValueChange={() => this.setState({mode: ((this.state.mode == false) ? true : false),})}
              onChange={() => {global.darkMode=!this.state.mode; updateColors(); this.setState({ mode: this.mode });}}
              value={global.darkMode}
              ios_backgroundColor="white"
            />
          </View>
          <Text>{"\n"}</Text>
        </View>

        <View style={{backgroundColor: global.color3}}>
          <Text>{"\n"}</Text>
          <View style={{flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.left,{color: global.textColor}}>{"    "}Dark Mode {"                                       "}</Text>
            <Switch
              onValueChange={() => this.setState({mode: ((this.state.mode == false) ? true : false),})}
              onChange={() => {global.darkMode=!this.state.mode; updateColors(); this.setState({ mode: this.mode });}}
              value={global.darkMode}
              ios_backgroundColor="white"
            />
          </View>
          <Text>{"\n"}</Text>
        </View>
        
      </ScrollView>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

MoreScreen.navigationOptions = {
  title: 'Settings',
};
