import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {userLogin} from '../../action/userAction'
import {isUserLogin, getUserInfo} from '../../selector/userSelector'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      password: ""
    }
  }

  renderState() {
    if (this.props.isLogin) {
      return (
        <View>
          <Text>登陆成功</Text>
        </View>
      )
    } else {
      return (
        <View>
          <Text>未登陆</Text>
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>用户名：</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            value={this.state.userName} onChangeText={(text) => {this.setState({userName: text})}}
        />

        <Text>密码：</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                   value={this.state.password} onChangeText={(text) => {this.setState({password: text})}}
        />

        <View style={{width: 200, height: 50, borderWidth: 2, borderRadius: 10}}>
          <TouchableOpacity style={{flex: 1,}} onPress={() => this.submit()} >
            <Text style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>提交</Text>
          </TouchableOpacity>
        </View>

        {this.renderState()}
      </View>
    )
  }

  submit() {
    this.props.userLogin({userName: this.state.userName, password: this.state.password})
  }
}

const mapStateToProps = (state, ownProps) => {
  let userInfo = getUserInfo(state)
  console.log("userinfo", userInfo)

  let isLogin = isUserLogin(state)
  return {
    userInfo,
    isLogin
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  userLogin
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100
  },
})