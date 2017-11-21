import { findNodeHandle, NativeModules } from 'react-native'

const { RNTapTargetView } = NativeModules

class TapTargetView {
  static ShowSequence(sequence) {
    let tapTargets = sequence.getAll()

    let viewIds = []
    let props = {}

    tapTargets &&
      tapTargets.forEach((tapTarget, key, tapTargets) => {
        viewIds.push(tapTarget.view)
        props[key] = tapTarget.props
      })

    RNTapTargetView.ShowSequence(viewIds, props)
  }

  static ShowFor(tapTarget) {
    RNTapTargetView.ShowFor(tapTarget.view, tapTarget.props)
  }
}

class TapTargetSequence {
  constructor() {
    this.tapTargets = new Map()
  }

  add(tapTarget) {
    this.tapTargets.set(tapTarget.view, tapTarget)
  }

  remove(tapTarget) {
    this.tapTargets.delete(tapTarget.view)
  }

  removeAll() {
    this.tapTargets = new Map()
  }

  get(tapTarget) {
    return this.tapTargets.get(tapTarget)
  }

  getAll() {
    return this.tapTargets
  }
}

class TapTarget {
  static forView(view, props) {
    return {
      view: findNodeHandle(view),
      props: props
    }
  }
}

export { TapTarget, TapTargetSequence, TapTargetView }
