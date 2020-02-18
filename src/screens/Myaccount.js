/* @flow */

import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Item,
  Label,
  Input,
  Picker,
  ListItem,
  Radio,
  Spinner
} from "native-base";
// import Fontisto from 'react-native-vector-icons/Fontisto'
import {
  Image,
  Platform,
  View,
  TouchableHighlight,
  KeyboardAvoidingView,
  AsyncStorage,
  TouchableWithoutFeedback,
  ImageBackground
} from "react-native";
// import SplashScreen from "react-native-splash-screen";
import { Col, Row } from "react-native-easy-grid";

import { TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Modal from "react-native-modal";
import Feather from "react-native-vector-icons/Feather";
// import Footer1 from "./../../components/Footer";
// import Feather from 'react-native-vector-icons/Feather'
import { ScrollView } from "react-native-gesture-handler";
// import { TouchableOpacity } from 'react-native-gesture-handler';
import GlobalHeader from "../components/GlobalHeader";

export default class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      selected2: "",
      email: "",
      password: "",
      isloading: false,
      incorrect: false,
      businessName: "",
      name: "",
      phone: "",
      typeOfBusiness: "",
      modalVisible: false,
      email_valid: true
    };
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <ScrollView>
          <GlobalHeader
            arrow={true}
            // RedDrawerIcon={true}
            // twoWords
            // BlueDrawerIcon={true}
            backgroundColor="white"
            // RightCart={true}
            headingText="Profile"
            navigation={this.props.navigation}
          />
          <View
            source={require("../../assets/images/loginback.png")}
            style={{
              // marginTop: -50,
              alignItems: "center",
              justifyContent: "center",
              height: 300,
              width: "100%",
              backgroundColor: "white"
            }}
          >
            <Image
              source={require("../../assets/images/avatar-1.jpg")}
              style={{
                borderColor: "#2f2f2f",
                borderRadius: 50,
                borderWidth: 0.6,
                top: -20,
                width: 100,
                height: 100
              }}
            />
            <Text
              style={{
                color: "#000000",
                fontSize: 22,
                marginTop: 20,
                top: -20
              }}
            >
              John Doe
            </Text>
            <View
              style={{
                position: "absolute",
                top: 20,
                left: 30,
                height: 50,
                width: 50,
                borderRadius: 50
                // backgroundColor: "black"
              }}
            ></View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              alignSelf: "center",
              margin: 20,
              width: "90%",
              padding: 30,
              flexDirection: "column",
              borderRadius: 3,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2
              },
              position: "relative",
              top: -80,
              shadowOpacity: 0.23,
              shadowRadius: 2.62,

              elevation: 2,
              marginTop: 10,
              padding: 5,

              marginHorizontal: "5%",

              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Row
              style={{
                justifyContent: "center",

                alignItems: "center",
                paddingVertical: 20
              }}
            >
              <Col
                style={{
                  alignItems: "center",
                  borderLeftColor: "black",

                  alignItems: "center",

                  justifyContent: "center",
                  height: "80%"
                }}
              >
                <Image
                  source={require("../../assets/images/cartico.png")}
                  style={{ height: 30, width: 40 }}
                />
                <Text style={{ height: 30, marginTop: 5, color: "#2f2f2f" }}>
                  Wishlist
                </Text>
              </Col>
              <Col
                style={{
                  alignItems: "center",
                  borderLeftColor: "#f0f2f5",
                  borderLeftWidth: 2,
                  alignItems: "center",

                  justifyContent: "center",
                  height: "80%"
                }}
              >
                <Image
                  source={require("../../assets/images/cart2.png")}
                  style={{ height: 30, width: 40 }}
                />
                <Text style={{ marginTop: 5, color: "#2f2f2f" }}>Cart</Text>
              </Col>
            </Row>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "white",
              alignSelf: "center",
              margin: 20,
              marginHorizontal: "5%",
              width: "90%",
              padding: 30,
              flexDirection: "column",
              borderRadius: 3,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2
              },
              position: "relative",
              top: -80,
              shadowOpacity: 0.23,
              shadowRadius: 2.62,

              elevation: 2,
              marginTop: 10,
              padding: 5,

              paddingTop: 30,
              alignItems: "center",
              justifyContent: "center"
            }}
            onPress={() => alert("no support available right now ")}
          >
            <Row>
              <Col style={{ alignItems: "center" }}>
                <Text
                  style={{
                    top: -10,
                    textAlign: "left",
                    left: -30,
                    color: "#2f2f2f"
                  }}
                >
                  Support
                </Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Entypo
                  name={"chevron-right"}
                  size={20}
                  style={{
                    textAlign: "right",
                    top: -10,
                    marginRight: 20
                  }}
                ></Entypo>
              </Col>
            </Row>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={this.logout}
            onPress={() => this.props.navigation.navigate("Joinasseller")}
            style={{
              top: -60,
              marginHorizontal: "5%",
              height: 45,
              width: "90%",
              backgroundColor: "#25acfd",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5
            }}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
              LOGOUT
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
