
# react-native-native-modules

## Getting started

`$ npm install react-native-native-modules --save`

### Mostly automatic installation

`$ react-native link react-native-native-modules`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-native-modules` and add `RNNativeModules.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNNativeModules.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNNativeModulesPackage;` to the imports at the top of the file
  - Add `new RNNativeModulesPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-native-modules'
  	project(':react-native-native-modules').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-native-modules/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-native-modules')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNNativeModules.sln` in `node_modules/react-native-native-modules/windows/RNNativeModules.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Native.Modules.RNNativeModules;` to the usings at the top of the file
  - Add `new RNNativeModulesPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNNativeModules from 'react-native-native-modules';

// TODO: What to do with the module?
RNNativeModules;
```
  