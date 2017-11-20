import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'

import { TapTarget, TapTargetSequence, TapTargetView } from 'rn-taptargetview'

class Top extends Component {
  componentDidMount() {
    // let tapTargetSequence = new TapTargetSequence()
    // tapTargetSequence.add(
    //   TapTarget.forView(this.refs.button1, {
    //     title: 'This is a target button 1',
    //     description: 'We have the best targets, believe me',
    //     outerCircleColor: 'outerCircleColor'
    //   })
    // )
    // TapTargetView.ShowSequence(tapTargetSequence)
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          ref={'button1'}
          title={'Top Left'}
          onPress={() => {
            let tapTargetSequence = new TapTargetSequence()
            tapTargetSequence.add(
              TapTarget.forView(this.refs.button1, {
                title: 'This is a target button 1',
                description: 'We have the best targets, believe me',
                outerCircleColor: 'outerCircleColor'
              })
            )
            tapTargetSequence.add(
              TapTarget.forView(this.refs.button2, {
                title: 'This is a target button 2',
                description: 'We have the best targets, believe me',
                outerCircleColor: 'outerCircleColor'
              })
            )

            TapTargetView.ShowSequence(tapTargetSequence)
          }}
        />
        <Button ref={'button2'} title={'Top Right'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default Top
