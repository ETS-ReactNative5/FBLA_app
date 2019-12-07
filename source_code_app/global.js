import { Appearance, AppearanceProvider, useColorScheme, AsyncStorage } from 'react-native-appearance';

global.darkMode = Appearance.getColorScheme()=='light' ? false : true;

global.color1 = ((global.darkMode == false) ? '#FFF' : '#000');
global.color2 = ((global.darkMode == false) ? '#FBFBFB' : '#2B2B2B');
global.color3 = ((global.darkMode == false) ? '#E0E0E0' : '#404040');
global.textColor = ((global.darkMode == false) ? 'rgba(96,100,109, 1)' : '#FFF');
global.theme = ((global.darkMode == false) ? 'light' : 'dark');
global.username = null;
global.password = null;

global.updateColors = function updateColors(){
  global.color1 = ((global.darkMode == false) ? '#FFF' : '#000');
  global.color2 = ((global.darkMode == false) ? '#FBFBFB' : '#2B2B2B');
  global.color3 = ((global.darkMode == false) ? '#E0E0E0' : '#404040');
  global.textColor = ((global.darkMode == false) ? 'rgba(96,100,109, 1)' : '#FFF');
  global.theme = ((global.darkMode == false) ? 'light' : 'dark');
};

global.retrieveItem = async (key) => {
  try {
    const retrievedItem =  await AsyncStorage.getItem(key);
    const item = JSON.parse(retrievedItem);
    item = item.toString();
    return item;
  } catch (error) {
    console.log(error.message);
  }
  return
}

global.storeItem = async (key, item) => {
  try {
      //we want to wait for the Promise returned by AsyncStorage.setItem()
      //to be resolved to the actual value before returning the value
      var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
      return jsonOfItem;
  } catch (error) {
    console.log(error.message);
  }
}
