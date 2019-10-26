import React, {useState} from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Switch, Platform, StatusBar, StyleSheet, View, ScrollView, Text } from 'react-native';
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
          <Text>{"\n"}</Text>
            <View style={{flexDirection: "row"}}>
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
}

MoreScreen.navigationOptions = {
  title: 'Settings',
};
