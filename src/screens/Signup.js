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
import Fontisto from "react-native-vector-icons/Fontisto";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }
  Login() {
    this.props.navigation.navigate('Home')
    if (
      this.state.email == "" ||
      this.state.password == "" ||
      this.state.username == ""
    ) {
      alert("please fill ");
    } else {
      let userData = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      };
      this.props.reduxActions.Signup(userData, this.props.navigation);
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
          {/* </View> */}
          <View
            style={{
              alignSelf: "center",

              width: "90%",
              flex: 1
            }}
          >
            <View
              style={{
                width: "100%",
                height: 150,
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

            <Text
              style={{
                color: "#000000",
                fontSize: 22,
                textAlign: "center"
                // marginBottom: 15,
              }}
            >
              SignUp
            </Text>
            <Item regular style={{ borderRadius: 3, marginVertical: 7 }}>
              <Input
                placeholderTextColor={"#ccccc"}
                onChangeText={text => this.setState({ username: text })}
                // value={this.state.password}
                placeholder="Username"
                style={{ fontSize: 14, marginLeft: 0 }}
              />
            </Item>
            <Item regular style={{ borderRadius: 3, marginVertical: 7 }}>
              <Input
                placeholderTextColor={"#ccccc"}
                onChangeText={text => this.setState({ email: text })}
                //  value={this.state.password}
                placeholder="Email"
                style={{ fontSize: 14, marginLeft: 0 }}
              />
            </Item>

            <Item regular style={{ borderRadius: 3, marginVertical: 7 }}>
              <Input
                placeholderTextColor={"#ccccc"}
                onChangeText={text => this.setState({ password: text })}
                // value={this.state.password}
                placeholder="Password"
                style={{ fontSize: 14, marginLeft: 0 }}
              />
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
              onPress={() => this.props.navigation.navigate("Face")}
            >
              {/* <Button */}

              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  alignSelf: "center"
                }}
              >
                signin
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

            <View
              style={{ marginVertical: 20, flex: 1, flex: 1, width: "100%" }}
            >
              <TouchableOpacity
                style={{ marginBottom: 10 }}
                onPress={() => this.props.navigation.navigate("Face")}
              >
                <Text
                  style={{ alignSelf: "center", color: "#555", fontSize: 13 }}
                >
                  Continue as guest?
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

export default connect(null, mapDispatchToProps)(SignUp);
