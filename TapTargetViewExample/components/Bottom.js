import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'

import { TapTarget } from 'rn-taptargetview'

class Bottom extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title={'Bottom Left'}
          ref={ref => {
            this.props.addTapTarget &&
              this.props.addTapTarget(
                TapTarget.forView(ref, {
                  title: 'This is a target button 6',
                  description: 'We have the best targets, believe me',
                  outerCircleColor: 'outerCircleColorPrimary'
                })
              )
          }}
        />
        <Button
          title={'Bottom Right'}
          ref={ref => {
            this.props.addTapTarget &&
              this.props.addTapTarget(
                TapTarget.forView(ref, {
                  title: 'This is a target button 7',
                  description: 'We have the best targets, believe me',
                  outerCircleColor: 'outerCircleColorSecondary'
                })
              )
          }}
        />
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

export default Bottom
