import React, {useState} from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Switch, Platform, StatusBar, StyleSheet, View, ScrollView, Text, AsyncStorage, Image, NativeModules } from 'react-native';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create(require('../stylesheet'));

export default class MoreScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {darkModeState: false,refresh: false};

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container,{textAlign: 'left', backgroundColor: global.color1}}>

        <View style={{backgroundColor: global.color2}}>
          <View style={{justifyContent: 'center', alignItems: 'center' }}>
            <Text>{"\n"}</Text>
            <Image
              style={{width: 50, height: 50}}
              source={require('../assets/images/profile.png')}
            />
            <Text style={styles.left,{color: global.textColor, fontWeight: 'bold'}}>{global.username}</Text>
            <Button title="Sign Out" type="clear" onPress={this._signOutAsync} />
          </View>
        </View>

        <View style={{backgroundColor: global.color3, justifyContent: 'center',alignItems: 'center', alignContent: 'center'}}>
          <Text>{"\n"}</Text>
          <View style={{justifyContent: 'center', width: "50%"}}>
            <Button
              title="License"
              type='solid'
              icon={
                <Icon
                  name="arrow-right"
                  size={15}
                  color={global.darkMode==true ? 'white' : 'black'}
                />
              }
              onPress={() => navigate('License')}
            />
          </View>
          <Text>{"\n"}</Text>
        </View>

        <View style={{backgroundColor: global.color2, justifyContent: 'center',alignItems: 'center', alignContent: 'center'}}>
          <Text>{"\n"}</Text>
          <View style={{justifyContent: 'center', width: "50%"}}>
            <Button
              title="Q&A"
              icon={
                <Icon
                  name="arrow-right"
                  size={15}
                  color={global.darkMode==true ? 'white' : 'black'}
                />
              }
              type='solid'
              onPress={() => navigate('QA')}
            />
          </View>
          <Text>{"\n"}</Text>
        </View>

        <View style={{backgroundColor: global.color3, justifyContent: 'center',alignItems: 'center', alignContent: 'center'}}>
          <Text>{"\n"}</Text>
          <View style={{justifyContent: 'center', width: "50%"}}>
            <Button
              title="Local Officer Team"
              icon={
                <Icon
                  name="arrow-right"
                  size={15}
                  color={global.darkMode==true ? 'white' : 'black'}
                />
              }
              type='solid'
              onPress={() => navigate('Officers')}
            />
          </View>
          <Text>{"\n"}</Text>
        </View>

        <View style={{backgroundColor: global.color2, justifyContent: 'center',alignItems: 'center', alignContent: 'center'}}>
          <Text>{"\n"}</Text>
          <View style={{justifyContent: 'center', width: "50%"}}>
            <Button
              title="QR Code Scanner"
              icon={
                <Icon
                  name="arrow-right"
                  size={15}
                  color={global.darkMode==true ? 'white' : 'black'}
                />
              }
              type='solid'
              onPress={() => navigate('QR')}
            />
          </View>
          <Text>{"\n"}</Text>
        </View>

        {/*<View style={{backgroundColor: global.color3}}>
          <Text>{"\n"}</Text>
          <View style={{flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.left, styles.infoText, {color: global.textColor}}>{"    "}Dark Mode {"                                       "}</Text>
            <Switch
              onValueChange={() => {
                this.setState({darkModeState: ((this.state.darkModeState == false) ? true : false)});
                global.darkMode=this.state.darkModeState;
                updateColors();
              }}
              value={global.darkMode}
              ios_backgroundColor="white"
            />
          </View>
          <Text>{"\n"}</Text>
        </View>*/}

        <View style={{backgroundColor: global.color3}}>
          <Text>{"\n"}</Text>
          <View style={{flexDirection: "row", justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
            <Button
              title="Refresh App"
              onPress={() => {
                this.setState({refresh: ((this.state.refresh == false) ? true : false)});
                NativeModules.DevSettings.reload();
              }}
              type='outline'
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
