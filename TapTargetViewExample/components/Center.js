import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'

import { TapTarget } from 'rn-taptargetview'

class Center extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title={'Center Left'}
          ref={ref => {
            this.props.addTapTarget &&
              this.props.addTapTarget(
                TapTarget.forView(ref, {
                  title: 'This is a target button 3',
                  description: 'We have the best targets, believe me',
                  outerCircleColor: 'outerCircleColorPrimary'
                })
              )
          }}
        />
        <Button
          title={'Center Center'}
          ref={ref => {
            this.props.addTapTarget &&
              this.props.addTapTarget(
                TapTarget.forView(ref, {
                  title: 'This is a target button 4',
                  description: 'We have the best targets, believe me',
                  outerCircleColor: 'outerCircleColorSecondary'
                })
              )
          }}
        />
        <Button
          title={'Center Right'}
          ref={ref => {
            this.props.addTapTarget &&
              this.props.addTapTarget(
                TapTarget.forView(ref, {
                  title: 'This is a target button 5',
                  description: 'We have the best targets, believe me',
                  outerCircleColor: 'outerCircleColorPrimary'
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

export default Center
