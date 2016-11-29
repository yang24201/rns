import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  Dimensions
} from 'react-native'
import {Actions} from 'react-native-router-flux'

const PAGE_WIDTH=Dimensions.get('window').width
const PAGE_HEIGHT=Dimensions.get('window').height

export default class Launch extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setTimeout(() => {
      Actions.LOGIN()
    }, 3000)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={{flex:1, alignItems: 'center', justifyContent: 'center'}}
          value="Welcome"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: PAGE_WIDTH
  },
})