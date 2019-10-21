import React, {useState} from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Switch, Platform, StatusBar, StyleSheet, View, ScrollView, Text } from 'react-native';

function updateColors(){
  global.color1 = ((global.darkMode == false) ? '#FFF' : '#000');
  global.color2 = ((global.darkMode == false) ? '#FBFBFB' : '#2B2B2B');
  global.textColor = ((global.darkMode == false) ? '#000' : '#FFF');
}

export default function SettingsScreen() {
  const [sVal, setSVal] = useState(false);
  return (
    <ScrollView style={styles.container,{backgroundColor: global.color1},{textColor: global.textColor}}>
      <ExpoConfigView style={{backgroundColor: global.color1}}/>
      <View style={{backgroundColor: global.color2}}>
        <Text>{"\n"}</Text>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.left}>{"   "}Dark Mode {"                                       "}</Text>
          <Switch
              onValueChange={() => setSVal(((sVal == false) ? true : false))}
              onChange={() => {global.darkMode=!sVal; updateColors();}}
              //style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}
              value={sVal}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'left',
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 0,
    paddingRight: 0,
    paddingLeft: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  left: {
    textAlign: 'left',
  },
});
