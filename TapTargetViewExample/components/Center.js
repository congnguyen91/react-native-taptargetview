import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'

class Center extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title={'Center Left'} />
        <Button title={'Center Center'} />
        <Button title={'Center Right'} />
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
