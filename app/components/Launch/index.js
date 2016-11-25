import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native'

export default class Launch extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <TextInput
          value="Welcome"
        />
      </View>
    )
  }
}