import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'

class Bottom extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title={'Bottom Left'} />
        <Button title={'Bottom Right'} />
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
