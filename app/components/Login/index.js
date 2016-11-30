import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      password: ""
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>用户名：</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            value={this.state.userName}
        />

        <Text>密码：</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                   value={this.state.password}
        />

        <View style={{width: 200, height: 100}}>
          <TouchableOpacity style={{flex: 1}} onPress={() => this.submit()} />
        </View>
      </View>
    )
  }

  submit() {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})