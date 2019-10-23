import React, {useState} from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Switch, Platform, StatusBar, StyleSheet, View, ScrollView, Text } from 'react-native';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
const styles = StyleSheet.create(require('../stylesheet'));
import ProfileScreen from './ProfileScreen';

export default function SettingsScreen() {
  const [mode, setMode] = useState(false);
  return (
    <ScrollView style={styles.container,{textAlign: 'left'}}>
      {/*<ExpoConfigView style={{backgroundColor: global.color1}} />*/}
      <View style={{backgroundColor: global.color2}}>
        <Text>{"\n"}</Text>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.left,{color: global.textColor}}>{"   "}Dark Mode {"                                       "}</Text>
          <Switch
              onValueChange={() => setMode(((mode == false) ? true : false))}
              onChange={() => {global.darkMode=!mode; updateColors();}}
              value={global.darkMode}
              ios_backgroundColor="white"
          />
        </View>
        <Text>{"\n"}</Text>
      </View>
    </ScrollView>
  );
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
};
