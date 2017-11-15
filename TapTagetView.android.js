import {
  View,
  StyleSheet,
  requireNativeComponent,
  NativeModules
} from 'react-native'

const { RNTapTargetView } = NativeModules

class TapTargetView extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View>
        <RNTapTargetView
          {...this.props}
          ref={ref => {
            this._taptargetView = ref
          }}
        />
      </View>
    )
  }
}

TapTargetView.propTypes = {
  ...View.propTypes
}

TapTargetView.defaultProps = {}

export default TapTargetView
