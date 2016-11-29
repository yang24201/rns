import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native'

export default class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={{flex:1, alignItems: 'center', justifyContent: 'center'}}
            value="Login"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})