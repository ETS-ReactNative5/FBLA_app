import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';

global.darkMode = Appearance.getColorScheme()=='light' ? false : true;

global.color1 = ((global.darkMode == false) ? '#FFF' : '#000');
global.color2 = ((global.darkMode == false) ? '#FBFBFB' : '#2B2B2B');
global.color3 = ((global.darkMode == false) ? '#E0E0E0' : '#404040');
global.textColor = ((global.darkMode == false) ? 'rgba(96,100,109, 1)' : '#FFF');
global.theme = ((global.darkMode == false) ? 'light' : 'dark');

global.updateColors = function updateColors(){
  global.color1 = ((global.darkMode == false) ? '#FFF' : '#000');
  global.color2 = ((global.darkMode == false) ? '#FBFBFB' : '#2B2B2B');
  global.color3 = ((global.darkMode == false) ? '#E0E0E0' : '#404040');
  global.textColor = ((global.darkMode == false) ? 'rgba(96,100,109, 1)' : '#FFF');
  global.theme = ((global.darkMode == false) ? 'light' : 'dark');
};
