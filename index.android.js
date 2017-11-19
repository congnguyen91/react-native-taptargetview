import { findNodeHandle, NativeModules } from 'react-native'

const { RNTapTargetView } = NativeModules
console.log('RNTapTargetView: ' + NativeModules)

class TapTargetView {
  static ForView(view) {
    console.log(`NativeModules:`, NativeModules)
    RNTapTargetView.ForView(findNodeHandle(view))
  }
}

export default TapTargetView
