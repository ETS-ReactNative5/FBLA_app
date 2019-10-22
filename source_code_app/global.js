global.darkMode = false;
global.color1 = ((global.darkMode == false) ? '#FFF' : '#000');
global.color2 = ((global.darkMode == false) ? '#FBFBFB' : '#2B2B2B');
global.textColor = ((global.darkMode == false) ? '#000' : '#FFF');
global.updateColors = function updateColors(){
  global.color1 = ((global.darkMode == false) ? '#FFF' : '#000');
  global.color2 = ((global.darkMode == false) ? '#FBFBFB' : '#2B2B2B');
  global.textColor = ((global.darkMode == false) ? '#000' : '#FFF');
};
