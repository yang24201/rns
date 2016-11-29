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
            <View>
                <TextInput
                    value="Login"
                />
            </View>
        )
    }
}