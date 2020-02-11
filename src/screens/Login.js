/* @flow */

import React, { Component } from "react";
import { Text, Form, Item, Label, Input } from "native-base";

import {
  Image,
  Platform,
  View,
  KeyboardAvoidingView,
  AsyncStorage,
  Alert,
  ImageBackground
} from "react-native";

import { TouchableOpacity } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { bindActionCreators } from "redux";
import * as reduxActions from "../redux/actions/action";
import { connect } from "react-redux";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  Login() {
    this.props.navigation.navigate('Home');
    if (this.state.email == "" || this.state.password == "") {
      alert("please fill ");
    } else {
      let userData = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.reduxActions.Login(userData, this.props.navigation);
      // this.props.navigation.navigate('Home');
    }
  }
  componentDidMount() {
    // this.props.reduxActions.Login();
  }
  render() {
    return (
      <KeyboardAvoidingView>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={{
              width: "100%",
              height: 100,
              borderWidth: 0,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image
              source={require("../../assets/images/E.png")}
              style={{ height: 100, width: 100 }}
              resizeMode="contain"
            />
          </View>

          {/* </View> */}
          <View
            style={{
              // justifyContent:'center',

              alignSelf: "center",

              width: "90%",
              flex: 1
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 22,
                textAlign: "center",
                marginBottom: 15
              }}
            >
              Login
            </Text>

            <Item
              regular
              style={{
                alignSelf: "center",
                marginTop: 10,
                marginLeft: 20,
                marginVertical: 10,
                marginHorizontal: 20,
                borderRadius: 5
              }}
            >
              <Input
                style={{ paddingRight: 20 }}
                placeholderTextColor={"#ccccc"}
                onChangeText={text => this.setState({ email: text })}
                value={this.state.email}
                placeholder="Email"
                style={{ fontSize: 14, marginLeft: 5 }}
              />
              {/* {'<br>'} */}

              {/* <Fontisto color={'#000000'} size={20} style={{marginRight:10}} active name='email' /> */}
            </Item>
            {/**/}
            <Item
              regular
              style={{
                alignSelf: "center",
                marginTop: 10,
                marginLeft: 20,
                marginVertical: 10,
                marginHorizontal: 20,
                borderRadius: 5
              }}
            >
              <Input
                style={{ paddingRight: 20 }}
                placeholderTextColor={"#ccccc"}
                onChangeText={text => this.setState({ password: text })}
                value={this.state.password}
                placeholder="Password"
                style={{ fontSize: 14, marginLeft: 5 }}
              />
              {/* {'<br>'} */}

              {/* <Fontisto color={'#000000'} size={20} style={{marginRight:10}} active name='email' /> */}
            </Item>

            <TouchableOpacity
              style={{
                marginTop: 30,
                paddingVertical: 14,
                backgroundColor: "#49ccc4",
                borderRadius: 40,
                width: "85%",
                height: 55,
                alignSelf: "center"
              }}
              // onPress={() => this.Login()}
              onPress={() => this.props.navigation.navigate("Signup")}
            >
              {/* <Button */}

              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  alignSelf: "center"
                }}
              >
                Login
              </Text>

              {/* </Button> */}
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                paddingVertical: 10
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  color: "#555",
                  //marginTop: -70,
                  fontSize: 13,

                  paddingBottom: 5
                }}
              >
                ______
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  color: "#555",
                  //marginTop: -70,
                  fontSize: 13,
                  marginHorizontal: 10
                }}
              >
                Or Login Using
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  color: "#555",
                  //marginTop: -70,
                  fontSize: 13,

                  paddingBottom: 5
                }}
              >
                ______
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center" }}></View>

            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <Image
                source={require("../../assets/images/facebook.png")}
                style={{ height: 30, width: 30 }}
              />
              <Image
                source={require("../../assets/images/googleplus.png")}
                style={{
                  height: 30,
                  width: 30,
                  alignSelf: "center",
                  marginLeft: 10
                }}
              />
            </View>

            <View
              style={{ marginVertical: 20, flex: 1, flex: 1, width: "100%" }}
            >
              <TouchableOpacity
                style={{ marginBottom: 10 }}
                onPress={() => this.props.navigation.navigate("Guest")}
              >
                <Text
                  style={{ alignSelf: "center", color: "#555", fontSize: 13 }}
                >
                  Continue as guest?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("SignUp")}
                style={{ flexDirection: "row", alignSelf: "center" }}
              >
                <Text style={{ color: "#555", fontSize: 13 }}>
                  Don't have an account yet?
                </Text>
                <Text
                  style={{ color: "#073761", fontSize: 13, marginLeft: 20 }}
                >
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
const mapStateToProps = state => ({
  reduxState: state.reducers
});

const mapDispatchToProps = dispatch => ({
  reduxActions: bindActionCreators(reduxActions, dispatch)
});

export default connect(null, mapDispatchToProps)(Login);
