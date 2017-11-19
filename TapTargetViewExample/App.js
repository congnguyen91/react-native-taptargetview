/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Button } from 'react-native'

import TapTargetView from 'rn-taptargetview'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

export default class App extends Component<{}> {
  componentDidMount() {
    TapTargetView.ForSequence([this.refs.button1, this.refs.button2], {
      button1: {
        title: 'Button 1 Title',
        description: 'Button 1 Description'
      },
      button2: {
        title: 'Button 2 Title',
        description: 'Button 2 Description'
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button title={'Magic'} ref={'button1'} onPress={() => {}} />
        <Button
          title={'Magic'}
          ref={'button2'}
          onPress={() => {
            TapTargetView.ForView(this.refs.button2, {
              title: 'This is a target button 2',
              description: 'We have the best targets, believe me',
              outerCircleColor: 'outerCircleColor'
            })
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
