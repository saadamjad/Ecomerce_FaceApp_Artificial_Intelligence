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
  ImageBackground,
  TextInput
} from "react-native";

import { TouchableOpacity } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { bindActionCreators } from "redux";
import * as reduxActions from "../redux/actions/action";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import GlobalHeader from "../components/GlobalHeader";
import { CheckBox } from "react-native-elements";
import { connect } from "react-redux";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isopen: false,
      checked: true,
      checked1: false
    };
  }
  Login() {
    this.props.navigation.navigate("Home");
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
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, backgroundColor: "white" }}
        >
          {/* <GlobalHeader
            // arrow={true}
            // // RedDrawerIcon={true}
            // // twoWords
            // BlueDrawerIcon={true}
            backgroundColor="white"
            // RightCart={true}
            // headingText="add to cart"
            navigation={this.props.navigation}
          /> */}
          <View
            style={{
              width: "100%",
              height: 60,
              borderWidth: 0,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {/* <Image
              source={require("../../assets/images/E.png")}
              style={{ height: 100, width: 100 }}
              resizeMode="contain"
            /> */}
            <Text> Signup </Text>
          </View>

          {/* </View> */}
          <View
            style={{
              // justifyContent:'center',

              alignSelf: "center",

              width: "95%",
              backgroundColor: "white",
              flex: 1
            }}
          >
            <View
              style={{
                width: "90%",
                flexDirection: "row",
                marginVertical: 6,

                alignSelf: "center",
                borderRadius: 20,
                backgroundColor: "#ffffff",
                alignItems: "center",
                height: 38,
                shadowColor: "#f1f1f1",
                shadowOffset: {
                  width: 0,
                  height: 4
                },
                shadowOpacity: 0.52,
                shadowRadius: 5,

                elevation: 5
              }}
            >
              <TextInput
                style={{ width: "100%", borderWidth: 0, paddingLeft: 15 }}
                placeholder="first name  "
              />
            </View>
            <View
              style={{
                width: "90%",
                flexDirection: "row",
                marginVertical: 6,

                alignSelf: "center",
                borderRadius: 20,
                backgroundColor: "#ffffff",
                alignItems: "center",
                height: 38,
                shadowColor: "#f1f1f1",
                shadowOffset: {
                  width: 0,
                  height: 4
                },
                shadowOpacity: 0.52,
                shadowRadius: 5,

                elevation: 5
              }}
            >
              <TextInput
                style={{ width: "100%", borderWidth: 0, paddingLeft: 15 }}
                placeholder="Last name  "
              />
            </View>
            <View
              style={{
                width: "90%",
                flexDirection: "row",
                marginVertical: 6,

                alignSelf: "center",
                borderRadius: 20,
                backgroundColor: "#ffffff",
                alignItems: "center",
                height: 38,
                shadowColor: "#f1f1f1",
                shadowOffset: {
                  width: 0,
                  height: 4
                },
                shadowOpacity: 0.52,
                shadowRadius: 5,

                elevation: 5
              }}
            >
              <TextInput
                style={{ width: "100%", borderWidth: 0, paddingLeft: 15 }}
                placeholder="Email"
              />
            </View>
            <View
              style={{
                width: "90%",
                flexDirection: "row",
                marginVertical: 6,

                alignSelf: "center",
                borderRadius: 20,
                backgroundColor: "#ffffff",
                alignItems: "center",
                height: 38,
                shadowColor: "#f1f1f1",
                shadowOffset: {
                  width: 0,
                  height: 4
                },
                shadowOpacity: 0.52,
                shadowRadius: 5,

                elevation: 5
              }}
            >
              <TextInput
                style={{ width: "100%", borderWidth: 0, paddingLeft: 15 }}
                placeholder="Confirm Email  "
              />
            </View>

            <View
              style={{
                width: "90%",
                flexDirection: "row",

                alignSelf: "center",
                borderRadius: 20,
                backgroundColor: "#ffffff",
                alignItems: "center",
                height: 38,
                shadowColor: "#f1f1f1",
                shadowOffset: {
                  width: 0,
                  height: 4
                },
                shadowOpacity: 0.52,
                shadowRadius: 5,
                marginVertical: 6,

                elevation: 5
              }}
            >
              <TextInput
                style={{ width: "85%", borderWidth: 0, paddingLeft: 15 }}
                placeholder="password "
              />
              <Text
                style={{
                  width: "15%",
                  fontSize: 15,
                  color: "#39b5ff",
                  textAlign: "center",
                  fontWeight: "bold",
                  textAlignVertical: "center"
                }}
              >
                @
              </Text>
            </View>

            <View
              style={{
                width: "90%",
                flexDirection: "row",
                marginVertical: 6,

                alignSelf: "center",
                borderRadius: 20,
                backgroundColor: "#ffffff",
                alignItems: "center",
                height: 38,
                shadowColor: "#f1f1f1",
                shadowOffset: {
                  width: 0,
                  height: 4
                },
                shadowOpacity: 0.52,
                shadowRadius: 5,

                elevation: 5
              }}
            >
              <Text style={{ fontSize: 15, marginRight: 20 }}> </Text>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  right: 0,
                  // borderWidth: 1,
                  // height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 50
                  // backgroundColor: "green"
                }}
                onPress={() => this.setState({ isopen: !this.state.isopen })}
                // this.setState(prevState => ({
                //   listOpen: !prevState.listOpen
                // }))
              >
                <FontAwesome name="arrow-down" size={15} color={"#25acfd"} />
              </TouchableOpacity>
            </View>
            {this.state.isopen ? (
              <View
                style={{
                  position: "absolute",
                  right: 26,
                  top: 100,
                  // borderWidth: 0.5,
                  height: 120,
                  paddingVertical: 5,

                  width: "90%",
                  alignSelf: "center",
                  backgroundColor: "white"
                }}
              ></View>
            ) : null}
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                // justifyContent: "center",
                alignItems: "center",
                paddingVertical: 12,
                borderWidth: 0,
                alignSelf: "center"
              }}
            >
              <CheckBox
                checked={this.state.checked}
                onPress={() => this.setState({ checked: !this.state.checked })}
                style={{ backgroundColor: "red" }}
                containerStyle={{
                  // backgroundColor: "red",
                  margin: 0,
                  padding: 0
                }}
              />
              <Text style={{ fontSize: 15, color: "#8b8b8b" }}>
                I accept the{" "}
                <Text style={{ fontSize: 15, color: "#45b8fd" }}>
                  End User License Agreement{" "}
                </Text>{" "}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: "100%",
                // justifyContent: "center",
                alignItems: "center",
                paddingVertical: 0,
                borderWidth: 0,
                alignSelf: "center"
              }}
            >
              <CheckBox
                checked={this.state.checked1}
                onPress={() =>
                  this.setState({ checked1: !this.state.checked1 })
                }
                style={{ backgroundColor: "red" }}
                containerStyle={{
                  // backgroundColor: "red",
                  margin: 0,
                  padding: 0
                }}
              />
              <Text style={{ fontSize: 15, color: "#8b8b8b" }}>
                I accept the{" "}
                <Text style={{ fontSize: 15, color: "#45b8fd" }}>
                  Privacy Policy{" "}
                </Text>{" "}
              </Text>
            </View>

            <TouchableOpacity
              style={{
                marginTop: 30,
                // paddingVertical: 14,
                backgroundColor: "#25acfd",
                borderRadius: 40,
                width: "80%",
                height: 50,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center"
              }}
              // onPress={() => this.Login()}
              onPress={() => this.props.navigation.navigate("Face")}
            >
              {/* <Button */}

              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                  alignSelf: "center"
                }}
              >
                Submit
              </Text>

              {/* </Button> */}
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                marginTop: 0,
                // paddingVertical: 14,
                // backgroundColor: "#49ccc4",
                borderRadius: 40,
                width: "80%",
                height: 50,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center"
              }}
              // onPress={() => this.Login()}
              onPress={() => this.props.navigation.navigate("Signup")}
            >
              {/* <Button */}

              <Text
                style={{
                  color: "#25acfd",
                  fontSize: 18,
                  fontWeight: "bold",
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
