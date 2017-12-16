# React Native TapTargetView

React Native Bridge for [KeepSafe/TapTargetView](https://github.com/KeepSafe/TapTargetView)

Before we dive into on how to use this library. We would like to thank all the contributor of [KeepSafe/TapTargetView](https://github.com/KeepSafe/TapTargetView) for providing such a awesome nice, cool library

<img src="https://github.com/KeepSafe/TapTargetView/blob/master/.github/video.gif" width="280" height="498" alt="Video 1"/>

#### iOS Platform

Please refer [react-native-material-showcase-ios](https://github.com/prscX/react-native-material-showcase-ios) for the iOS support

## Installation

* `$ npm install react-native-taptargetview --save`

* `$ react-native link react-native-taptargetview`

## API's

* AppTourView.for: AppTourTarget

```
let appTourTarget = AppTourView.for(Button, {
    primary: 'This is a target button 1',
    description: 'We have the best targets, believe me'
})

AppTour.ShowFor(appTourTarget)
```

> **Note:** App Tour Target Properties are same as defined by [aromajoin/material-showcase-ios](https://github.com/aromajoin/material-showcase-ios)

* AppTourSequence
  * add(AppTourTarget)
  * remove(AppTourTarget)
  * removeAll
  * get(AppTourTarget)
  * getAll

```
let appTourSequence = new AppTourSequence()
this.appTourTargets.forEach(appTourTarget => {
appTourSequence.add(appTourTarget)
})

AppTour.ShowSequence(appTourSequence)
```

* AppTour
  * ShowFor(AppTourTarget)
  * ShowSequence(AppTourTargets)

# Breaking Changes

* **0.0.2**: Changed API's to create same developer experience for both [https://github.com/prscX/react-native-taptargetview](react-native-taptargetview) & [react-native-material-showcase-ios](https://github.com/prscX/react-native-material-showcase-ios)

# Contribution

Any type of contribution will be very much appreciated

# License

Copyright @2017 Pranav Raj Singh Chauhan

The React Native TapTargetView is provided under the MIT License.
