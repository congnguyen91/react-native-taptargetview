

# Manual Installation


## iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-atoms` and add `RNAtoms.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNAtoms.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

## Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNAtomsPackage;` to the imports at the top of the file
  - Add `new RNAtomsPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-atoms'
  	project(':react-native-atoms').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-atoms/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-atoms')
  	```

## Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNAtoms.sln` in `node_modules/react-native-atoms/windows/RNAtoms.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Atoms.RNAtoms;` to the usings at the top of the file
  - Add `new RNAtomsPackage()` to the `List<IReactPackage>` returned by the `Packages` method


