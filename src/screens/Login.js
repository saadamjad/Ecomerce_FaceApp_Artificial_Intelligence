/* @flow */

import React, {Component} from 'react';
import {Text, Form, Item, Label, Input} from 'native-base';

import {
  Image,
  Platform,
  View,
  KeyboardAvoidingView,
  AsyncStorage,
  Alert,
  ImageBackground,
} from 'react-native';

import {TouchableOpacity} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import {bindActionCreators} from 'redux';
import * as reduxActions from '../redux/actions/action';
import {connect} from 'react-redux';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      selected2: undefined,
      selected: true,
      email: '',
      password: '',
      isloading: false,
      incorrect: false,
      secureTextEntry: true,
      //  Radiobutton: true,

      email_valid: true,
    };
  }
  Login() {
    if (this.state.email == '' || this.state.password == '') {
      alert('please fill ');
    } else {
      let userData = {
        email: this.state.email,
        password: this.state.password,
      };
      this.props.reduxActions.Login();
      // this.props.navigation.navigate('Home');
    }
  }
  componentDidMount() {
    // this.props.reduxActions.Login();
  }
  render() {
    return (
      <KeyboardAvoidingView>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View
            style={{
              width: '100%',
              height: 180,
              borderWidth: 0,
              alignItems: 'center',
              justifyContent: 'center',
            }}></View>

          {/* </View> */}
          <View
            style={{
              // justifyContent:'center',

              alignSelf: 'center',

              width: '90%',
              flex: 1,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 22,
                textAlign: 'center',
                marginBottom: 15,
              }}>
              Forgot Password
            </Text>

            <Item
              regular
              style={{
                alignSelf: 'center',
                marginTop: 10,
                marginLeft: 20,
                marginVertical: 10,
                marginHorizontal: 20,
                borderRadius: 5,
              }}>
              <Input
                style={{paddingRight: 20}}
                placeholderTextColor={'#ccccc'}
                onChangeText={text => this.setState({email: text})}
                value={this.state.email}
                placeholder="Email"
                style={{fontSize: 14, marginLeft: 5}}
              />
              {/* {'<br>'} */}
              <Input
                style={{paddingRight: 20}}
                placeholderTextColor={'#ccccc'}
                onChangeText={text => this.setState({password: text})}
                value={this.state.password}
                placeholder="Password"
                style={{fontSize: 14, marginLeft: 5}}
              />
              {/* <Fontisto color={'#000000'} size={20} style={{marginRight:10}} active name='email' /> */}
            </Item>

            <TouchableOpacity
              style={{
                marginTop: 30,
                paddingVertical: 14,
                backgroundColor: '#000000',
                borderRadius: 40,
                width: '85%',
                height: 55,
                alignSelf: 'center',
              }}
              onPress={() => this.Login()}>
              {/* <Button */}

              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  alignSelf: 'center',
                }}>
                signin
              </Text>

              {/* </Button> */}
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                paddingVertical: 10,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  color: '#555',
                  //marginTop: -70,
                  fontSize: 13,

                  paddingBottom: 5,
                }}>
                ______
              </Text>
              <Text
                style={{
                  alignSelf: 'center',
                  color: '#555',
                  //marginTop: -70,
                  fontSize: 13,
                  marginHorizontal: 10,
                }}>
                Or Login Using
              </Text>
              <Text
                style={{
                  alignSelf: 'center',
                  color: '#555',
                  //marginTop: -70,
                  fontSize: 13,

                  paddingBottom: 5,
                }}>
                ______
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}></View>

            <View style={{marginVertical: 20, flex: 1, flex: 1, width: '100%'}}>
              <TouchableOpacity
                style={{marginBottom: 10}}
                onPress={() => this.props.navigation.navigate('Guest')}>
                <Text
                  style={{alignSelf: 'center', color: '#555', fontSize: 13}}>
                  Continue as guest?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignUp')}
                style={{flexDirection: 'row', alignSelf: 'center'}}>
                <Text style={{color: '#555', fontSize: 13}}>
                  Don't have an account yet?
                </Text>
                <Text style={{color: '#073761', fontSize: 13, marginLeft: 20}}>
                  Create One
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
// const mapStateToProps = state => ({
//   reduxState: state.reducers,
// });

const mapDispatchToProps = dispatch => ({
  reduxActions: bindActionCreators(reduxActions, dispatch),
});

export default connect(null, mapDispatchToProps)(Login);
