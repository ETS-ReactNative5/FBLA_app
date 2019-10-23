import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';

global.darkMode = Appearance.getColorScheme()=='light' ? false : true;

global.color1 = ((global.darkMode == false) ? '#FFF' : '#000');
global.color2 = ((global.darkMode == false) ? '#FBFBFB' : '#2B2B2B');
global.textColor = ((global.darkMode == false) ? '#000' : '#FFF');
global.theme = ((global.darkMode == false) ? 'light' : 'dark');

global.updateColors = function updateColors(){
  global.color1 = ((global.darkMode == false) ? '#FFF' : '#000');
  global.color2 = ((global.darkMode == false) ? '#FBFBFB' : '#2B2B2B');
  global.textColor = ((global.darkMode == false) ? '#000' : '#FFF');
  global.theme = ((global.darkMode == false) ? 'light' : 'dark');
};
