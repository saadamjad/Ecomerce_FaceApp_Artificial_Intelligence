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
  TextInput,
  StyleSheet
} from "react-native";

import { TouchableOpacity } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { bindActionCreators } from "redux";
import * as reduxActions from "../redux/actions/action";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import GlobalHeader from "../components/GlobalHeader";

import { CheckBox, Overlay } from "react-native-elements";
import AwesomeAlert from "react-native-awesome-alerts";
import { connect } from "react-redux";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isopen: false,
      checked1: false,
      checked: true,
      showAlert: false
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

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  render() {
    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, backgroundColor: "white" }}
      >
        <GlobalHeader
          // arrow={true}
          // // RedDrawerIcon={true}
          // // twoWords
          // BlueDrawerIcon={true}
          backgroundColor="white"
          // RightCart={true}
          // headingText="add to cart"
          navigation={this.props.navigation}
        />
        <View
          style={{
            width: "100%",
            height: 100,
            borderWidth: 0,
            alignItems: "center",
            justifyContent: "center",

            flex: 1
          }}
        >
          <Text style={{ fontSize: 20 }}> Login </Text>
        </View>

        {/* </View> */}
        <View
          style={{
            // justifyContent:'center',

            alignSelf: "center",
            height: "100%",

            width: "95%",
            backgroundColor: "white"
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
              placeholder=" Email  "
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
              onPress={() => this.setState({ checked1: !this.state.checked1 })}
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
              Login
            </Text>

            {/* </Button> */}
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 15,
              color: "#45b8fd",
              textAlign: "center",
              paddingVertical: 20
            }}
            onPress={() => {
              this.showAlert();
            }}
          >
            Forgot your password ?
          </Text>
          <Text
            style={{ fontSize: 15, color: "#8b8b8b", textAlign: "center" }}
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            Not yet Register{" "}
            <Text style={{ fontSize: 15, color: "#45b8fd" }}>Register </Text>
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              paddingVertical: 20
            }}
          >
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
            <Image
              source={require("../../assets/images/instagram.png")}
              style={{
                height: 30,
                width: 30,
                alignSelf: "center",
                marginLeft: 10
              }}
            />
          </View>
        </View>
        <Text>I'm AwesomeAlert</Text>
        <TouchableOpacity
          onPress={() => {
            this.showAlert();
          }}
        ></TouchableOpacity>

        <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          title="Sign Out"
          message="Are you sure "
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          confirmButtonStyle={{
            width: 130,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30
          }}
          cancelButtonStyle={{
            width: 130,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30
          }}
          cancelText="No"
          confirmText="Yes"
          confirmButtonColor="#25acfd"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
          contentContainerStyle={{
            height: 160,

            // alignItems: "center",
            justifyContent: "center"
            // backgroundColor: "red"
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
  reduxState: state.reducers
});

const mapDispatchToProps = dispatch => ({
  reduxActions: bindActionCreators(reduxActions, dispatch)
});

export default connect(null, mapDispatchToProps)(Login);
