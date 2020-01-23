import React from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  I18nManager,
  ScrollView,
} from 'react-native';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          height: 100,
          // justifyContent: 'center',
        }}>
        <Text style={{fontSize: 25, textAlign: 'center'}}>Home</Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            height: 50,
            position: 'absolute',
            bottom: 20,
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={{fontSize: 20, color: 'white'}}> Press me </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
